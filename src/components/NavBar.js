import {useSelector} from 'react-redux'

import {Nav, NavContainer, Logo, Login, Input} from '../styledComponents'
 
import styled from 'styled-components'


const AvatarImg = styled.img`
width: 45px;
height: auto;
border-radius: 50%;
margin: auto 0 auto auto;
`


const NavBar = () => {
  const avatar = 'https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png'
  const authorization = useSelector(state => state.authorization.authorization)
  const TYPE = "code";
  const RANDOM_STRING = "hdiudou9083jkdsa";
  const URI = "http://localhost:3000/callback/";
  const DURATION = "permanent";
  const SCOPE_STRING =
    "identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread";
  const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;
  return (
    <Nav>
      <NavContainer className="nav-container">
        <Logo href="/">
          MinimalReddit

        </Logo>
        <Input type="text" placeholder="Search.." />
        {!authorization && <Login href={url}>
          Log in
        </Login>}
        {authorization && 
          <AvatarImg src={avatar} alt=""/>}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
