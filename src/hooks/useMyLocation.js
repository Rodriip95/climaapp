import React, {useState} from 'react';
import {
  tempForLocation,
  getTempMyLocation,
  tempForLocationDailys,
} from '../api';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {
  dispatchMyLocation,
  dispatchTempMyLocation,
  dispatchTempMyLocationDailys,
} from '../store/reducer';

export default function useMyLocation() {
  const [stateMyLocation, setStateMyLocation] = useState(null);
  const [tempMyLocation, setTempMyLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  /**
   * Obtiene las coordenadas del dispositivo,
   * despacha en el store la posicion
   */
  const getCurrentLocation = () => {
    setLoading(true);
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        setStateMyLocation(position);
        dispatch(dispatchMyLocation(position));
        getTempForLocation(position);
      },
      error => {
        console.log('map error: ', error);
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  /**
   * Obtiene los datos del clima de la ubicacion,
   * despacha en el store la temperatura
   */
  const getTempForLocation = async position => {
    try {
      const temperature = await tempForLocation(
        position.coords.latitude,
        position.coords.longitude,
      );
      const temperatureDailys = await tempForLocationDailys(
        position.coords.latitude,
        position.coords.longitude,
      );
      setTempMyLocation(temperature);
      dispatch(dispatchTempMyLocation(temperature));
      dispatch(dispatchTempMyLocationDailys(temperatureDailys));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    stateMyLocation,
    tempMyLocation,
    getCurrentLocation,
    loading,
  };
}
