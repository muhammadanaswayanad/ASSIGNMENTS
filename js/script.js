function msg() {
    name = document.form.name.value;
    alert(name);
}

function my_func() {
    var limit = document.form.limitbox.value;
    for (var i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            document.write(" " + i);
        }
    }
}

function sum() {
    var a = document.form.num1.value;
    var b = document.form.num2.value;
    c = a + b;
    document.write(c);
}

function check() {
    s = document.forms[1].rad1.value;
    alert(s);
}
