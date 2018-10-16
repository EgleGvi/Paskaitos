      
/*
        var krabai = document.getElementById("mano-pirmas-isvedimas");
        krabai.innerHTML = 'labas aš krabas';
*/
        table ();
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
        

// 16.4 uzdavinys

        function table() {
                var fullArray = [[15, 10 ,15, 20], [20, 10 ,20, 10], [7, 7 ,7, 7]];
                var array0 = fullArray[0];
                var array1 = fullArray[1];
                var array2 = fullArray[2];    
                
                var array0pairs = countPairs(array0[0], array0[1], array0[2], array0[3]);
                var array1pairs = countPairs(array1[0], array1[1], array1[2], array1[3]);
                var array2pairs = countPairs(array2[0], array2[1], array2[2], array2[3]);

                var array0type = getType(array0pairs);
                var array1type = getType(array1pairs);
                var array2type = getType(array2pairs);

                var array0perimeter = perimeter (array0[0], array0[1], array0[2], array0[3]);
                var array1perimeter = perimeter (array1[0], array1[1], array1[2], array1[3]);
                var array2perimeter = perimeter (array2[0], array2[1], array2[2], array2[3]);

                var array0area = area (array0[0], array0[1], array0[2], array0[3], array0type);
                var array1area = area (array1[0], array1[1], array1[2], array1[3], array1type);
                var array2area = area (array2[0], array2[1], array2[2], array2[3], array2type);

                var html = "<table class='table-js'>";
                html+="<tr><td>"+array0type+"</td><td>"+array0[0]+" "+array0[1]+" "+array0[2]+" "+array0[3]+"</td><td>"+array0perimeter+"</td><td>"+array0area+"</td></tr>";
                html+="<tr><td>"+array1type+"</td><td>"+array1[0]+" "+array1[1]+" "+array1[2]+" "+array1[3]+"</td><td>"+array1perimeter+"</td><td>"+array1area+"</td></tr>";
                html+="<tr><td>"+array2type+"</td><td>"+array2[0]+" "+array2[1]+" "+array2[2]+" "+array2[3]+"</td><td>"+array2perimeter+"</td><td>"+array2area+"</td></tr>";
                html+="</table>";

                var tableDiv = document.getElementById("rectangle-table");
                tableDiv.innerHTML = html;
                
        }

        function area (a, b, c, d, type) {
                if (type == "Kvadratas" || type == "Stačiakampis"){
                        return a*b;
                }
                else if (type == "Trapecija") {
                        return "per sudėtingai";
                }     

                return "Nežinomas plotas";
        }

        function perimeter (a, b, c, d) {
                return a + b + c + d;
        }

        function getType (pairNumber) {
                if (pairNumber == 6) {
                        return "Kvadratas";
                }
                else if (pairNumber == 2) {
                        return "Stačiakampis";
                }
                else if (pairNumber == 1) {
                        return "Trapecija";
                }
                return "Nežinomas keturkampis";
        }

        function countPairs(a, b, c, d) {
                var pairs = 0;
                if (a == b) {
                        pairs++;
                }
                if (a == c) {
                        pairs++;
                }
                if (a == d) {
                        pairs++;
                }
                if (b == c) {
                        pairs++;
                }
                if (b == d) {
                        pairs++;
                }
                if (c == d) {
                        pairs++;
                }
                return pairs;
        }



        function hello (language) {
                if (language == "lt") {
                        return "Labas, pasauli";
                }
                if (language == "de") {
                        return "Hallo, welt";
                }
                if (language == "lv") {
                        return "Sveiks, pasaule";
                }
                return "Hello, World";
        }

        
        function grade (gradeNumber) {
                if (gradeNumber == 10) {
                        return "A";
                }
                if (gradeNumber == 9 || gradeNumber == 8) {
                        return "B";
                }
                if (gradeNumber == 7 || gradeNumber == 6) {
                        return "C";
                }
                if (gradeNumber == 5 || gradeNumber == 4) {
                        return "D";
                }
                if (gradeNumber == 3 || gradeNumber == 2) {
                        return "E";
                }
                if (gradeNumber == 1) {
                        return "F";
                }  
                return "error";
        }



        function plural (number, noun) {
                if (noun == "sheep" || noun == "geese") {
                        return number + " " + noun;
                }
                if (number == 1) {
                        return number + " " + noun;
                }
                if (number > 1) {
                        return number + " " + noun + "s";
                }
        }


//ciklai


        var arrayM = [ 22, 64, 0, -55, 4, 7, -1, 8, -66 ];
        var suma = 0;
        var i = 0;
        var ilgis = arrayM.length;

        console.log('arrayM.length lygu:' + arrayM.length );
        while (i < arrayM.length) {
                suma += arrayM[i];
                i++;
        }
         var average = suma / ilgis;
        console.log(average);



        var s = "";
        var i;
         for(i=0; i<=20; i++) {
             s += "skaicius" + i + " ";
             console.log(i);
         }


        var s = "";
        var i;
        for(i=0; i<=20; i=i+4) {
            s += "skaicius" + i + " ";
            console.log(i);
        }


        document.querySelector(".js-target").innerHTML = document.querySelector(".treciokas").innerHTML;


// 17.1

        var counter = -10;

        while(counter < 20){
            console.log(counter);
            counter++;
        }
// 17.2

        var counter = 10;

        while(counter <= 40){
                if (counter % 2 == 0) {
                    console.log(counter);
                }
            counter+=1;
        }

// 17.3

        var counter = 300;
        while(counter <= 333){
            if(counter % 2 !== 0){
                console.log(counter);
            }
            counter+=1;
        }

// 17.4

        var counter = 5;

        while(counter <= 50){
            if(counter % 5 === 0 && counter % 3 === 0){
                console.log(counter);
            }
            counter+=1;
        }

// 17.5

        function square (number, power) {
                var answer = 1;
            for(i=0; i<power; i++) {
                answer = answer * number;
            }
            console.log(answer.toFixed(2));
        }


// 17.6

        function chairs (row, chairs) {
            var kedesEileje = chairs;
            var sum = kedesEileje;
            for(i=1; i<row; i++) {
                kedesEileje = kedesEileje + 2;
                sum += kedesEileje; //sum = sum + kedesEileje;
            }
            console.log(sum);
        }


// 17.7

        function year (m, n) {
            for(i=m; i<n; i++) {
            if(i % 4 == 0 && i % 100 !== 0 || i % 400 == 0)
                console.log(i);
            }
        }

