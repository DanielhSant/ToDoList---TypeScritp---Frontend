import styled from "styled-components";


export const Container = styled.div`
  padding: 20px;
`;

export const HeaderUser = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input<{darkMode: boolean}>`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid ${(props) => (props.darkMode ? "#bbb" : "#ccc")};
  background-color: ${(props) => (props.darkMode ? "#ddd" : "#ddd")};
  color: ${(props) => (props.darkMode ? "#222" : "#000")};
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const ButtonUsers = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
`;

export const PlaceholderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px dashed #ccc;
  padding: 20px;
  background-color: #4b4b4b;
`;


export const ContainerPostIt = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  color: black;
`