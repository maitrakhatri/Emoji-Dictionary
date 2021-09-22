import React, { useState } from "react";
import "./styles.css";

var emojiDic = {
  "🥢": "Chopsticks",
  "🍽": "Fork and Knife with Plate",
  "🍴": "Fork and Knife",
  "🥄": "Spoon",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass"
};

var emojisWeKnow = Object.keys(emojiDic);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiMeaning(event) {
    var userInput = event.target.value;

    var meaning = emojiDic[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DataBase yet.";
    }

    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDic[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header>
        <h1> Emoji Dictionary </h1>
        <small> You can find meanings of your emojis here </small>
      </header>

      <h2> Enter your Emoji here: </h2>

      <input onChange={emojiMeaning} />

      <h2> Meaning: {meaning} </h2>

      <h3> Emojis we know (Click to know their Meaning)</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{
              cursor: "pointer",
              padding: "1.5rem",
              fontSize: "2rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
