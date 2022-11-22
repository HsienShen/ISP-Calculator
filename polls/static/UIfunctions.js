var table = document.getElementById("myTable");

function myCreateFunction() {

  var i = table.rows.length;
  var row = table.insertRow(i);

  for (var j = 0; j < table.rows[0].cells.length - 1; j++) {
    var cell = row.insertCell(j);
    cell.innerHTML = " ";
    table.rows[i].cells[j].addEventListener("click", function () {
      editText(this);
    }, false);
  }

  var cell = row.insertCell(row.cells.length);
  cell.innerHTML = "x";
  cell.classList.add("delete_row");
  cell.addEventListener("click", function () {
    deleteRow(this);
  }, false);
}

function deleteRow(r) {
  var i = r.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}

if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
      table.rows[i].cells[j].addEventListener("click", function () {
        editText(this);
      }, false);
    }
    var n = table.rows[i].cells.length - 1;
    table.rows[i].cells[n].addEventListener("click", function () {
      deleteRow(this);
    }, false);
  }
}

function fillExample() {
  let myTab = document.getElementById('empTable');

  let major = new Array();
  major.push("Major");
  major.push("Major");
  major.push("Math");
  major.push("CS");
  major.push("ISA");
  major.push("SWE");

  for (var i = 0; i < major.length; i ++) {
    let element = myTab.rows.item(1).cells[i];
    element.childNodes[0].value = major[i];
  }

  let year = new Array();
  year.push("Year");
  year.push("Year");
  year.push("2019");
  year.push("2020");
  year.push("2021");
  year.push("2022");

  for (var i = 0; i < year.length; i ++) {
    let element = myTab.rows.item(3).cells[i];
    element.childNodes[0].value = year[i];
  }

  let visa = new Array();
  visa.push("Visa");
  visa.push("Visa");
  visa.push("F1");
  visa.push("J1");
  visa.push("Domestic");

  for (var i = 0; i < visa.length; i ++) {
    let element = myTab.rows.item(5).cells[i];
    element.childNodes[0].value = visa[i];
  }
  
}

function clrInput() {
  let myTab = document.getElementById('empTable');
  for (row = 1; row < myTab.rows.length - 1; row++) {
    // loop through each cell in a row.
    for (c = 0; c < myTab.rows[row].cells.length - 1; c++) {
      let element = myTab.rows.item(row).cells[c];
      element.childNodes[0].value = "";
    }
}
}

function editText(tableCell) {
  var txt = tableCell.innerText || tableCell.textContent;
  tableCell.innerText = tableCell.textContent = "";
  var input = document.createElement("input");
  input.type = "text";
  tableCell.appendChild(input);
  input.value = txt;
  input.focus();
  input.onblur = function () {
    tableCell.innerText = input.value;
    tableCell.textContent = input.value;
  }
}

function leaveCell(tableCell) {
  tableCell.innerText = input.value;
  tableCell.textContent = input.value;
}


//Table used 
let arrHead = new Array(); // array for header.
arrHead = ['', 'Chracteristic', 'Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5', 'Block 6', 'Delete'];

// first create TABLE structure with the headers. 
let createTable = () => {
  let empTable = document.createElement('table');
  empTable.setAttribute('id', 'empTable'); // table id.


  let tr = empTable.insertRow(-1);
  for (let h = 0; h < arrHead.length; h++) {
    let th = document.createElement('th'); // create table headers
    th.innerHTML = arrHead[h];
    tr.appendChild(th);
  }

  let div = document.getElementById('cont');
  div.appendChild(empTable); // add the TABLE to the container.
  addRow();
  addRow();
  addRow();
}
let alphabetIdx = 0;
let insertAlphabet = () => {
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const alphabet = alpha[alphabetIdx];
  console.log(alphabet);
  alphabetIdx += 1;
  return alphabet;

}
// now, add a new row to the TABLE.
let addRow = () => {
  let empTab = document.getElementById('empTable');

  let rowCnt = empTab.rows.length; // table row count.
  let tr = empTab.insertRow(rowCnt); // the table row.
  tr = empTab.insertRow(rowCnt);

  for (let c = 0; c < arrHead.length; c++) {
    let td = document.createElement('td'); // table definition.
    td = tr.insertCell(c);

    if (c === arrHead.length - 1) { // the first column.
      // add a button in every new row in the first column.
      let button = document.createElement('input');

      // set input attributes.
      button.setAttribute('type', 'button');
      button.setAttribute('value', 'Delete');

      // add button's 'onclick' event.
      button.setAttribute('onclick', 'removeRow(this)');

      td.appendChild(button);
    } else if (c === 0) {
      let ele2 = document.createTextNode(insertAlphabet());
      td.appendChild(ele2);
    } else {
      // 2nd, 3rd and 4th column, will have textbox.
      let ele = document.createElement('input');
      ele.setAttribute('type', 'text');
      ele.setAttribute('value', '');

      td.appendChild(ele);
    }
  }
}

