import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/header/header";
import { Separator } from "../components/separator/separator";
import { Tweet } from "../components/tweets/Tweet";
import "./timeline.css"


export const Timeline = () => {
  const [ tweets, setTweets ] = useState(["Meu primeito Tweet", "Deu certo", "Teste 3"])
  const [ newTweet, setNewTweet ] = useState('') // controlled Components

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    
    setTweets(prevTweets => [newTweet,...prevTweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }


  return(
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/paulo7708.png" alt="img" />
          <textarea
          id="tweet"
          placeholder="What's happening?"
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewTweet(event.target.value)
          }}
          value={newTweet}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet: string) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  )
};
