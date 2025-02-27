let remenberingOldWinners;

function WinnersList() {
  remenberingOldWinners = [];

  const containerList = document.createElement("div");
  containerList.id = `containerList`;

  const imageContainer = document.createElement("div");
  imageContainer.id = `imageContainer`;
  containerList.appendChild(imageContainer);

  const listSection = document.createElement("div");
  listSection.id = `listSection`;
  containerList.appendChild(listSection);

  return containerList;
}

function addWinner(winner) {
  document.getElementById("listSection").innerHTML = ``;

  winner.forEach((element) => {
    remenberingOldWinners.push(element);
  });

  remenberingOldWinners.forEach((element, index) => {
    const winnerContainer = document.createElement("div");
    winnerContainer.className = `winnerContainer`;
    document.getElementById("listSection").appendChild(winnerContainer);

    const winnerPosition = document.createElement("p");
    winnerPosition.className = `winnerPosition`;
    winnerContainer.appendChild(winnerPosition);

    switch (index) {
      case 0:
        winnerPosition.innerText = `🥇 Place`;
        break;

      case 1:
        winnerPosition.innerText = `🥈 Place`;
        break;

      case 2:
        winnerPosition.innerText = `🥉 Place`;
        break;

      default:
        winnerPosition.innerText = `${index + 1}º Place`;

        break;
    }

    const winnerText = document.createElement("p");
    winnerText.innerText = element;
    winnerContainer.appendChild(winnerText);
  });
}

function resetWinner() {
  remenberingOldWinners = [];
  document.getElementById("listSection").innerHTML = "";
}

export { WinnersList, addWinner, resetWinner };

// // TEST

// const test = WinnersList();
// document.querySelector("body").appendChild(test);
// document.querySelector("button").addEventListener("click", () => {
//   resetWinner();
// });

// addWinner([1, 2, 3, 4, 1, 2, 5, 6]);