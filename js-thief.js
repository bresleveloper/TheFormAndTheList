

let addToTable = ()=>{
    let tr = `<tr><td>#0</td><td>#1</td><td>#2</td></tr>`
    document.querySelectorAll('input').forEach( (e,i) => tr = tr.replace('#'+i, e.value) )
    document.querySelector('tbody').innerHTML += tr;
}
document.querySelector('button').onclick = addToTable
//or  document.....onclick = ()=>{ ...



document.querySelectorAll('input')
    .forEach((inp, i) => inp.onkeydown = i == 2 ?  onlyDigits : noDigits)
