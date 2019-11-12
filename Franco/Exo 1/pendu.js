// Prérequis pour le prompteur (pas d'importance pour le cours)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// La fonction Game a terminer (ça se corse)

const WORD_LIST = ["chevre", "vache", "gobelins"];

class Game {
  constructor() {
    let letters = [], // letters entered by user
      lives = 5, // lives left
      word, // the current word
      missing; // number of letters missing

    function init() {
      lives = 5;

      word = letters = [Math.round((WORD_LIST.length - 1) * Math.random())]; // TODO: récupérer un mot random depuis WORD_LIST (1 ligne)
      letters = []; // Count without duplicated
      missing = Array.prototype.filter.call(word, (letter, i) => {
        return word.indexOf(letter) == i;
      }).length;
    }

    function addLetter(letter) {
      // TODO: cette fonction doit :
      if (letters.indexOf(letter) < 0) {
        letters.push(letter);
        if (word.indexOf(letter) > 1) {
          missing--;
        }
      } else {
        lives--;
      }
      // - vérifier que la lettre n'a pas déjà été tentée auparavent
      // - si ce n'est pas le cas, l'ajouter dans le tableau `letters`
      // - modifier `lives` et `missing` en conséquence
      // - ne retourne rien
      // - (6 lignes)
    }

    function displayWord() {
      let display = "";
      for (let i = 0, len = word.length; i < len; i++) {
        if (letters.indexOf(word[i]) > -1) {
          display += word[i];
        } else {
          display += "_";
        }
      }
      return display;
    }

    function prompt(cb) {
      console.log(Array(lives + 1).join("❤"));
      rl.question(displayWord() + "\r\n", cb);
    }

    function onAnswer(answer) {
      addLetter(answer[0]);

      /* TODO: appeler la fonction addLetter en envoyant la première lettre de `answer` (1 ligne) */

      if (missing > 0 && lives > 0) {
        prompt(onAnswer);
      } else {
        console.log(
          ["End of the game.", "you", missing > 0 ? "lose" : "win", "!"].join(
            " "
          )
        );
        rl.close();
      }
    }

    return {
      play() {
        init();
        console.log("Vous êtes prêts ? Devinez le mot.");
        prompt(onAnswer);
      }
    };
  }
  play() {}
}

const game = new Game();

game.play();
