if (localStorage.getItem('default')===null){
    localStorage.setItem('default', 'thank you for using my USB style memo program');
}


const container = document.getElementById('mbox');
container.innerHTML = ''

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let usbHTML = `
        <div class="usb-item"onclick="USBread('${(key)}')">
            <div class="metal"></div>
            <div class="plastic">${key}</div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', usbHTML);
}
let vari;
let varia

function newUSB(vari, varia) {
    do{
        vari = prompt("Add USB's Name", "USB")
    }while(localStorage.getItem(vari)!==null)
    varia = prompt("Add memo", "xenonbomin54 is so cue")

    localStorage.setItem(vari, varia)
}

let variab;
let key;
let value;

function USBread(variab) {
    let value = localStorage.getItem(variab);
    if (value !== null) {
        alert(value);
    } else {
        alert("데이터가 존재하지 않습니다.");
    }
}





// 값 읽어오기
//const username = localStorage.getItem('username');
//const settings = JSON.parse(localStorage.getItem('userSettings'));

// 값 삭제
// localStorage.removeItem('username');

// 모든 값 삭제
// localStorage.clear();
