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

    var kdate = document.getElementById('date').value;
    var knr = document.getElementById('nr').value;
    var kkm = document.getElementById('km').value;
    var ktime = document.getElementById('time').value;

    console.log(kdate);
    console.log(knr);
    console.log(kkm);
    console.log(ktime);


}