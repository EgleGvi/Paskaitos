// 19.1

var x = 369;
function reverse (x)
{
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverse(x));

// 19.2

var abc = "marija";
function alphabet(abc)
{
    return abc.split('').sort().join('');
}
console.log(alphabet(abc));


// 19.3

function addTable() {

    var kdate = document.getElementById('date');
    var knr = document.getElementById('nr');
    var kkm = document.getElementById('km');
    var ktime = document.getElementById('time');

    console.log(kdate.value);
    console.log(knr.value);
    console.log(kkm.value);
    console.log(ktime.value);

    var table = document.getElementById('table-js');
    var row = table.insertRow();
    row.insertCell().innerHTML = kdate.value;
    row.insertCell().innerHTML = knr.value;
    row.insertCell().innerHTML = kkm.value;
    row.insertCell().innerHTML = ktime.value;

    kdate.value = "";
    knr.value = "";
    kkm.value = "";
    ktime.value = "";

}

// Papildomos uzduotys - kintamieji


    var children = 3;
    var parName = "Adomas";
    var country = "Australia"
    var job = "Manager"
    var fortTeller = "You will be " + job + " in " + country + " and married to " + parName + " with " + children + " children";

    document.getElementById('fortune').innerHTML = fortTeller;



    var birth = 1991;
    var future = 2034;
    var calc = future - birth;

    console.log(calc);
    console.log(calc-1);

    /*
    var birthYear = 1984;
    var futureYear  = 2012;
    var age  = futureYear - birthYear;
    console.log('I will be either ' + age + ' or ' + (age - 1));
    */


    var currentAge = 27;
    var maxAge = 50;
    var snack = 4;

    console.log((maxAge - currentAge) * (365 * snack));



    var a = [10, 20, 0, 30, -15, 50, 150, -88, 5];
    var suma = 1;
    for(i=0; i<a.length; i++) {
            //console.log(a[i]);
            if(a[i] <= 0) {
                break;
            }
            var suma = suma * a[i];
            console.log(suma);
    }



    var b = [10, 20, 0, 30, -15, 50, 150, -88, 5];
    var suma = 0;
    for(i=0; i<b.length; i++) {
        if(b[i] < 0) {
            console.log(b[i]);
        }
    }





