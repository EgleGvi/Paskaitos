<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="http://localhost/Paskaitos/namu-darbai-js/js-uzduotys.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</head>

<body>

<div class="input-wrapper">
    <form>
        <h5>Data</h5>
        <input name="date" id="date" type="text">
        <h5>Numeris</h5>
        <input name="nr" id="nr" type="text">
        <h5>Atstumas km</h5>
        <input name="km" id="km" type="text">
        <h5>Laikas</h5>
        <input name="time" id="time" type="text">
    </form>

    <button onclick="addTable()">Saugoti</button>
</div>

<div id="table-wrapper">
    <table id="table-js">
        <tr>
            <th>Data</th>
            <th>Numeris</th>
            <th>Atstumas</th>
            <th>Laikas</th>
        </tr>
    </table>
</div>

<div>
    <p id="fortune"></p>
</div>


<div>
    <table id="myTable">

    </table>
</div>







<script type="text/javascript" src="http://localhost/Paskaitos/namu-darbai-js/js-uzduotys.js"></script>
</html>

