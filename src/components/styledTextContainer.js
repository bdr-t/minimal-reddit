import styled from "styled-components";
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

export const Open = styled(TiArrowSortedDown)`
  justify-self: center;
  width: 30px;
  height: auto;
  cursor: pointer;
  &:hover {
    width: 40px;
    height: auto;
  }
`;

export const Text = styled.p`
  align-self: center;
`;
export const SubReddit = styled.a`
  text-decoration: none;
  align-self: center;
  padding-right: 2em;
  cursor: pointer;
  color: inherit;
`;

export const Container = styled.div`
  display: flex;
  justify-self: center;
  margin: auto;
  width: 750px;
  border-radius: 14px;

  /* border: 1px solid black; */
  background-color: white;
  margin-bottom: 2em;
  display: hidden;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: black;
  padding: 0.5em 0.5em;
  /* border-bottom: 1px solid black; */
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  justify-self: flex-end;
`;

export const Upvotes = styled(Footer)`
  padding-left: 2em;
`;

export const Content = styled.p`
  white-space: pre-line;
  padding: 1em 2em;
  font-size: 14px;
  /* border-bottom: 1px solid black; */
  display: ${(props) => (props.visible ? "none" : "block")};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

export const Thumbnail = styled.img`
  flex: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? "none" : "block")};
`;
export const PostHeader = styled.div`
  display: flex;
`;

export const ContentImage = styled.img`
  margin: auto;
  object-fit: contain;
  width: 75%;
  height: auto;
  display: block;
  margin: auto;
`;

export const ContentContainer = styled.div`
  max-width: 100%;
  flex: 5.25;
  display: flex;
  flex-direction: column;
`;

export const NailContainer = styled.div`
  flex: ${(props) => (props.visible ? "0" : "1")};
  max-height: 100px;
`;
