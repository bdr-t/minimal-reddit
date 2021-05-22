import {
  Logo,
  NavLogo,
  BtnSort,
  BtnCreate,
  Avatar,
  AvatarImg,
  User,
  Username,
  HomeIcon,
  PostsIcon,
  SaveIconNav,
  UpvotedIcon,
  NotificationIcon,
  MessagesIcon,
  ProfileIcon,
  Linked,
  Login,
  LogOutDropDown,
  LogOutBtn,
  DivHover,
} from '../styledComponents';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { logOut } from '../redux/slices/authorizationSlice';

const LogoNav = () => {
  const [icon, setIcon] = useState(
    'https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png'
  );
  const [userName, setUserName] = useState();
  const [topFocus, setTopFocus] = useState(0);

  const token = useSelector((state) => state.authorization.token);
  const authorization = useSelector((state) => state.authorization.authorization);
  const TYPE = 'code';
  const RANDOM_STRING = 'hdiudou9083jkdsa';
  const URI = 'http://localhost:3000/callback/';
  const DURATION = 'permanent';
  const SCOPE_STRING =
    'identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread';
  const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;
  useEffect(() => {
    async function getIcon() {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = await axios(`https://oauth.reddit.com/api/v1/me`, config).then((res) => res);
      const uselessIcon = data.data.icon_img;
      if (uselessIcon.endsWith('png')) {
        setIcon(uselessIcon);
      } else {
        const remove = uselessIcon.split('?').pop();
        const icon = uselessIcon.replace(remove, '');
        setIcon(icon);
      }
      setUserName(data.data.name);
    }
    if(authorization){
    getIcon();

    }
  },[]);

  function handleFocus() {
    if (topFocus === 1) {
      setTopFocus(0);
    } else {
      setTopFocus(1);
    }
  }

  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    window.localStorage.removeItem('refreshToken');
    dispatch(logOut());
    history.push('/');
  }

  return (
    <NavLogo>
      <div style={{ height: '60px' }}>
        <Linked to="/">
          <Logo>MinimalReddit</Logo>
        </Linked>
      </div>
      <div class="nav">
        <Linked to="/">
          <DivHover>
            <BtnSort>
              <HomeIcon />
              Home
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/saved' : '/login'}>
          <DivHover>
            <BtnSort>
              <SaveIconNav />
              Saved
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/upvoted' : '/login'}>
          <DivHover>
            <BtnSort>
              <UpvotedIcon /> Upvoted
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/notifications' : '/login'}>
          <DivHover>
            <BtnSort>
              <NotificationIcon /> Notifications
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/messages' : '/login'}>
          <DivHover>
            <BtnSort>
              <MessagesIcon />
              Messages
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/posts' : '/login'}>
          <DivHover>
            <BtnSort>
              <PostsIcon />
              My posts
            </BtnSort>
          </DivHover>
        </Linked>
        <Linked to={authorization ? '/me' : '/login'}>
          <DivHover>
            <BtnSort>
              <ProfileIcon />
              Profile
            </BtnSort>
          </DivHover>
        </Linked>

        {authorization && (
          <a
            style={{ textDecoration: 'none' }}
            rel="noreferrer"
            target="_blank"
            href="https://www.reddit.com/submit"
          >
            <BtnCreate>Create Post</BtnCreate>
          </a>
        )}
      </div>
      <div>
        {!authorization && (
          <Login href={url}>
            {' '}
            <BtnCreate href={url}>Log in</BtnCreate>
          </Login>
        )}
      </div>
      {authorization && (
        <Avatar onClick={() => handleFocus()}>
          <div>
            <AvatarImg class="avatar-img" src={icon} alt="" />
          </div>
          <User>
            <Username>
              {userName}
              <br />
              <span>u/{userName}</span>
            </Username>
          </User>
          <LogOutDropDown active={topFocus}>
            <LogOutBtn style={{ margin: 0 }} onClick={() => handleClick()}>
              <h3>LOG OUT</h3>
            </LogOutBtn>
          </LogOutDropDown>
        </Avatar>
      )}
    </NavLogo>
  );
};

export default LogoNav;
