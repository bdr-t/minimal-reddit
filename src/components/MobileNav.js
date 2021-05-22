import {
  MobileNav,
  Linked,
  DivHover,
  BtnSort,
  MessagesIcon,
  PostsIcon,
  HomeIcon,
  Logo,
  ProfileIcon,
  MobileFlex,
  Avatar,
  AvatarImg,
  Login,
  BtnCreate,
} from '../styledComponents';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mobile = () => {
  const authorization = useSelector((state) => state.authorization.authorization);
  const token = useSelector((state) => state.authorization.token);
  const [icon, setIcon] = useState(
    'https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png'
  );
  const [topFocus, setTopFocus] = useState(0);

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
    }
    if (authorization) {
      getIcon();
    }
  },[]);

  return (
    <MobileNav>
      <MobileFlex>
        <div>
          <Linked to="/">
            <Logo style={{ padding: '0 0 0 1em' }}>MR</Logo>
          </Linked>
        </div>
        <MobileFlex>
          <Linked to="/">
            <DivHover>
              <BtnSort>
                <HomeIcon />
              </BtnSort>
            </DivHover>
          </Linked>

          <Linked to={authorization ? '/messages' : '/login'}>
            <DivHover>
              <BtnSort>
                <MessagesIcon />
              </BtnSort>
            </DivHover>
          </Linked>
          <Linked to={authorization ? '/posts' : '/login'}>
            <DivHover>
              <BtnSort>
                <PostsIcon />
              </BtnSort>
            </DivHover>
          </Linked>
          <Linked to={authorization ? '/me' : '/login'}>
            <DivHover>
              <BtnSort>
                <ProfileIcon />
              </BtnSort>
            </DivHover>
          </Linked>
        </MobileFlex>
      </MobileFlex>
      {authorization && (
        <Linked to="/me">
          <Avatar>
            <div>
              <AvatarImg class="avatar-img" src={icon} alt="" />
            </div>
          </Avatar>
        </Linked>
      )}
      {!authorization && (
        <Linked to="/login">
          <Avatar>
            <div>
              <AvatarImg class="avatar-img" src={icon} alt="" />
            </div>
          </Avatar>
        </Linked>
      )}
    </MobileNav>
  );
};

export default Mobile;