// delete TABLE row function.
let removeRow = (oButton) => {
  let empTab = document.getElementById('empTable');
  empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
  // button -> td -> tr.
}

// function to extract and submit table data.
let submit = () => {
  let myTab = document.getElementById('empTable');
  let arrValues = new Array();
  let allArr = new Array();

  // loop through each row of the table.
  for (row = 1; row < myTab.rows.length - 1; row++) {

    // loop through each cell in a row.
    for (c = 2; c < myTab.rows[row].cells.length; c++) {
      let element = myTab.rows.item(row).cells[c];
      //let alpha = myTab.rows.item(row).cells[0].innerText;
      let characteristic = myTab.rows.item(row).cells[1];
      let inputStr ="'";
      console.log(element.childNodes[0].value);

      //check if all the characteristics have value
      if (characteristic.childNodes[0].value === "") {
        document.getElementById('copy_textarea').innerHTML = "Please insert characteristic for all rows!";
        return;
      }
      //if the block is not empty, add them to the array
      if (element.childNodes[0].getAttribute('type') == 'text' && element !== "" && element.childNodes[0].value !== "") {
        inputStr += element.childNodes[0].value+ "'";
        arrValues.push(inputStr);
      }

    }


  }

  // The final output.
  document.getElementById('copy_textarea').innerHTML = arrValues;
  console.log(arrValues); // you can see the array values in your browsers console window.  
}


let acoc = () => 
{
  let myTab = document.getElementById('empTable');
  let allValues = new Array();

  //loop all the rows
  for (row = 1; row < myTab.rows.length - 1; row++) {
    let rowValues = new Array();
    //loop all the cells
    for (c = 2; c < myTab.rows[row].cells.length; c++) {
      let characteristic = myTab.rows.item(row).cells[1];
      //check if all the characteristics have value
      if (characteristic.childNodes[0].value === "") {
        document.getElementById('copy_textarea').innerHTML = "Please insert characteristic for all rows!";
        return;
      }

      let element = myTab.rows.item(row).cells[c];

      if (element.childNodes[0].getAttribute('type') == 'text' && element !== "" && element.childNodes[0].value !== "") {
        inputStr = element.childNodes[0].value;
        rowValues.push(inputStr);
      }
    }
    if (rowValues.length != 0) {
      allValues.push(rowValues);
    }
  }

  var numTests = 1;

  for (var i = 0; i < allValues.length; i++) {
    numTests = numTests*allValues[i].length;
  }
  

  let results = new Array(numTests);
  for (var i = 0; i < results.length; i++) {
    results[i] = "";
  }

  for (var i = 0; i < allValues.length; i++) {
    var tmp = 1;
    thres = allValues.length -1;
    if (i != thres) {
      for (var j = i+1; j < allValues.length; j++) {
        tmp = tmp*allValues[j].length;
      }
    }

    var repeat = 1;
    if (i >0) {
      for (var j = 0; j < i; j++) {
        repeat = repeat*allValues[j].length;
      }
    }

    for (var j = 0; j < repeat; j++) {
      for (var m = 0; m < allValues[i].length; m++) {
        for (var n = 0; n < tmp; n++) {
          results[j*allValues[i].length*tmp + m*tmp + n] = results[j*allValues[i].length*tmp  + m*tmp + n] + allValues[i][m] + " ";
        }
      }
    } 
  }


  let outputStr ="";
  for (var i = 0; i < results.length; i++) {
    var id = i + 1;
    outputStr += "test#" + id + ": ";
    outputStr += results[i];
    outputStr += '\r\n';
  }
  document.getElementById("copy_textarea").innerHTML = outputStr;
}

