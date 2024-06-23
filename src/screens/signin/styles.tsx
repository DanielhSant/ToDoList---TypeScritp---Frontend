import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    border: solid 1px blueviolet;
    background-color: #f2f2f2;
    color: black;
    padding: 20px;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const CheckboxInput = styled.input`
  width: 10px; 
  height: 8px;
`

export const CheckBoxLabel = styled.label `
    font-size: x-small;
`
export const ForgotLabel = styled.h1`
    font-size: x-small;
    color: blue;
    cursor: pointer;
`
export const Button = styled.button`
    padding: 10px 20px;
    margin-top: 15px;
    background-color: #6a5acd;
    color: #fff;
    border: none;
    cursor: pointer;
`

export const Button2 = styled.button`
    padding: 10px 20px;
    min-width: 300px;
    margin-top: 15px;
    margin-left: 21px;
    margin-right: 21px;
    background-color: #6a5acd;
    color: #fff;
    border: none;
    cursor: pointer;
`