const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(`${player1.name} + Fight...`);
  },
  player: "1",
};

const player2 = {
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(`${player2.name} Fight...`);
  },
  player: "2",
};

const arenaEl = document.querySelector(".arenas");
const randomBtn = document.querySelector(".button");

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(player) {
  const playerEl = createElement("div", `player${player.player}`);
  const progressbarEl = createElement("div", "progressbar");
  const characterEl = createElement("div", "character");
  const lifeEl = createElement("div", "life");
  lifeEl.style.width = `${player.hp}`;

  const nameEl = createElement("div", "name");
  nameEl.textContent = player.name;

  const imgEl = createElement("img");
  imgEl.src = `${player.img}`;

  progressbarEl.appendChild(lifeEl);
  progressbarEl.appendChild(nameEl);
  characterEl.appendChild(imgEl);
  playerEl.insertAdjacentElement("afterbegin", progressbarEl);
  playerEl.insertAdjacentElement("beforeend", characterEl);

  return playerEl;
}
arenaEl.appendChild(createPlayer(player1));
arenaEl.appendChild(createPlayer(player2));

function changeHp(player) {
  const playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= Math.ceil(Math.random() * 20);

  if (player.hp < 0) {
    player.hp = 0;
    randomBtn.disabled = true;
  }
  playerLife.style.width = `${player.hp}%`;
  return player.hp;
}

function winner(name) {
  const winnerEl = createElement("div", "winnerTitle");
  if (name) {
    winnerEl.innerText = name + " wins";
  } else {
    winnerEl.innerText = "nobody wins";
  }
  return winnerEl;
}

function fight(attacker, defender) {
  const attackerHealth = changeHp(attacker);
  const defenderHealth = changeHp(defender);

  if (attackerHealth === 0 || defenderHealth === 0) {
    if (attackerHealth === defenderHealth) {
      arenaEl.appendChild(winner());
    } else if (attackerHealth > defenderHealth) {
      arenaEl.appendChild(winner(attacker.name));
    } else {
      arenaEl.appendChild(winner(defender.name));
    }
  }
}

randomBtn.addEventListener("click", function () {
  fight(player1, player2);
});
