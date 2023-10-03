function intake() {
  var input_temp = document.getElementById("input_temp").value;
  input_temp = parseInt(input_temp);
  var unit = document.getElementById("Unit").value;
  var Celsius = document.getElementById("Celsius").value;
  var Fahrenheit = document.getElementById("Fahrenheit").value;
  var Kelvin = document.getElementById("Kelvin").value;
  console.log();
  if (unit === "default") {
    alert("Choose unit");
  } else if (unit === "C") {
    document.getElementById("Celsius").value = input_temp;
    Fahrenheit = input_temp * (9 / 5) + 32;
    document.getElementById("Fahrenheit").value = Fahrenheit;
    Kelvin = input_temp + 273.15;
    document.getElementById("Kelvin").value = Kelvin;
  } else if (unit === "F") {
    Celsius = (input_temp - 32) * (5 / 9);
    document.getElementById("Celsius").value = Celsius;
    document.getElementById("Fahrenheit").value = input_temp;
    Kelvin = Celsius + 273.15;
    document.getElementById("Kelvin").value = Kelvin;
  }

  if (unit === "K") {
    Celsius = input_temp - 273.15;
    document.getElementById("Celsius").value = Celsius;
    Fahrenheit = Celsius * 1.8 + 32;
    document.getElementById("Fahrenheit").value = Fahrenheit;
    document.getElementById("Kelvin").value = input_temp;
  }
}
