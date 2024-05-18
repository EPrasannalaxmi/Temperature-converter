function convertTemperature() {
    var celsiusInput = document.getElementById('celsius').value;
    if (!isNaN(celsiusInput)) {
      var fahrenheitResult = (celsiusInput * 9/5) + 32;
      document.getElementById('result').innerHTML = fahrenheitResult.toFixed(2);
    } 
    else 
      document.getElementById('result').innerHTML = 'Invalid input';
    
  }
  