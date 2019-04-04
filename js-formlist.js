

function addToTable(){
    console.log('addToTable')
    /* //ONCE UPON A TIME
    let form = document.getElementsByClassName('form')[0]
    for (let i = 0; i < form.children.length.length; i++) {
        let e = form.children[i];
        if (e.tagName == "INPUT") {
            //...
        }
    }*/
    
    //today
    //let form = document.querySelectorAll('.form input')

    let fn = document.getElementById('fname').value
    let ln = document.getElementById('lname').value
    let age = document.getElementById('age').value

    //ONCE UPON A TIME
    let tableRef = document.querySelector('table');
    let newRow = tableRef.insertRow(-1);
    // Insert cells
    let newCellFName = newRow.insertCell(0);
    let newCellLName = newRow.insertCell(1);
    // Append text nodes to the cells
    let fnNode = document.createTextNode(fn);
    newCellFName.appendChild(fnNode);
    newCellLName.appendChild(document.createTextNode(ln));
    //ninja age
    newRow.insertCell(2).appendChild(document.createTextNode(age));;


    /* //or 
    var el = document.createElement('div');
    let strHtml = `<tr><td>${fn}</td><td>${ln}</td><td>${age}</td></tr>`
    el.innerHTML =  strHtml;
    document.body.appendChild(el.firstChild);  */

}




(function() {
    console.log('auto fn')

    // your page initialization code here
    // the DOM will be available here
    //still must be called at the end of the page
    document.querySelector('button').onclick = addToTable


    document.querySelectorAll('input')
        .forEach((inp, i) => inp.onkeydown = i == 2 ?  onlyDigits : noDigits)

 })();



//or can be when doc ready
//old IE
//window.attachEvent("onload", fn);
//old thing
//window.addEventListener('load', fn, false )
//today
//document.addEventListener('DOMContentLoaded', fn, false);

