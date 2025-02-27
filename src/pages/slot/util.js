import { ShowItem } from "../../components/slowShow/SlotShow.js";

import { NotificationError } from "../../components/modalError/modalError.js";

function checkScreenSize(size) {
  if (size > 900) {
    return 5;
  } else if (size > 700) {
    return 4;
  } else if (size > 550) {
    return 3;
  } else {
    return 2;
  }
}

function addSlot(randomizer) {
  const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length;
  const remainingSizeToPick = randomizer.remainingSizeToPick();
  const slotContainerItens =
    document.getElementsByClassName("slotContainerItens")[0];
  if (
    remainingSizeToPick <= showSlotItensLenght ||
    checkScreenSize(window.innerWidth) == showSlotItensLenght
  ) {
    NotificationError("It is not possible to add more slots");
    return;
  }
  slotContainerItens.appendChild(ShowItem());
}

function removeSlot() {
  const showSlotItens = document.querySelectorAll(".showSlotItem");
  const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length;
  if (showSlotItensLenght == 1) {
    NotificationError("It is not possible to remove more slots");
    return;
  }
  showSlotItens[0].remove();
}

function lockButtons() {
  const buttons = document.querySelectorAll(".buttonSlot");
  buttons.forEach((button) => {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  });
}

function unlockButtons() {
  const buttons = document.querySelectorAll(".buttonSlot");
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.cursor = "pointer";
  });
}

export { checkScreenSize, addSlot, removeSlot, lockButtons, unlockButtons };
