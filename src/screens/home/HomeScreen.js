import React, { useState } from 'react';
import {
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  TempForCity,
} from '../../api';
import ContainerScreen from '../../components/ContainerScreen';
import Weather from '../../components/Weather';
import { dispatchCity } from '../../store/reducer';
import CitiesList from '../../components/CitiesList';
import InputSearch from '../../components/InputSearch';

const HomeScreen = () => {
  const { tempMyLocation, tempMyLocationDailys, cities } = useSelector(
    state => state.location,
  );

  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const handlerSearch = async () => {
    Keyboard.dismiss();
    try {
      const res = await TempForCity(city);
      if (res) {
        dispatch(dispatchCity(res));
      } else {
        Alert.alert(
          'Ciudad no encontrada',
          'Por favor coloque la ciudad correcta.',
        );
      }
    } catch (error) {
      Alert.alert('Ocurrio un error', 'Vuelva a intentarlo mas tarde');
    } finally {
      setCity('');
    }
  };

  return (
    <ContainerScreen>
      <Weather
        tempMyLocation={tempMyLocation}
        tempMyLocationDailys={tempMyLocationDailys}
      />
      <InputSearch city={city} setCity={setCity} handlerSearch={handlerSearch} />
      <CitiesList />
    </ContainerScreen>
  );
};

export default HomeScreen;
