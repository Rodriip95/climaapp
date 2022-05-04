/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import type {Node} from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import useMyLocation from './src/hooks/useMyLocation';
import ContainerScreen from './src/components/ContainerScreen';
import Spinner from './src/components/Spinner';

const App: () => Node = () => {

  const {getCurrentLocation, loading} = useMyLocation()

  /**
   * Obtiene los permisos de la ubicacion del dispositivo.
   * Si los permisos son aceptados consultara las coordenadas.
   */
  const getPermissionsLocation = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permiso de ubicación del dispositivo',
            message: 'Permitir que la aplicación obtenga su ubicación actual',
            buttonNeutral: 'Pregúntame Luego',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceptar',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location enabled');
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    getPermissionsLocation();
  }, []);

  if(loading){
    return (
      <ContainerScreen>
        <Spinner/>
      </ContainerScreen>
    )
  }

  return <RootNavigation />;
};

export default App;
