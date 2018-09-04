function day(src) {
    src = prompt("nhập ");
    rex = /^[0-3][0-9][/][0-2][0-9][/][0-9][0-9]{3}$/;
    if (rex.test(src)){
        alert("đúng")
    }else {
        alert("sai")
    }
}
day()