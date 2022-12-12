let r = 200,g = 200, b= 200;
let rgb = `rgb(${r},${g},${b})`;
let main = document.getElementById("main");
main.style.background = rgb;
let rgbc = document.getElementById('rgbc');
let hexc = document.getElementById('hexc');
var hex;
rgbc.innerHTML = rgb;

function update(obj){
    obj.nextSibling.innerHTML = obj.value;
    if (obj.name == "rv") r = obj.value;
    if (obj.name == "gv") g = obj.value;
    if (obj.name == "bv") b = obj.value;
    rgb = `rgb(${r},${g},${b})`;
    main.style.background = rgb;
    rgbc.innerHTML = rgb;
    hex = "#"+toHex(r)+""+toHex(g)+""+toHex(b)
    hexc.innerHTML = hex;
    change_font_color();
}

function toHex(c){
    c = parseInt(c);
    var x = c.toString(16);
    return x.length == 1 ? "0" + x: x;
}

function change_font_color(){
    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)
    if ((r+g+b)/3 < 50){
        main.style.color = "white";
    }else{
        main.style.color = "black";
    }
}
