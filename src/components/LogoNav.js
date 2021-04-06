import { Logo, NavLogo, BtnSort, BtnCreate, Avatar, AvatarImg, User, Username, HomeIcon, PostsIcon, SaveIconNav, UpvotedIcon, NotificationIcon, MessagesIcon, ProfileIcon, Linked} from "../styledComponents";
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

const LogoNav = () => {
  const [icon, setIcon] = useState(
    "https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png"
  );
  const [userName, setUserName] = useState()

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
      const data = await axios(
        `https://oauth.reddit.com/api/v1/me`, config
      ).then((res) => res);
      const uselessIcon = data.data.icon_img
      if (uselessIcon.endsWith("png")) {
        setIcon(uselessIcon);
      } else {
        const remove = uselessIcon.split("?").pop();
        const icon = uselessIcon.replace(remove, "");
        setIcon(icon);
      }
      setUserName(data.data.name)
    }
    getIcon();
  });


  return (
    <NavLogo>
      <div style={{height:'60px'}}>
        <Logo>MinimalReddit</Logo>
      </div>
      <div class="nav">
        
        <Linked to='/'><BtnSort><HomeIcon/>Home</BtnSort></Linked>
        <Linked to='/saved'><BtnSort><SaveIconNav/>Saved</BtnSort></Linked>
        <Linked to='/upvoted'><BtnSort><UpvotedIcon/> Upvoted</BtnSort></Linked>
        <Linked to='/notifications'><BtnSort><NotificationIcon/> Notifications</BtnSort></Linked>
        <Linked to='/messages'><BtnSort><MessagesIcon/>Messages</BtnSort></Linked>
        <Linked to='/posts'><BtnSort><PostsIcon/>My posts</BtnSort></Linked>
        <Linked to='/me'><BtnSort><ProfileIcon/>Profile</BtnSort></Linked>
        
        <Linked to='/best'><BtnCreate>Create Post</BtnCreate></Linked>
      </div>
      <Avatar>
        <div>
          <AvatarImg
            class="avatar-img"
            src={icon}
            alt=""
          />
        </div>
        <User>
          <Username>
            {userName}
            <br />
            <span>u/{userName}</span>
          </Username>
        </User>
      </Avatar>
    </NavLogo>
  );
};

export default LogoNav;

