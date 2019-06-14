var contentTitle;
var content;
var title;
var values;
var fileTitle;
var library;
var selectedLibraryValue;
var librariesDiv;

document.addEventListener(
    "DOMContentLoaded",
    function () {
        if (!localStorage.getItem('fileTitle') || localStorage.getItem('fileTitle') == 'undefined') {
            document.querySelector('select[name="libraries"]').onchange = librariesChangeEventHandler;
            getLibraryData(function (response) {
                library = JSON.parse(response);
                setUpFirstEncounter(library);
            });
        } else {
            document.getElementById('change-path').addEventListener('click', function() {
                changePath();
            });

            loadData();

            fadeIn(document.getElementById("content"), 500);
            fadeIn(document.getElementById("search-box-div"), 500);
            fadeIn(document.getElementById("gmail-div"), 700);
        }
    },
    false
);

function librariesChangeEventHandler(event) {
    selectedLibraryValue = event.target.options[event.target.selectedIndex].dataset['content'];
    localStorage.setItem('fileTitle', selectedLibraryValue);
    loadData();
    document.getElementById('change-path').addEventListener('click', function() {
        changePath();
    });
}

function setUpFirstEncounter(libraryData) {

    librariesDiv = document.getElementById('libraries');

    for (var i = 0; i < libraryData.length; i++) {
        var newOption = document.createElement("option");
        newOption.value = i;
        newOption.innerHTML = libraryData[i]["title"];
        newOption.setAttribute('data-content', libraryData[i]["slug"]);

        librariesDiv.appendChild(newOption);
    }

    fadeIn(document.getElementById('welcome-content'), 500);
    fadeIn(librariesDiv, 500);

}

function changePath() {
    localStorage.removeItem('fileTitle');
    location.reload();
}

function loadData() {

    fadeOut(document.getElementById('welcome-content'), 500);
    fadeOut(document.getElementById('libraries'), 500);

    fileTitle = localStorage.getItem('fileTitle') + ".json";

    loadJSON(fileTitle, function (response) {

        content = JSON.parse(response);

        title = content[0]["title"];
        values = content[0]["values"];

        document.getElementById("content").innerText = values[Math.floor(Math.random() * values.length)]["value"];

        document.body.style.background = newGradientTexture();

        fadeIn(document.getElementById("content"), 500);
        fadeIn(document.getElementById("search-box-div"), 500);
        fadeIn(document.getElementById("gmail-div"), 700);

    });
}

function loadJSON(fileTitle, callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    const baseUrl = 'https://raw.githubusercontent.com/thearsalan/memorex/master/MemorexContent/';

    contentTitle = fileTitle;

    xobj.open("GET", baseUrl + contentTitle, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function getLibraryData(callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    const libraryURL = 'https://raw.githubusercontent.com/thearsalan/memorex/master/MemorexContent/library.json';

    xobj.open("GET", libraryURL, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function newGradientTexture() {
    var randomColor1 =
        "#" + Math.floor(Math.random() * 16777215).toString(16) + "20 20%";
    var randomColor2 =
        "#" + Math.floor(Math.random() * 16777215).toString(16) + "30 100%";
    return (
        "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")"
    );
}

function fadeIn(element, delay) {
    element.classList.remove("invisible_element");
    setTimeout(function () {
        element.classList.remove("fade");
        document.documentElement.scrollTop = 0;
    }, delay);
}
function fadeOut(element, delay) {
    element.classList.add("invisible_element");
    setTimeout(function () {
        element.classList.add("fade");
        document.documentElement.scrollTop = 0;
    }, delay);

}
