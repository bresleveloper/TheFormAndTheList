

let jsGetCountriesHtml = 
    (v) => '<span>' +
            countries.filter(c => c.toLowerCase().startsWith(v)).join('</span><span>') + 
            '</span>';



const js = document.querySelector("#try-js");
js.querySelector("input").addEventListener("input", function(e) {
    js.querySelector("div").innerHTML = jsGetCountriesHtml(e.target.value)
})





const rxSub = document.querySelector("#rx-sub");
const o_rxSub = rxjs.fromEvent(rxSub.querySelector("input"), "input");
// Subscribe to begin listening for async result
o_rxSub.subscribe(e => rxSub.querySelector("div").innerHTML = jsGetCountriesHtml(e.target.value));



let rxop = rxjs.operators
//mimic ajax call
let getCountries = (v) => rxjs.of(jsGetCountriesHtml(v)).pipe(rxop.delay(600))
let getCountriesLong = (v) => rxjs.of(jsGetCountriesHtml(v)).pipe(rxop.delay(1600))





const rxAjax = document.querySelector("#rx-sub-ajax");
const o_rxAjax = rxjs.fromEvent(rxAjax.querySelector("input"), "input");
// Subscribe to begin listening for async result
o_rxAjax.subscribe(e => 
    getCountries(e.target.value).subscribe(h => 
        rxAjax.querySelector("div").innerHTML = h))
    
    



const rxDebounce = document.querySelector("#rx-debounce");
const o_rxDebounce = rxjs.fromEvent(rxDebounce.querySelector("input"), "input");
// Subscribe to begin listening for async result
o_rxDebounce.pipe(rxop.debounceTime(600)).subscribe(e => 
    getCountries(e.target.value).subscribe(h => 
        rxDebounce.querySelector("div").innerHTML = h))
    
    
        


const rxSM = document.querySelector("#rx-sm");
const o_rxSM = rxjs.fromEvent(rxSM.querySelector("input"), "input")
//can be rxjs.fromEvent(rxSM.querySelector("input"), "input").pipe(map(e => e.target.value))
// Subscribe to begin listening for async result
o_rxSM.pipe(
        rxop.debounceTime(600), 
        rxop.switchMap(e => getCountries(e.target.value)))
        //and then here switchMap(v => getCountries(v)))
    .subscribe(h => rxSM.querySelector("div").innerHTML = h)
    
    



        
     
const rxD = document.querySelector("#rx-distinct");
const o_rxD = rxjs.fromEvent(rxD.querySelector("input"), "input").pipe(rxop.map(e => e.target.value))
o_rxD.pipe(
        rxop.tap(v => console.log('tap1 - OBS FIRED: ' + v)),
        rxop.debounceTime(600), 
        rxop.tap(v => console.log('tap2 - OBS debounceTime: ' + v)),
        rxop.distinctUntilChanged(), 
        rxop.tap(v => console.log('tap3- OBS distinct : ' + v)),
        rxop.switchMap(v => getCountries(v)))
    .subscribe(h => rxD.querySelector("div").innerHTML = h)
    
    
           

        




