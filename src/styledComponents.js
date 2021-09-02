import styled, { createGlobalStyle } from 'styled-components';
import ReactHlsPlayer from 'react-hls-player';
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti';
import { HiTrendingUp, HiHome } from 'react-icons/hi';
import { MdFiberNew, MdWhatshot } from 'react-icons/md';
import { IoRocketSharp } from 'react-icons/io5';
import { BsFillBarChartFill, BsFillBookmarkFill, BsFillPersonFill } from 'react-icons/bs';
import { RiBookFill, RiNotification4Fill } from 'react-icons/ri';
import { BiUpvote, BiMessageSquareDetail } from 'react-icons/bi';

import { Link } from 'react-router-dom';

// const color = {
//   text: 'white',
//   colorPrimary200: '#9CA3AF',
//   colorPrimary300: '#9CA3AF',
//   colorPrimary600: '#6B7280',
//   colorPrimary700: '#374151',
//   colorPrimary800: '#1F2937',
//   colorAccentGlow: 'rgba(253,77,77,0.3)',
//   colorAccent: '#10B981',
//   colorAccentHover: '#fd6868',
//   links: 'lightblue',
// };

const color = {
  text: '#000000',
  colorPrimary200: '#4B5563',
  colorPrimary300: '#6B7280',
  colorPrimary600: '#D1D5DB',
  colorPrimary700: '#E5E7EB',
  colorPrimary800: '#F3F4F6',
  colorAccentGlow: 'rgba(253,77,77,0.3)',
  colorAccent: '#8B5CF6',
  colorAccentHover: '#fd6868',
};

export const UniversalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.colorPrimary800};
box-sizing: border-box;
}`;

export const AppDiv = styled.div`
  background: ${(props) => props.theme.colorPrimary800};
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: lighgrey;
  border-radius: 8px;
  outline: none;
  border: none;
  margin: 1em;
  background-color: ${color.colorAccent};
  &:hover {
    /* background-color: ${color.colorAccentHover}; */
  }
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const LinkedNoHover = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const LinkedSort = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  font-weight: 700;
  padding-bottom: 8.8px;
  padding-left: 0.5em;
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ArrowDown = styled(TiArrowDownThick)`
  align-self: center;
  width: 20px;
  height: auto;
  color: ${(props) => (props.focus ? props.theme.colorPrimary200 : color.colorAccent)};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
  }
`;

export const SaveIcon = styled(BsFillBookmarkFill)`
  vertical-align: middle;
  padding-left: 0.5em;
  width: 20px;
  height: auto;
  color: ${(props) => (props.saved === 1 ? color.colorAccent : props.theme.colorPrimary200)};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
  }
`;

export const ArrowUp = styled(TiArrowUpThick)`
  align-self: center;
  width: 20px;
  height: auto;
  cursor: pointer;
  color: ${(props) => (props.focus === 1 ? color.colorAccent : props.theme.colorPrimary200)};
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
  }
`;

export const SubReddit = styled.div`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: ${(props) => props.theme.colorPrimary300};
  text-decoration: none;
  cursor: pointer;
  align-self: center;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ThridPartDiv = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 60px auto;
  gap: 10px;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colorPrimary800};
  padding-left: 2em;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: auto;
  border-radius: 8px;
  width: 680px;
  /* border-radius: 14px; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  /* border: 1px solid black; */
  background-color: ${(props) => props.theme.colorPrimary700};
  margin-bottom: 1em;
  display: hidden;
  @media (max-width: 768px) {
    width: 100%
  }
  @media (max-width: 500px) {
    width: 90%;
    place-self: center;
    margin: 8px 0;
  }
`;

export const Title = styled.h2`
  font-family: Segoe UI Semibold;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  padding: 0.75em 1em 0 0.5em;
  padding-left: 0.5em;
  /* border-bottom: 1px solid black; */
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 40px;
  justify-self: flex-end;
  padding-left: 1em;
  padding-right: 1em;
`;

export const Upvotes = styled.div`
  display: flex;
  flex-direction: columns;
  justify-self: start;
  align-self: center;
`;

export const Content = styled.p`
  padding: 1em 2em;
  font-size: 14px;
  /* border-bottom: 1px solid black; */
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

export const PostHeader = styled.div`
  display: flex;
`;

export const ContentImage = styled.img`
  margin: auto;
  object-fit: contain;
  width: 100%;
  max-height: 1000px;
  display: block;
  margin: auto;
  background-color: black;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.colorPrimary300};
  font-family: Segoe UI Light;
  font-size: 13px;
