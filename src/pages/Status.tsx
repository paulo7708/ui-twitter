import { Header } from "../components/header/header";
import { Separator } from "../components/separator/separator";
import { Tweet } from "../components/tweets/Tweet";
import "./Status.css"

const answers = ["Concordo", "Faze sentido", "Muito bom amigo!"];

export const Status = () => {
  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quam adipisci nesciunt, placeat eius perspiciatis odit culpa fugit nemo repellat fugiat ab itaque distinctio repellendus unde laudantium aliquam sapiente quibusdam?" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/paulo7708.png" alt="img" />
          <textarea id="tweet" placeholder="Tweet your answers"></textarea>
        </label>
        <button type="submit">answer</button>
      </form>

      


      {answers.map((answer: string) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
};