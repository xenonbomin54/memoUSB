if (localStorage.getItem('default')===null){
    localStorage.setItem('default', 'thank you for using my USB style memo program');
}


const container = document.getElementById('mbox');
container.innerHTML = ''

for (let i = 0; i < localStorage.length; i++) {
    let key = i
    let value = localStorage.getItem(key);
    let usbHTML = `
        <div class="usb-item" onclick="USBread('${(key)}')" id = "${key}">
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
    }while(localStorage.getItem(vari)!==null);
    varia = prompt("Add memo", "xenonbomin54 is so cute");

    localStorage.setItem(vari, varia);
    location.reload();
}

let variab;
let key;
let value;
let sex;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function USBread(variab) {
    sex = document.getElementById(variab);
   if (sex) {
        sex.style.transition = "margin-top 1s ease";
        sex.style.marginTop = '-230px';
    }
    await delay(500);
    if (sex) {
        sex.style.marginTop = '0px';
    }
    key = localStorage.key(variab);
    let value = localStorage.getItem(key);
    if (value !== null) {
        alert(value);
    } else {
        alert("데이터가 존재하지 않습니다.");
    }
}