`;

export const MessageBy = styled.div`
  color: ${color.colorAccent};
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  padding: 0.25em 1em;
  a {
    :hover {
      color: ${(props) => props.theme.text};
    }
  }
  span {
    padding-right: 0.5em;
    color: ${(props) => props.theme.text};
  }
`;

export const Video = styled(ReactHlsPlayer)`
  max-height: 90vh;
  max-width: 100%;
  background-color: black;
`;
export const Text = styled.div`
  color: ${(props) => props.theme.text};
  padding: 4px 1em 1em 1em;
  font-family: Segoe UI;
  font-size: 15px;
  p {
    margin-bottom: 1em;
  }
  a {
    color: ${(props) => props.theme.links};
  }
`;

export const Enlace = styled.a`
  white-space: pre-line;
  font-family: Segoe UI;
  font-size: 15px;
`;

export const UpvotesNum = styled.p`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: ${(props) => props.theme.colorPrimary300};
  margin: 0;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const Comments = styled(UpvotesNum)`
  margin: auto;
  color: ${(props) => props.theme.colorPrimary300};
  font-family: Segoe UI SemiBold;
`;

export const CommentDiv = styled.div`
  background-color: ${(props) => props.theme.colorPrimary700};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export const CommentsContainer = styled(Container)`
  overflow: hidden;
  background-color: ${(props) => props.theme.colorPrimary800};
  gap: 1em;
`;

export const Input = styled.input`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorPrimary600};
  height: 30px;
  width: 300px;
  align-self: center;
  outline: none;
  border: none;
  opacity: 0;
`;

export const TrendingContainer = styled.div`
  background-color: ${(props) => props.theme.colorPrimary700};
  height: fit-content;
  width: 300px;
  place-content: center;
  border-radius: 8px;
  padding: 0 0 1em 0;
`;

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.colorPrimary700};
  height: fit-content;
  width: 100%;
  border-radius: 8px;
  padding: 1em 0.5em;
  width: 100%;
  margin-top: 50px;
  display: flex;
  gap: 1em;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const KarmaCreated = styled.div`
  display: flex;
  gap: 4em;
  padding: 1em 0;
`;

export const ProfileName = styled.h2`
  color: ${(props) => props.theme.text};
  font-weight: 300;
  font-size: 30px;
`;

export const LogOutBtn = styled.button`
  outline: none;
  border: none;
  text-align: center;
  width: 100%;
  padding: 1em;
  background-color: ${color.colorAccent};
  border-radius: 20px;
  margin-top: 2em;
  cursor: pointer;
  h3 {
    color: white;
  }
`;

export const SpanColor = styled.span`
  color: ${color.colorAccent};
`;

export const LoginComponent = styled.div`
  display: grid;
  place-self: center;
  height: 200px;
  width: 300px;
  background-color: ${(props) => props.theme.colorPrimary700};
  border-radius: 8px;
  place-content: center;
`;

export const Logo = styled.a`
  display: inline-block;
  padding: 1em 1em 0 0.5em;
  font-size: 20px;
  color: ${color.colorAccent};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  font-family: Poppins;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (max-width: 1350px) {
    gap: 1em;
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Section = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20% 680px 25%;
  background-color: ${(props) => props.theme.colorPrimary800};
  @media (max-width: 500px) {
    display: flex;
    overflow-x: hidden;
  }
  @media (max-width: 1350px) {
    grid-template-columns: 80px 680px 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
  }
`;

export const NavLogo = styled.div`
  width: 250px;
  box-sizing: border-box;
  height: 100vh;
  position: sticky;
  top: 0;
  justify-self: end;
  display: grid;
  grid-template-rows: auto;
  gap: 50px;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 1350px) {
    justify-self: start;
    width: 80px;
    border-right: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const BtnSort = styled.h3`
  padding: 0.5em 1em;
  width: fit-content;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const TrendingH3 = styled.h3`
  text-align: center;
  padding: 0.5em;
  color: ${(props) => props.theme.text};
`;

export const JoinBtn = styled.p`
  margin-left: auto;
  border-radius: 20px;
  padding: 0.5em 1em;
  align-self: center;
  background-color: ${color.colorAccent};
  cursor: pointer;
  color: white;
`;

export const BtnCreate = styled.h3`
  margin-top: 1em;
  padding: 0.5em 1.5em;
  width: 100px;
  color: white;
  background-color: ${color.colorAccent};
  text-align: center;
  border-radius: 20px;
  :hover {
    color: white;
  }
  @media (max-width: 500px) {
    width: fit-content;
    font-size: 12px;
  }
`;

export const CreateLink = styled.a`
  @media (max-width: 1350px) {
    display: none;
  }
  width: 100%;
  display: flex;
`;

export const Login = styled.a`
  text-decoration: none;
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: row;
  border-radius: 20px;
  margin-right: 2em;
  padding: 0.25em;
  position: relative;
  &:hover {
    background-color: ${(props) => props.theme.colorAccentGlow};
  }
  @media (max-width: 1350px) {
    display: grid;
    justify-content: center;
  }
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
`;

export const User = styled.div`
  align-items: center;
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const Username = styled.h4`
  color: ${(props) => props.theme.text};
  padding-left: 1em;
  font-size: 15px;
  font-weight: 700;
  span {
    font-weight: 500;
  }
`;

export const Sorting = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colorPrimary800};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 60px;
  z-index: 1000;
