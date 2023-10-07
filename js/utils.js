export function notANumber(value) {
  return isNaN(value) || value == ""
}

//calculaion formula IMC
export const calculateIMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};