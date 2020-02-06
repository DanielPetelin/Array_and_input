// проект про массив.
// вписываем в инпут и жмем на кнопку.

var a = [4, 5, 6, 123, 43, 12, 'Петя', 'Витя', 12, -12, 0, -0];
// var t = []; - тут записать нельзя.

function f1() {
    
    var t = [];
    var b = +document.getElementById('nums1').value;
    t[0] = b;

    for (var i = 0; i< a.length; i++) {
        t[i + 1] = a[i];
    };

    a = t;

    console.log(t);
    document.getElementById('out').innerHTML = t;
};

document.getElementById('nums2').onclick = f1;