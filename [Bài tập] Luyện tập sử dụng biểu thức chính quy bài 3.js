function main() {
    var src = prompt("nhập 1 chuỗi kí tự");
    var i = 0
    var count = 0;
    var count1 = 0;
    for (var i = 0; i < src.length; i++) {
        if (src[i] == 'a' || src[i] == 'e' || src[i] == 'i' || src[i] == 'o' || src[i] == 'u') {
            count++;
        }
        if (src[i] == "b" || src[i] == "c" || src[i] == "d" || src[i] == "f" || src[i] == "g" || src[i] == "h" || src[i] == "j" || src[i] == "k" || src[i] == "l" || src[i] == "m" || src[i] == "n" || src[i] == "q" || src[i] == "p" || src[i] == "r" || src[i] == "s" || src[i] == "t" || src[i] == "v" || src[i] == "w" || src[i] == "x" || src[i] == "y" || src[i] == "z" ){
            count1++;
        }
    }
    document.write("số nguyên âm là : " + count + "<br>");
    document.write("số phụ âm là : " + count1)
}

main()