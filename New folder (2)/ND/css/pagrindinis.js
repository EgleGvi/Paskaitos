
function band() {
    var data = document.getElementById("date").value;
    var nr = document.getElementById("nr").value;
    var km = document.getElementById("km").value;
    var time = document.getElementById("time").value;



    var table = document.getElementById("lentele");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = data;
    cell2.innerHTML = nr;
    cell3.innerHTML = km;
    cell4.innerHTML = time;


    document.getElementById('date').value = '';
    document.getElementById('nr').value = '';
    document.getElementById('km').value = '';
    document.getElementById('time').value = '';
}
