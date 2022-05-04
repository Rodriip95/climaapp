//Funciones para convertir las temperaturas a Celsius

export const fromKelvinToCelsius = (temp) => {
    const final = parseFloat(temp) - 273.15;
    return final.toFixed(1)
}

export const fromFahrenheitToCelsius = (temp) => {
    let val = parseFloat(temp);
    let final = (val-32)/1.8
    return final.toFixed(1)
  }