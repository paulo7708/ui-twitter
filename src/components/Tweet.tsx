import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

export const Tweet = () => {
  return (
    <>
      <div className="container">
        <a href="#" className="tweet">
          <img src="https://github.com/paulo7708.png" alt="Paulo" />
        </a>
        <div className="tweet-content">
          <div className="tweet-content-header">
            <strong>Paulo Henrique</strong>
            <span> @paulo7708</span>
          </div>
          <p>
            Acabei de migrar um projeto React Gigante de create-react-app para
            Vite e os resultados foram: <br /><br />
            npm start: de 32s para 400ms <br />
            npm build: de 120s para 22s <br /><br />
            Troquei do YARN para p PNPM e o install das deps mudou de 24s para 8s.
          </p>

          <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
              20
            </button>
            <button type="button">
              <ArrowsClockwise />
              20
            </button>
            <button type="button">
              <Heart />
              20
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
