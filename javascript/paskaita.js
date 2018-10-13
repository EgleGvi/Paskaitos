      
/*
        var krabai = document.getElementById("mano-pirmas-isvedimas");
        krabai.innerHTML = 'labas aš krabas';
*/

        function calculate() {
                var a = document.getElementById("varA").value;
                var b = document.getElementById("varB").value;
                var c = document.getElementById("varC").value;
                var answer = document.getElementById("answer");
        
                if (a + b <= c) {
                        answer.innerHTML = 'Nesusidaro';
                } else if (a == b && a == c) {
                        answer.innerHTML = 'Lygiakraštis';
                } else if  (a == b || b == c || a==c) {
                        answer.innerHTML = 'Lygiašonis';
                }
                else {
                        answer.innerHTML = 'Įvairiakraštis';
                }
        }
        
        