let ecc = () => 
{
  let myTab = document.getElementById('empTable');
  let allValues = new Array();

  //loop all the rows
  for (row = 1; row < myTab.rows.length - 1; row++) {
    let rowValues = new Array();
    //loop all the cells
    for (c = 2; c < myTab.rows[row].cells.length; c++) {
      let characteristic = myTab.rows.item(row).cells[1];
      //check if all the characteristics have value
      if (characteristic.childNodes[0].value === "") {
        document.getElementById('copy_textarea').innerHTML = "Please insert characteristic for all rows!";
        return;
      }

      let element = myTab.rows.item(row).cells[c];

      if (element.childNodes[0].getAttribute('type') == 'text' && element !== "" && element.childNodes[0].value !== "") {
        inputStr = element.childNodes[0].value;
        rowValues.push(inputStr);
      }
    }
    if (rowValues.length != 0) {
      allValues.push(rowValues);
    }
  }

  var mostBlocks = 0;
  for (var i = 0; i < allValues.length; i++) {
    if (allValues[i].length > mostBlocks)
    {
      mostBlocks = allValues[i].length;
    }
  }

  console.log("allValues number: " + allValues.length);
  for (var i = 0; i <allValues.length; i++) {
    console.log("allValues[" + i + "].length = " + allValues[i].length);
    console.log(allValues[i])
  }

  let outputStr ="";
  for (var testNum = 1; testNum <= mostBlocks; testNum++) {    
    outputStr += "test#" + testNum + ": ";
    for (var i = 0; i < allValues.length; i++) {
      if (testNum <= allValues[i].length) {
        outputStr += allValues[i][testNum-1] + " ";
      } else {
        outputStr += "* ";
      }
    }

    outputStr += '\r\n';
  }

  document.getElementById("copy_textarea").innerHTML = outputStr;
}

let bcc = () => {
  let myTab = document.getElementById('empTable');
  let allValues = new Array();

  //loop all the rows
  for (row = 1; row < myTab.rows.length - 1; row++) {
    let rowValues = new Array();
    //loop all the cells
    for (c = 2; c < myTab.rows[row].cells.length; c++) {
      let characteristic = myTab.rows.item(row).cells[1];
      //check if all the characteristics have value
      if (characteristic.childNodes[0].value === "") {
        document.getElementById('copy_textarea').innerHTML = "Please insert characteristic for all rows!";
        return;
      }

      let element = myTab.rows.item(row).cells[c];

      if (element.childNodes[0].getAttribute('type') == 'text' && element !== "" && element.childNodes[0].value !== "") {
        inputStr = element.childNodes[0].value;
        rowValues.push(inputStr);
      }
    }
    if (rowValues.length != 0) {
      allValues.push(rowValues);
    }
  }

  var numTests = 0;
  for (var i = 0; i < allValues.length; i++)
  {
    numTests += allValues[i].length;
  }
  numTests = numTests - (allValues.length -1);

  let results = new Array(numTests);
  for (var i = 0; i < results.length; i++) {
    results[i] = "";
  }

  var base = new Array();

  for (var i = 0; i < allValues.length; i++) {
    results[0] += allValues[i][0] + " ";
    base.push(allValues[i][0]);
  }

  

  for (var i = 0; i < allValues.length; i++) {
    var tmp = 0;
    if (i > 0) {
      for (var k = 0; k < i; k++) {
        tmp = tmp + allValues[k].length - 1;
      }
    }
    
    var testCase = new Array();
    for (var n = 0; n < allValues.length; n++) {
      testCase.push(allValues[n][0]);
    }

    for (var j = 1; j < allValues[i].length; j++) {
      testCase[i] = allValues[i][j];
      console.log("testCase: " + testCase);

      for (var m = 0; m < testCase.length; m++) {
        results[tmp+j] += testCase[m] + " ";
      }
    }
  }

  console.log("results: " + results);

  let outputStr ="test#1 (base): " + results[0] + '\r\n';

  for (var i = 1; i < results.length; i++) {
    var id = i+1;
    outputStr += "test#" + id + ": ";
    outputStr += results[i];
    outputStr += '\r\n';
  }
  document.getElementById("copy_textarea").innerHTML = outputStr;




}

function copyResult() {
  // Get the text field
  var copyText = document.getElementById("copy_textarea");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  document.getElementById("copy_textarea").innerHTML = "Copied!";
  
}

function clearResult(){
  var textarea = document.getElementById("copy_textarea");
  textarea.innerHTML = '';
}