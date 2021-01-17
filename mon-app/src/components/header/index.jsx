import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/match">
        <img
          to="/match"
          className="match"
          src="/images/match_icon.svg"
          alt="Match Icon"
        />
      </Link>
      <Link to="/">
        <img
          className="logo"
          src="/images/md_logo_white.png"
          alt="Match Dev logo"
        />
      </Link>
      <Link to="/profil/Bob">
        <img
          className="profile"
          src="/images/profile_user.svg"
          alt="User Profile Icon"
        />
      </Link>
    </Container>
  );
}
