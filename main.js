const player1 = {
  name: "Scorpion",
  hp: "100",
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(`${player1.name} + Fight...`);
  },
};

const player2 = {
  name: "Kitana",
  hp: "100",
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(`${player2.name} + Fight...`);
  },
};

function createPlayer(className, player) {
  const arenaEl = document.querySelector(".arenas");
  const PlayerEl = document.createElement("div");
  PlayerEl.classList.add(className);

  const progressbarEl = document.createElement("div");
  progressbarEl.classList.add("progressbar");

  const characterEl = document.createElement("div");
  characterEl.classList.add("character");

  const lifeEl = document.createElement("div");
  lifeEl.classList.add("life");
  lifeEl.style.width = `${player.hp}`;

  const nameEl = document.createElement("div");
  nameEl.classList.add("name");
  nameEl.textContent = player.name;

  const imgEl = document.createElement("img");
  imgEl.src = `${player.img}`;

  progressbarEl.appendChild(lifeEl);
  progressbarEl.appendChild(nameEl);
  characterEl.appendChild(imgEl);
  PlayerEl.insertAdjacentElement("afterbegin", progressbarEl);
  PlayerEl.insertAdjacentElement("beforeend", characterEl);
  arenaEl.appendChild(PlayerEl);
}
createPlayer("player1", player1);
createPlayer("player2", player2);
