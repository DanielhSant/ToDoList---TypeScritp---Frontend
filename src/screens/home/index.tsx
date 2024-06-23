import React from "react";
import {Title, Button, Container, ImageContainer, ContenteContainer} from './styles.tsx'
import Header from '../../components/header/index.tsx'
//import ToDo from '../../assets/ToDo.jpg'
import ToDoListArrumado from '../../assets/ToDoListArrumado.png'


const Home: React.FC = () => {

    return (
            <div style={{
                display: "flex",
                flexDirection:"column",
                overflow: "hidden",
                height: "100vh"
            }}>
                <Header title = "HOME"/>
                <Container>
                    <ImageContainer>
                        <img src={ToDoListArrumado} alt="ToDo Image"/>    
                    </ImageContainer>   
                    <ContenteContainer>
                        <Title>Bem Vindo a <span style={{ color: 'blueviolet' }}>SUA</span> Lista de Afazeres</Title>
                        <Button to="/login">Acessar</Button>
                    </ContenteContainer>
                </Container>
            </div>
      );
};

export default Home;