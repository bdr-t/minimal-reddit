import { Logo, NavLogo, BtnSort, BtnCreate, Avatar, AvatarImg, User, Username} from "../styledComponents";

const Hola = () => {
  return (
    <NavLogo>
      <div style={{height:'60px'}}>
        <Logo>MinimalReddit</Logo>
      </div>
      <div class="nav">
        <BtnSort>Home</BtnSort>
        <BtnSort>My posts</BtnSort>
        <BtnSort>Saved</BtnSort>
        <BtnSort>Upvoted</BtnSort>
        <BtnSort>Notifications</BtnSort>
        <BtnSort>Messages</BtnSort>
        <BtnSort>Profile</BtnSort>
        <BtnCreate>Create Post</BtnCreate>
      </div>
      <Avatar>
        <div>
          <AvatarImg
            class="avatar-img"
            src="https://www.redditstatic.com/avatars/avatar_default_04_C18D42.png"
            alt=""
          />
        </div>
        <User>
          <Username>
            wakfuld
            <br />
            <span>u/wakfuld</span>
          </Username>
        </User>
      </Avatar>
    </NavLogo>
  );
};

export default Hola;
<div>Hola</div>;
