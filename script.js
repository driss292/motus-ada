const btn = document.querySelector("#btn");

btn.addEventListener("click", guess);

function tryWord(word, base) {
  // TODO: fix jeu sensible à la casse.
  if (word === base) {
    return true;
  }
  let wellPlaced = [];
  let notInWord = [];
  let missplaced = [];

  let arrayBase = base.split("");
  let arrayWord = word.split("");

  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] === arrayWord[i]) {
      wellPlaced.push(arrayWord[i]);
    } else {
      missplaced.push(arrayWord[i]);
    }
  }

  for (const char of arrayWord) {
    if (arrayBase.includes(char) === false) {
      notInWord.push(char);
    }
  }
  console.log(wellPlaced);
  console.log(missplaced);
  console.log(notInWord);

  return {
    wellPlaced,
    missplaced,
    notInWord,
  };
}

function guess() {
  let base = "dictionnaire";
  let word = document.getElementById("word").value;

  let result = tryWord(word, base);

  // document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced;
  document.getElementById("miss").innerText = "Mal placé: " + result.missplaced;
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord;
  if (result.wellPlaced) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}
