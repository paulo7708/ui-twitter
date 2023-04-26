import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { Separator } from "./components/separator";

const tweets = ["Meu primeito Tweet", "Deu certo", "Teste 3"];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
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
      </div>
    </div>
  </React.StrictMode>
);
