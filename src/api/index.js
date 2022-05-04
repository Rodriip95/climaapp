import { fromKelvinToCelsius } from '../utils/convertedTemp';
import { formatDate } from '../utils/format';

const HOST = 'https://api.openweathermap.org/data/2.5';
const KEY = '9b20db08b8c5fd98c6a13ffa6285080a';
const LANG = 'es';

export const buildUrl = (arrValues, daily = false) => {
  let extension = '';
  arrValues.forEach(element => {
    extension += `&${element.key}=${element.value}`;
  });
  return daily
    ? `${HOST}/onecall?appid=${KEY}${extension}&lang=${LANG}&exclude=hourly,minutely,alerts`
    : `${HOST}/weather?appid=${KEY}${extension}&lang=${LANG}`;
};

export const buildUrlImage = icon => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const tempForLocationDailys = async (lat, lon) => {
  const route = [
    {
      key: 'lat',
      value: lat,
    },
    {
      key: 'lon',
      value: lon,
    },
  ];
  const query = buildUrl(route, true);
  try {
    const response = await fetch(query);
    const data = await response.json();
    const body = []
    const now = new Date();
    const today = now.getDay();
    const day = now.getDate()
    data.daily.forEach((daily, index) => {
      if (index < 5) {
        body.push({
          day: day + index,
          date: formatDate(today + index),
          temp: fromKelvinToCelsius(daily.temp.day),
          max: fromKelvinToCelsius(daily.temp.max),
          min: fromKelvinToCelsius(daily.temp.min),
          icon: daily.weather[0].icon,
          description: daily.weather[0].description,
        })
      }
    })
    return body;
  } catch (error) {
    console.log(error);
    return null
  }
};

export const tempForLocation = async (lat, lon) => {
  const route = [
    {
      key: 'lat',
      value: lat,
    },
    {
      key: 'lon',
      value: lon,
    },
  ];
  const query = buildUrl(route);
  try {
    const response = await fetch(query);
    const data = await response.json();
    const body = {
      main: data.weather[0].main,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temp: fromKelvinToCelsius(data.main.temp),
      max: fromKelvinToCelsius(data.main.temp_max),
      min: fromKelvinToCelsius(data.main.temp_min),
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    };
    return body;
  } catch (error) {
    console.log(error);
    return null
  }
};

export const TempForCity = async city => {
  const route = [
    {
      key: 'q',
      value: city,
    },
  ];
  const query = buildUrl(route);
  try {
    const response = await fetch(query);
    const data = await response.json();
    const body = {
      coord: data.coord,
      main: data.weather[0].main,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temp: fromKelvinToCelsius(data.main.temp),
      max: fromKelvinToCelsius(data.main.temp_max),
      min: fromKelvinToCelsius(data.main.temp_min),
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    };
    return body;
  } catch (error) {
    return null;
  }
};
