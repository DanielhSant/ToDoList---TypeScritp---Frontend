import styled from "styled-components";
import {FaTrash} from 'react-icons/fa'



export const Container = styled.div `
    width: 200px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    font-family: Arial, sans-serif;
    background-color: ${(props) => (props.darkmode ? "#ddd" : "#ccc")};
`
export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(props) => (props.done ? 'green' : 'black')};
`

export const Content = styled.div`
    font-size: 16px;
    margin-bottom: 20px;
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
    color: ${(props) => (props.done ? 'grey' : 'black')};
`

export const Icons = styled.div`
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

export const Icon = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => (props.done ? 'green' : '#333')};
`;

export const TrashIcon = styled(FaTrash)`
  margin-left: 10px;
  cursor: pointer;
  color: red;
`;



export const lightColors = [
    '#FFEB3B', // Amarelo
    '#FFCDD2', // Rosa claro
    '#C8E6C9', // Verde claro
    '#BBDEFB', // Azul claro
    '#E1BEE7', // Roxo claro
    '#FFCC80', // Laranja claro
    '#D1C4E9', // Lavanda claro
    '#B3E5FC', // Ciano claro
    '#DCEDC8', // Verde-limão claro
    '#FFAB91', // Coral claro
    '#FFF9C4', // Amarelo suave
    '#F8BBD0', // Rosa bebê
    '#DCEDC8', // Verde pálido
    '#B2EBF2', // Turquesa claro
    '#E0F7FA', // Azul bebê
    '#F3E5F5', // Lilás
    '#FFECB3', // Âmbar claro
    '#D7CCC8', // Bege claro
    '#F0F4C3', // Verde amarelado claro
    '#FFE082'  // Âmbar suave
  ];
  
export const darkColors = [
    '#FBC02D', // Amarelo escuro
    '#E57373', // Vermelho claro
    '#81C784', // Verde médio
    '#64B5F6', // Azul médio
    '#BA68C8', // Roxo médio
    '#FFB74D', // Laranja médio
    '#9575CD', // Lavanda médio
    '#4FC3F7', // Ciano médio
    '#AED581', // Verde-limão médio
    '#FF8A65', // Coral médio
    '#FFD54F', // Amarelo dourado
    '#F06292', // Rosa forte
    '#81D4FA', // Azul claro
    '#4DB6AC', // Verde água
    '#A5D6A7', // Verde suave
    '#CE93D8', // Lilás escuro
    '#FFCC80', // Laranja suave
    '#BCAAA4', // Marrom claro
    '#FFE082', // Âmbar
    '#FFD740'  // Âmbar brilhante
  ];
  