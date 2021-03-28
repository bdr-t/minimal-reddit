import { useSelector } from "react-redux";

import { Nav, NavContainer, Logo, Login, Input } from "../styledComponents";
import { useState, useEffect } from "react";

import  axios  from "axios";

import styled from "styled-components";

const AvatarImg = styled.img`
  width: 45px;
  height: auto;
  border-radius: 50%;
  margin: auto 0 auto auto;
`;

const NavBar = () => {
  const [icon, setIcon] = useState(
    "https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png"
  );
  const token = useSelector((state) => state.authorization.token);
  const authorization = useSelector(
    (state) => state.authorization.authorization
  );
  const TYPE = "code";
  const RANDOM_STRING = "hdiudou9083jkdsa";
  const URI = "http://localhost:3000/callback/";
  const DURATION = "permanent";
  const SCOPE_STRING =
    "identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread";
  const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

  useEffect(() => {
    async function getIcon() {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const url = await axios(
        `https://oauth.reddit.com/api/v1/me`, config
      ).then((res) => res.data.icon_img);
      if (url.endsWith("png")) {
        setIcon(url);
      } else {
        const remove = url.split("?").pop();
        const icon = url.replace(remove, "");
        setIcon(icon);
      }
    }
    getIcon();
  });

  return (
    <Nav>
      <NavContainer className="nav-container">
        <Logo href="/">MinimalReddit</Logo>
        <Input type="text" placeholder="Search.." />
        {!authorization && <Login href={url}>Log in</Login>}
        {authorization && <AvatarImg src={icon} alt="" />}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
