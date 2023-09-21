import React from "react";
import emojiList from "../emojiList";
import EmojiCard from "./EmojiCard";

function emoji(SingleEmoji){
  return <EmojiCard 
    key={SingleEmoji.id}
    emoji={SingleEmoji.emoji}
    name={SingleEmoji.name}
    meaning={SingleEmoji.meaning}
  />
}

function cut(SingleEmoji) {
  return SingleEmoji.meaning.substring(0,100);
}

function App() {
  let str=emojiList.map(cut);
  console.log(str);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojiList.map(emoji)}
      </dl>
    </div>
  );
}

export default App;
