let cb6Active = false;
let cb7Active = false;
let popUpActive = false;
const sw1 = document.querySelector(".sw1");
const sw2 = document.querySelector(".sw2");
const blueLeft = document.querySelector(".blue--left");
const blueRight = document.querySelector(".blue--right");
const parentPopup = document.querySelector(".parentPopup");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const ma1 = document.querySelector(".ma1");
const mv1 = document.querySelector(".mv1");
const mp1 = document.querySelector(".mp1");
const ma2 = document.querySelector(".ma2");
const mv2 = document.querySelector(".mv2");
const mp2 = document.querySelector(".mp2");
const ma3 = document.querySelector(".ma3");
const mv3 = document.querySelector(".mv3");
const mp3 = document.querySelector(".mp3");
const reset = document.querySelector(".reset");

sw1.addEventListener("click", function () {
  if (!popUpActive) {
    sw1.classList.toggle("switch-open");
    cb6Active = !cb6Active;
    if (cb6Active) {
      blueLeft.classList.remove("displayy");
      popUpActive = true;
      if (popUpActive) {
        setPopupText();
      }
    } else {
      blueLeft.classList.add("displayy");
      setPopupText();
    }
  }
});
sw2.addEventListener("click", function () {
  if (!popUpActive) {
    sw2.classList.toggle("switch-open");
    cb7Active = !cb7Active;
    if (cb7Active) {
      blueRight.classList.remove("displayy");
      popUpActive = true;
      if (popUpActive) {
        setPopupText();
      }
    } else {
      blueRight.classList.add("displayy");
      setPopupText();
    }
  }
});

function setPopupText() {
  if (cb6Active && cb7Active) {
    showPopup("CB6 & CB7 are Tripped");
    ma1.textContent = 0;
    mp1.textContent = 0;
    ma2.textContent = 0;
    mp2.textContent = 0;
    ma3.textContent = 0;
    mp3.textContent = 0;
  } else if (cb6Active) {
    showPopup("CB6 is Tripped");
    ma1.textContent = 0;
    mp1.textContent = 0;
    ma2.textContent = 30;
    mp2.textContent = 571.57;
    ma3.textContent = 10;
    mp3.textContent = 571.57;
  } else if (cb7Active) {
    showPopup("CB7 is Tripped");
    ma1.textContent = 45;
    mp1.textContent = 857.36;
    ma2.textContent = 0;
    mp2.textContent = 0;
    ma3.textContent = 15;
    mp3.textContent = 857.36;
  } else {
    ma1.textContent = 45;
    mp1.textContent = 857.36;
    ma2.textContent = 30;
    mp2.textContent = 571.57;
    ma3.textContent = 25;
    mp3.textContent = 1428.93;
  }
}

close.addEventListener("click", closeModal);

function showPopup(text) {
  parentPopup.classList.remove("displayy");
  popup.innerHTML =
    text + `<br><span class="ok" onclick='closeModal()'>OK</span>`;
}

function closeModal() {
  popUpActive = false;
  parentPopup.classList.add("displayy");
}

reset.addEventListener("click", resetAll);

function resetAll() {
  if (!popUpActive) {
    blueLeft.classList.add("displayy");
    blueRight.classList.add("displayy");
    sw1.classList.add("switch-open");
    sw2.classList.add("switch-open");
    ma1.textContent = 45;
    mp1.textContent = 857.36;
    ma2.textContent = 30;
    mp2.textContent = 571.57;
    ma3.textContent = 25;
    mp3.textContent = 1428.93;
    popUpActive = false;
    cb6Active = false;
    cb7Active = false;
  }
}
