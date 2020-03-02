let star = ["polaris","aldebaran","deneb","vega","altair","dubhe","regulus"];
let constellation = ["ursaminor","tarurus","cygnus","lyra","aquila","ursamajor","leo"];

function findItemArray(name) {
    if (star.indexOf(name) !== -1) {
        return constellation[star.indexOf(name)];
    }
    return "Không tìm thấy";
}

function startSearching() {
    let str = prompt("Nhập vào tên sao mà bạn muốn tìm: ");
    let result = findItemArray(str.replace(/ /g, "").toLowerCase());
    document.getElementById('result').innerHTML = "Chòm sao tương ứng với sao " + str + " là: " + result;
}


