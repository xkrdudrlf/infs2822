let id = 1;
let inputLists = [];

let newDate = document.getElementById("newDate").value;
let newMinTemp = document.getElementById("newMinTemp").value;
let newMaxTemp = document.getElementById("newMaxTemp").value;
let newConditions = document.getElementById("newConditions").value;
let entryTableBody = document.getElementById("entryTable").getElementsByTagName("tbody")[0];

let createButton = document.getElementById("createButton");
let downloadButton = document.getElementById("downloadButton");

createButton.onclick = () => {
    insertNewEntry(id,newDate,newMinTemp,newMaxTemp,newConditions);
    id++;
};

function insertNewEntry(idNum,date,minTemp,maxTemp,conditions) {
    // 1. Insert a new row
    let newRow = entryTableBody.insertRow();
    newRow.id = idNum;
    // 2. Insert cells to the row from newInputList.
    let newInputList = createInputList(idNum,date,minTemp,maxTemp,conditions);
    newInputList.forEach((input) => {
        let newCell = newRow.insertCell();
        newCell.appendChild(input);
    });
}

function createInputList(idNum,date,minTemp,maxTemp,conditions) {
    let idText = document.createTextNode(idNum);
    let newDateText = document.createTextNode(date);
    let newMinTempText = document.createTextNode(minTemp);
    let newMaxTempText = document.createTextNode(maxTemp);
    let newConditionsText = document.createTextNode(conditions);
    let actionAhref = document.createElement("a");
    actionAhref.href = "#";
    actionAhref.textContent = "Delete This One";
    actionAhref.onclick = () => {
        document.getElementById(idNum).remove();
        inputLists = inputLists.filter((input) => {
            return input["id"] != idNum;
        });
    }
    
    inputLists.push({
        "id": idNum
        , "date": date
        , "min_temp": minTemp
        , "max_temp": maxTemp
        , "conditions": conditions
    });
    
    return [idText, newDateText, newMinTempText, newMaxTempText, newConditionsText, actionAhref];
}

// Download table info as JSON file.
downloadButton.onclick = () => {
    let fileName = "weather_observation.json"
    let blob = new Blob([JSON.stringify(inputLists,undefined,2)], {
        type: 'application/json',
        name: fileName
    });
    saveAs(blob,fileName);
};

// Upload JSON file to the table.
let uploadFile = document.getElementById("uploadFile");
uploadFile.onchange = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        let parsed = JSON.parse(e.target.result);
        parsed.forEach((entry) => {
            insertNewEntry(entry["id"],entry["date"],entry["min_temp"],entry["max_temp"],entry["conditions"]);
        });
    };
    reader.readAsText(file);
}

// How to insert <td></td> into the table
// Source 1: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
// Source 2: https://dev.to/noemelo/how-to-insert-rows-in-an-html-table-body-in-javascript-3pdh

// How to remove element by id
// Source 1: https://stackoverflow.com/questions/3387427/remove-element-by-id

// Upload JSON file to the table.
// Source 1: https://developer.mozilla.org/ko/docs/Web/API/FileReader/onload