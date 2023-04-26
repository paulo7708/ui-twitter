import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export const Tweet = (props: TweetProps) => {
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
          
          <p>{props.content}</p>

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