`;

export const CommentUpvoteContainer = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  padding-left: 16px;
  gap: 0.5em;
`;

export const CommentUpvote = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  width: 35px;
`;

export const SortingElement = styled.div`
  place-self: center;
`;

export const SortingContainer = styled.div`
  display: grid;
  border-bottom: ${(props) => (props.active === 1 ? '1px solid' + color.colorAccent : 'none')};
  &:hover {
    border-bottom: 1px solid ${color.colorAccent};
    color: ${(props) => props.theme.colorAccentHover};
    svg,
    a,
    button {
      color: ${(props) => props.theme.colorAccentHover};
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
`;

export const CommentImageDiv = styled.div`
  width: 35px;
  display: grid;
  place-content: center;
`;

export const CommentImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto;
`;

export const RepliesP = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-family: Segoe UI SemiBold;
  color: ${(props) => props.theme.colorPrimary300};
  text-align: center;
  font-size: 15px;
  padding-bottom: 0.5em;
`;

export const RepliesDiv = styled.div`
  border-left: 0.5px solid grey;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  padding-left: 5px;
  border-bottom-width: 10px;
  margin-bottom: 10px;
`;

export const NewIcon = styled(MdFiberNew)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const HotIcon = styled(MdWhatshot)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;
export const BestIcon = styled(IoRocketSharp)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const TopIcon = styled(BsFillBarChartFill)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const RisingIcon = styled(HiTrendingUp)`
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  position: relative;
  top: 5px;
`;

export const DivHover = styled.div`
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
    svg {
      color: ${(props) => props.theme.colorAccentHover};
    }
  }
`;

export const HomeIcon = styled(HiHome)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const PostsIcon = styled(RiBookFill)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const SaveIconNav = styled(BsFillBookmarkFill)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const UpvotedIcon = styled(BiUpvote)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const NotificationIcon = styled(RiNotification4Fill)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const MessagesIcon = styled(BiMessageSquareDetail)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const ProfileIcon = styled(BsFillPersonFill)`
  color: ${(props) => props.theme.text};
  @media (max-width: 1350px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

export const NormalText = styled.p`
  color: ${(props) => props.theme.text};
`;

export const SortText = styled(NormalText)`
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const TopDropdownDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  margin-top: 1em;
  width: 150px;
  background-color: white;
  padding: 1em 0;
  opacity: ${(props) => (props.active === 1 ? 1 : 0)};
  pointer-events: ${(props) => (props.active === 1 ? 'all' : 'none')};
`;

export const LogOutDropDown = styled(TopDropdownDiv)`
  left: 150px;
  bottom: 40px;
`;

export const TopSortBtn = styled.button`
  width: 65px;
`;
export const TopBtn = styled.button`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${(props) => props.theme.colorAccentHover};
  }
  align-self: flex-end;
  font-weight: 700;
  padding-bottom: 8.8px;
  padding-left: 0.5em;
  color: ${(props) => (props.active === 1 ? color.colorAccent : props.theme.text)};

  border: 0;
  background: none;
  font-size: 16px;

  &:focus + ul {
    opacity: 0;
    pointer-events: all;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.colorPrimary800};
    position: fixed;
    bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

export const MobileFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  align-items: center;
`;

export const TopText = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LogoPc = styled(Logo)`
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const LogoTablet = styled(Logo)`
  padding: 1em 1em 0 1em;
  @media (min-width: 1350px) {
    display: none;
  }
`;
