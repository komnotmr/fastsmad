var models = {
    '1': (x)=>{return 1.0; },
    'x': (x)=>{return x; },
    'xx': (x)=>{return x*x; },
    'xxx': (x)=>{return x*x*x; }
}

function input() {
    console.log('input');
    let x = document.getElementById('x').value.replace(/ /g, '').split(',');
    let y = document.getElementById('y').value.replace(/ /g, '').split(',');
    let m = document.getElementById('m').value.replace(/ /g, '').split(',');
    let _s = document.getElementById('s').value.replace(/ /g, '');
    let _x = [];
    let _y = [];
    let _m = [];

    for (let i = 0; i < x.length; i++) { _x.push(Number(x[i])); }
    for (let i = 0; i < y.length; i++) { _y.push(Number(y[i])); }
    for (let i = 0; i < m.length; i++) { _m.push(models[m[i]]); }

    return [_x, _y, Number(_s), _m];
}

function make_table() {

}

function calc() {
    console.log('calc');
    let data = input();
    console.log(data);
}