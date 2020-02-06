var a = [4, 5, 6];
function f1() {
    var t = [];
    var b = +document.getElementById('nums1').value;
    t[0] = b;

    for (var i = 0; i< a.length; i++) {
        t[i + 1] = a[i];
    };

    a = t;

    console.log(t);
};

document.getElementById('nums2').onclick = f1;