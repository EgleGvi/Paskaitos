      
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

                var html = "<table>";
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
                        return "Hallo welt";
                }
                if (language == "lv") {
                        return "Sveiks pasaule";
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
