var models = {
    '1': (x)=>{return 1.0; },
    'x': (x)=>{return x; },
    'xx': (x)=>{return x*x; },
    'xxx': (x)=>{return x*x*x; }
}

var data = null;

function input() {
    console.log('input');
    let x = document.getElementById('x').value.replace(/ /g, '').split(',');
    let y = document.getElementById('y').value.replace(/ /g, '').split(',');
    let m = document.getElementById('m').value.replace(/ /g, '').split(',');
    let _s = document.getElementById('s').value.replace(/ /g, '');
    let _x = [];
    let _y = [];
    let _m = [];
    let _t = [];
    for (let i = 0; i < x.length; i++) { _x.push(Number(x[i])); }
    for (let i = 0; i < y.length; i++) { _y.push(Number(y[i])); }
    for (let i = 0; i < m.length; i++) { _m.push(models[m[i]]); _t.push(0.) }
    return [_x, _y, Number(_s), _m, _t];
}

function get_X(x, m) {
    let X = [];
    for (let i = 0; i < x.length; i++) {
        X.push([]);
        for (let j = 0; j < m.length; j++) {
            X[i].push(m[j](x[i]))
        }
    }
    return math.matrix(X);
}

function make_table(x, y, y1, t) {
    {
        let d = document.getElementById('table');
        d.innerHTML = `<tr>
        <th>X</th>
        <th>Y</th>
        <th>Y1</th>
        </tr>`;
        for (let i = 0; i < x._data.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = '<td>'+x._data[i]+'</td> <td>'+y._data[i]+'</td> <td>'+y1._data[i].toFixed(3)+' </td>'
            d.appendChild(tr);
        }
    }
    {
        let d = document.getElementById('tablet');
        d.innerHTML = '';
        for (let i = 0; i < t._data.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = '<th>'+'T'+(i+1)+'</th> <td>'+t._data[i].toFixed(3)+'</td>';
            d.appendChild(tr);
        }
    }    
}

function get_Y(y) {
    let Y = [];
    for (let i = 0; i < y.length; i++) {
        Y.push(y[i]);
    }
    return math.matrix(Y);
}

function mnk(x, y) {
    let xt = math.transpose(x);
    let t = math.multiply(math.multiply(math.inv(math.multiply(xt, x)), xt),y);
    return t;
}

function rss(y, y1) {
    let _rss = [];
    for(let i = 0; i < y._data.length; i++) {
        _rss.push((y._data[i]-y1._data[i])*(y._data[i]-y1._data[i]));
    }
    return math.matrix(_rss);
}

function calc() {
    console.log('calc');
    data = input();
    console.log(data);
    console.log('x');
    let X = get_X(data[0], data[3]);
    console.log(X);
    console.log('y');
    let Y = get_Y(data[1]);
    console.log(Y);
    console.log('T');
    let T = mnk(X, Y);
    console.log(T);
    console.log('YT');
    let YT = math.multiply(X, T);
    console.log(YT);
    make_table(math.matrix(data[0]), Y, YT, T);
    let RSS = rss(Y, YT);
    console.log(RSS);
}