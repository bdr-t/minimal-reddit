import styled from "styled-components";
import ReactHlsPlayer from "react-hls-player";
import {
  TiArrowDownThick,
  TiArrowUpThick,
} from "react-icons/ti";
import {
  HiOutlineSave
} from "react-icons/hi";

import {Link} from 'react-router-dom'


const color = {
  colorButtonText: '#fff',
colorPrimary100: '#dee3ea',
colorPrimary200: '#b2bdcd',
colorPrimary300: '#5d7290',
colorPrimary600: '#323d4d',
colorPrimary700: '#242c37',
colorPrimary800: '#151a21',
colorPrimary900: '#0b0e11',
colorSecondaryWashedOut: '#879eed',
colorSecondary: '#5575e7',
colorAccentGlow: 'rgba(253,77,77,0.3)',
colorAccent: '#fd4d4d',
colorAccentHover: '#fd6868',
colorAccentDisabled: '#f5bfbf',

}

export const AppDiv = styled.div`
background-color: ${color.colorPrimary800};
height: 100%;
`

export const Button = styled.button`
    padding: 10px;
    background-color: lighgrey;
    border-radius: 8px;
    outline: none;
    border: none;
    margin: 1em;
    background-color: ${color.colorAccent};
    &:hover{
      background-color: ${color.colorAccentHover}
    }
`
export const Linked = styled(Link)`
text-decoration: none;
color: inherit;

`

export const ArrowDown = styled(TiArrowDownThick)`
  align-self: center;
  width: 20px;
  height: auto;
  color: ${props => props.focus ? color.colorPrimary200: color.colorAccent};
  cursor: pointer;
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const SaveIcon = styled(HiOutlineSave)`
  vertical-align: middle;
  padding-left: 1em;
  width: 20px;
  height: auto;
  color: ${props => props.saved === 1 ? color.colorAccent : color.colorPrimary200};
  cursor: pointer;
  &:hover {
    color: ${color.colorAccentHover};
  }
`;


export const ArrowUp = styled(TiArrowUpThick)`
  align-self: center;
  width: 20px;
  height: auto;
  cursor: pointer;
  color: ${props => props.focus === 1 ? color.colorAccent : color.colorPrimary200};
  &:hover {
    color: ${color.colorAccentHover};
  }
`;

export const SubReddit = styled.div`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: ${color.colorPrimary300};
  text-decoration: none;
  cursor: pointer;
  align-self: center;
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: auto;
  width: 680px;
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  /* border: 1px solid black; */
  background-color: ${color.colorPrimary700};
  margin-bottom: 1em;
  display: hidden;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

export const Title = styled.h2`
  font-family: Segoe UI Semibold;
  font-size: 15px;
  color: white;
  padding: 0.75em 1em 0 0.5em;
  padding-left : 0.5em;
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
color: ${color.colorPrimary300};
  font-family: Segoe UI Light;
  font-size: 13px;
`;

export const Video = styled(ReactHlsPlayer)`
  max-height: 500px;
  max-width: 100%;
  background-color: black;
`;
export const Text = styled.div`
color: white;
  padding: 4px 1em 1em 1em;
  font-family: Segoe UI;
  font-size: 15px;
  p{
    margin-bottom: 1em;
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
  color:  ${color.colorPrimary300};;
  margin:0;
`;

export const Comments = styled(UpvotesNum)`
  margin: auto;
  color:  ${color.colorPrimary300};
  font-family: Segoe UI SemiBold;
`;

export const Input = styled.input`
  border-radius: 8px;
  background-color:  ${color.colorPrimary600};;
  height: 30px;
  width: 680px;
  align-self: center;
  outline: none;
  border: none;
`;

export const Login = styled.a`
  width: 60px;
  justify-self: end;
  border: none;
  align-self: center;
  border-radius: 1em;
  padding: 0.75em;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  color: white;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Logo = styled.a`
font-size: 20px;
  color: ${color.colorAccent};
  font-weight: 700;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  font-family: Poppins;
`;

export const Nav = styled.div`

  width: 100%;
  display: flex;
  margin: 0;
  height: 55px;
  justify-content: center;
  margin-bottom: 2em;
  background-color: ${color.colorPrimary800};
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
