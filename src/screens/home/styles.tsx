import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  
  img {
    width: 100%;
    height: 100%
  }
  
`

export const ContenteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: blueviolet;
  padding: 10px 20px;
  border-radius: 5px;
`;
