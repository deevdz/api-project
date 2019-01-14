//var xhr = new XMLHttpRequest();
//var data;

//xhr.open("GET", "https://swapi.co/api/");
//xhr.send();

//function setData (jsonData) {
//   data = jsonData;
//    console.log(data);
//}

//xhr.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        data = this.responseText;
//        setData(JSON.parse(this.responseText));
//    };
//}


function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
