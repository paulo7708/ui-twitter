import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from "phosphor-react";
import twitterLogo from "../../assets/logo-twitter.svg";
import "./sidebar.style.css"

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" srcSet="" />

      <nav className="main-navigation">
        <a className="active" href="">
          <House weight="fill" />
          Home
        </a>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet">Tweet</button>
    </aside>
  );
};
