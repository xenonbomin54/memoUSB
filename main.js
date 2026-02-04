if (localStorage.getItem('default')===null){
    localStorage.setItem('default', 'thank you for using my USB style memo program');
}

const isMobile = window.innerWidth <= 768

const container = document.getElementById('mbox');
container.innerHTML = ''

for (let i = 0; i < localStorage.length; i++) {
    let key = i;
    let value = localStorage.key(key);
    let usbHTML = `
        <div class="usb-item" id = "${key}" style="margin-right:100px;">
            <div class="metal">
                <div id="mehole1"></div>
                <div id="meline"></div>
                <div id="mehole2"></div>
            </div>
            <div class="plastic" onclick="USBread('${(key)}')">
            <div class="key">${value}</div>
            </div>
            <div class="delete" style="color:white;margin-top:-40px;background-color: red;text-align: center;padding: 2px;border-radius: 10px;width: 50px;margin-left:33px;" onclick="deleteUSB('${value}');">X</div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', usbHTML);
}


    function isMobileByScreenWidth() {
        const mobileWidthThreshold = 768;

        return window.innerWidth < mobileWidthThreshold;
    }

    const items = document.querySelectorAll('.usb-item');
    const ditems = document.querySelectorAll('.delete');

    let USBF = 0;

    items.forEach(item => {
        item.style.transition = "transform 0.3s ease";
        item.style.transform = "scale(1)";
        item.style.filter = "brightness(50%)";
    });

    const currentItem = items[USBF];
    if (currentItem) {
        currentItem.style.transform = "scale(1.5)";
        currentItem.style.filter = "brightness(100%)";
    }

    ditems.forEach(item => {
        item.style.transition = "margin-top 0.3s ease";
        item.style.marginTop = "-40px";
    });

    const dItem = ditems[USBF];
    if (dItem) {
        dItem.style.marginTop = "20px";
    }




let vari;
let varia;

function newUSB(vari, varia) {
    vari = prompt("Add USB's Name", "USB")
    if(vari.trim()!==null){
        if(localStorage.getItem(vari)===null){
            varia = prompt("Add memo", "xenonbomin54 is so cute");
        }
    }

    localStorage.setItem(vari, varia);
    location.reload();
}
let bomin;

function deleteUSB(bomin){
    if(bomin==="default"){
        alert("기본 메모는 삭제하실 수 없습니다.")
    }else{
        if(confirm("정말 삭제하시겠습니까? (되돌릴 수 없습니다.)")){
		alert("삭제되었습니다");
        localStorage.removeItem(bomin);
        location.reload();
	}
    }
}
let rptv = 0;
let variable;
let variable2;

function leftkey(variable){
    const enterEvent = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        bubbles: true,
        cancelable: true
    });
        document.dispatchEvent(enterEvent);
}

function upkey(){
    const enterEvent = new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        code: 'ArrowUp',
        bubbles: true,
        cancelable: true
    });
        document.dispatchEvent(enterEvent);
}

function rightkey(variable2){
    const enterEvent = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        bubbles: true,
        cancelable: true
    });
        document.dispatchEvent(enterEvent);
}

let variab;
let key;
let value;
let sex;

const modal = document.querySelector('.modal');
const modalPopup = document.querySelector('.modal_popup h3');
const closeBtn = document.querySelector('.close_btn');
const modalTitle = document.querySelector('.modal_popup h1');


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function USBread(variab) {
    if(Number(variab)===USBF){
        sex = document.getElementById(variab);
        sex.style.transition = "margin-top 0.5s ease-out";
        if(isMobile){
            if (sex) {
                sex.style.marginTop = '-50vh';
            }
        }else {
            if (sex) {
                sex.style.marginTop = '-21vh';
            }
        }
        await delay(500);
        if (sex) {
            sex.style.marginTop = '0vh';
        }
        key = localStorage.key(variab);
        let value = localStorage.getItem(key);
        if (value !== null) {
            openModal(key, value);
        } else {
            alert("파일이 존재하지 않습니다.");
        }
    } else if(Number(variab)<USBF){
        leftkey(USBF-variab);
    } else{
        rightkey(variab-USBF);
    }
}

function openModal(title, content) {
    modalTitle.textContent = title;
    modalPopup.textContent = content;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);


let currentX = 0; 
const bbox = document.getElementById('mbox');

bbox.style.transition = "transform 0.3s ease-out";

document.addEventListener('keydown', async function(event) {
    if (event.repeat) return;

    const usbCount = items.length;
    const moveAmount = 220;

    if (event.key === 'ArrowLeft') {
        if (USBF > 0) {
            USBF--;
            currentX = - (USBF * moveAmount);
            if (isMobileByScreenWidth()) {
                currentX = - (USBF * moveAmount)-270;
            }
        }
    } else if (event.key === 'ArrowRight') {
        if (USBF < usbCount - 1) {
            USBF++;
            currentX = - (USBF * moveAmount);
            if (isMobileByScreenWidth()) {
                currentX = - (USBF * moveAmount)-270;
            }
        }
    } else if (event.key === 'ArrowUp'){
        await USBread(USBF);
    } else {
        return;
    }


    items.forEach(item => {
        item.style.transition = "transform 0.3s ease";
        item.style.transform = "scale(1)";
        item.style.filter = "brightness(50%)";
    });

    const currentItem = items[USBF];
    if (currentItem) {
        currentItem.style.transform = "scale(1.5)";
        currentItem.style.filter = "brightness(100%)";
    }

    ditems.forEach(item => {
        item.style.transition = "margin-top 0.3s ease";
        item.style.marginTop = "-40px";
    });

    const dItem = ditems[USBF];
    if (dItem) {
        dItem.style.marginTop = "20px";
    }

    bbox.style.transform = `translateX(${currentX}px)`;
});

function notYet() {
    window.alert("This function is not yet developed...sorry")
}


