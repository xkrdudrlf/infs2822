// How to insert <td></td> into the table
// Source 1: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
// Source 2: https://dev.to/noemelo/how-to-insert-rows-in-an-html-table-body-in-javascript-3pdh

    // Option 1
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let text1 = document.createTextNode(id);
    let text2 = document.createTextNode(newEntry.value);
    let text3 = document.createTextNode(defaultActionsValue);
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    
    // Option 2
    newRow.innerHTML += "<td>" + id + "</td>";
    newRow.innerHTML += "<td>" + newEntry.value + "</td>";
    newRow.innerHTML += "<td>" + defaultActionsValue + "</td>";

// How to remove element by id
// Source 1: https://stackoverflow.com/questions/3387427/remove-element-by-id


// How to convert Table to JSON Object and download the JSON Object.
// Source 1: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser