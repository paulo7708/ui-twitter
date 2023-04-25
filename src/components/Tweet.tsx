interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export const Tweet = (props: TweetProps) => {
  return (
    <div className="tweet" style={{ borderRadius: 8 }}>
      <h1>{props.user}</h1>
      <h3>{props.children}</h3>
      <button>{props.likes ? props.likes : 0}</button>
    </div>
  );
};
