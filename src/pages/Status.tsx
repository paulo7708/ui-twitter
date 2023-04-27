import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/header/header";
import { Separator } from "../components/separator/separator";
import { Tweet } from "../components/tweets/Tweet";
import "./Status.css";

export const Status = () => {
  const [answers, setAnswers] = useState([
    "Concordo",
    "Faze sentido",
    "Muito bom amigo!",
  ]); // controlled Components

  const [newAnswers, setNewAnswers] = useState("");

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnswers("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quam adipisci nesciunt, placeat eius perspiciatis odit culpa fugit nemo repellat fugiat ab itaque distinctio repellendus unde laudantium aliquam sapiente quibusdam?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/paulo7708.png" alt="img" />
          <textarea
            id="tweet"
            placeholder="Tweet your answers"
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
            value={newAnswers}
          ></textarea>
        </label>
        <button type="submit">answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
};
