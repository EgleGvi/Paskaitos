// 19.1
/*
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


// namu darbai apie suns metus


    var puppyAge = 7;
    var humanAge = 1;
    var age = puppyAge * humanAge;
    function calculateDogAge(age) {
        console.log(age);
    }


    calculateDogAge(age);

//kitas variantas su masyvu

    var puppyAge=7;
    var humanAge=[10,15,20];


    function calculateDogAge(){
        for(i=0;i<humanAge.length;i++) {
            var age=puppyAge*humanAge[i];
            console.log(age);
        }
    }
    calculateDogAge();




    function myFunction(krastine, krastas, krastelis) {
            return krastine * krastas * krastelis;
    }
    console.log(myFunction(1,5,5));




    function myFunction(krastine, krastas, krastelis, krastulelis) {
        return krastine + krastas + krastelis + krastulelis;
    }
    console.log(myFunction(17,5,5,2));





function masyvopaieska(masyviux) {

    var i = 0;
    var b = masyviux;
    // [1550, 25, -100, 30]
    var didziausias = 0;
    while (i < b.length) {
        if (b[i] > didziausias) {
            var didziausias = b[i];
        }
        i++;
    }

    return masyviux;
}

var a = [150, 55, -100, 305];
var b = [1550, 25, -100, 30];
var c = [16, 95, -50, 80];
console.log( masyvopaieska(b) );
*/



// 20.1 uzduotis

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    //var table = document.getElementById('myTable');
    for(var i=0; i<library.length; i++) {
        console.log(library[i]['author']);
        console.log(library[i]['title']);
        console.log(book(library[i]['readingStatus']));

        function book(readingStatus){
            if(readingStatus){
                return 'Perskaityta';
            }
            else{
                return 'Neskaityta';
            }
        }
    }

   /* var row = table.insertRow();
    row.insertCell().innerHTML = library[i]['author'];
    row.insertCell().innerHTML = library[i]['title'];
    row.insertCell().innerHTML = library[i]['readingStatus'];

    }


*/




