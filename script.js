function input() {
    console.log('input');
    let _x = [];
    let _y = [];
    let x = document.getElementById('x').value.replace(/ /g, '').split(',');
    let y = document.getElementById('y').value.replace(/ /g, '').split(',');
    for (let i = 0; i < x.length; i++) { _x.push(Number(x[i])); }
    for (let i = 0; i < y.length; i++) { _y.push(Number(y[i])); }
    return [_x, _y];
}

function make_table() {

}

function calc() {
    console.log('calc');
    let data = input();
    console.log(data);
}