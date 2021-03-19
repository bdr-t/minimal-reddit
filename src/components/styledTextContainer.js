import styled from "styled-components";
import ReactHlsPlayer from "react-hls-player";
import {
  TiArrowDownThick,
  TiArrowUpThick,
  TiArrowSortedDown,
} from "react-icons/ti";

export const ArrowDown = styled(TiArrowDownThick)`
  align-self: center;
  width: 20px;
  height: auto;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ArrowUp = styled(TiArrowUpThick)`
  align-self: center;
  width: 20px;
  height: auto;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const SubReddit = styled.a`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: #65676b;
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
  background-color: white;
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
  color: black;
  padding: 0.75em 1em 0 1em;
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
  white-space: pre-line;
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
  max-height: 700px;
  display: block;
  margin: auto;
  background-color: black;
`;


export const SubTitle = styled.div`
  font-family: Segoe UI Light;
  padding-left: 1em;
  padding-bottom: 8px;
  font-size: 13px;
  color: #65676b;
`;

export const Video = styled(ReactHlsPlayer)`
  max-height: 500px;
  max-width: 100%;
  background-color: black;
`;
export const Text = styled.div`
  padding: 4px 1em 1em 1em;
  white-space: pre-line;
  font-family: Segoe UI;
  font-size: 15px;
`;

export const Enlace = styled.a`
  white-space: pre-line;
  font-family: Segoe UI;
  font-size: 15px;
`;


export const UpvotesNum = styled.p`
  font-family: Segoe UI SemiBold;
  font-size: 15px;
  color: #65676b;
`;

export const Comments = styled(UpvotesNum)`
  margin: auto;
`;
