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
    console.log('veikia');

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