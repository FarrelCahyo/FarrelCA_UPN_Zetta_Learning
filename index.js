function bebas(text, first_index, last_index) {
    var hasil = "";
    for (var index = first_index; index < last_index; index++) {
        hasil += text[index];
    }
    return hasil;
}
console.log(bebas("Learning Typescript is different than Javascript", 9, 19));
