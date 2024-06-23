import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #808080;
`

export const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const UserInterface = styled.div`
    display: flex;
    margin-right: 30px;
    align-items: center;
`

export const Img = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 15px;
`
export const ContainerUser = styled.div`
    align-items: center;
    max-width: 150px;
    display: flex;
    flex-direction: row;
    margin-right: 10px;
`

export const ToggleButton = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 5px;
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 75px;
    background-color: #e1e1e1;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    text-decoration: none;
`
export const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin-right: 15px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: #f1f1f1;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;