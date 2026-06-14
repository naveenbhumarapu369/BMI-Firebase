let calcBmi = ()=>{
    let h = document.getElementById('h').value;
    let w = document.getElementById('w').value;
    let res = (w/(h*h));
    let cat = "";
    switch(true){
        case res<=18.5:cat="UnderWighted";
        break;
        case res>=18.5&&res<=24.9:cat="Normal";
        break;
        case res>=25.0&&res<=29.9:cat="OverWight";
        break;
        case res>=30.0&&res<=39.9:cat="Obesity(Class-1>";
        break;
        case res>=35.0:cat="Obesity(Class-2>";
        break;
        default:cat="UnKnown";
    }
    document.getElementById('bmiR').innerHTML=res.toFixed(4);
    document.getElementById('bmiC').innerHTML=cat;
}