function convertTemperature () {
    var fromUnit = document.getElementById('From').value;
    var toUnit = document.getElementById('To').value;
    var temp = parseFloat(document.getElementById('input').value);
    
    var convertedValue;
    var resultUnit;

    switch(fromUnit)
    {
        case 'C':
            {
                if(toUnit === 'F'){
                    convertedValue = (temp * 9/5) + 32;
                    resultUnit='F'  ;
                }
                else if(toUnit === 'K'){
                    convertedValue = (temp+273.15);
                    resultUnit = 'K';
                }
                else{
                    convertedValue = temp;
                    resultUnit = 'C';
                }
                break;
            }
            case 'F':
                {
                    if(toUnit === 'C'){
                        convertedValue = (temp - 32) * 5/9;
                        resultUnit='F'  ;
                    }
                    else if(toUnit === 'K'){
                        convertedValue = ((temp - 32) * 5/9)+273.15;
                        resultUnit = 'K';
                    }
                    else{
                        convertedValue = temp;
                        resultUnit = 'F';
                    }
                    break;
                }

                case 'K':
                {
                    if(toUnit === 'C'){
                        convertedValue = temp - 273.15;
                        resultUnit='C'  ;
                    }
                    else if(toUnit === 'F'){
                        convertedValue = ((temp - 273.15) * 5/9)*9/5;
                        resultUnit = 'K';
                    }
                    else{
                        convertedValue = temp;
                        resultUnit = 'K';
                    }
                    break;
                }          
    }

    document.getElementById('output').value = convertedValue.toFixed(2)+" "+resultUnit;

}
