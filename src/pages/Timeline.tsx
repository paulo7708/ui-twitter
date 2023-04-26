import { Header } from "../components/header/header";
import { Separator } from "../components/separator/separator";
import { Tweet } from "../components/tweets/Tweet";

const tweets = ["Meu primeito Tweet", "Deu certo", "Teste 3"];

export const Timeline = () => {
  return(
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/paulo7708.png" alt="img" />
          <textarea id="tweet" placeholder="What's happening?"></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      <Tweet content="tweet1" />

      {tweets.map((tweet: string) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  )
};
