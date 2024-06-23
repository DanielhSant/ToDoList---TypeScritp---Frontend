import React from "react";
import { useThemeStore } from "../../store/darkTheme.ts";
import axios from "axios";
import {useForm} from 'react-hook-form'
import {Button, Container, Form, HeaderUser, Input, ButtonUsers,ContainerPostIt, PlaceholderBox} from './styles.tsx'
import { useState } from "react";
import PostIt from "./postIt/index.tsx";
import { darkColors, lightColors } from "./postIt/styles.tsx";
import Header from './header/index.tsx';
import { useAuth } from "../../auth/AuthContext.tsx";


function TodoList () {
  const userName = localStorage.getItem('userName')

  const [task, setTask] = useState([]);
  const {darkMode} = useThemeStore()
  const {register, handleSubmit} = useForm()
  const [visivel, setVisivel] = useState(false)


    const onSubmit = async (data : any) => {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      console.log("tarefa a ser submetido:", data)


      try{
        const res = await axios.post("http://localhost:3000/tasks", {
           name: data.task,
           userId: userId
         }, 
       {headers: {
         Authorization: `Bearer ${token}`
       }
       })
      alert('Cadastro da tarefa realizado')
      console.log("Cadastro realizado", res.data)
      dadosRecebidosFront()
      setVisivel(true)

      console.log(visivel)
       } catch (err) {
        console.log("Erro ao cadastrar a tarefa", err)
       }
      }


      async function  dadosRecebidosFront () {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        try{
          const response = await axios.get(`http://localhost:3000/tasks/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })          
          console.log(response.data)          
          setTask(response.data)
          console.log(task)
        } catch(err){
          console.log(err)
        }
    
      }
      
      const switchTask = () => {
        dadosRecebidosFront()
        setVisivel(!visivel)
      }

      const deleteTask =  (id) => {
        const token = localStorage.getItem('token');
        try {
           axios.delete(`http://localhost:3000/tasks/${id}`, {
            headers: {
              Authorization: `Baerer ${token}`
            }
          })
          setTask(task.filter(task => task.id !== id))
          alert("Tarefa deletada com sucesso.")
        } catch (error) {
          console.error("Erro ao deletar tarefa:", error.response ? error.response.data : error.message);
          alert("Erro ao deletar tarefa. Tente novamente.");
        }
      };
    
    
      const toggleTaskStatus = async (id, currentStatus) => {
        const token = localStorage.getItem("token");
        try {
          await axios.put(
            `http://localhost:3000/tasks/${id}`,
            { done: !currentStatus },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
            }
          );
          // Atualizar o status da tarefa no estado afazeres
          setTask((prevTasks) =>
            prevTasks.map((task) =>
              task.id === id ? { ...task, done: !currentStatus } : task
            )
          );
        } catch (error) {
          console.error("Erro ao atualizar status da tarefa:", error);
          alert("Erro ao atualizar status da tarefa. Tente novamente.");
        }
      };
    
    return (
      <div>
      <Header title = {'Painel de Tarefas'} user = {userName}/>
        <Container>
          <HeaderUser>SUA Lista de Afazeres</HeaderUser>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              {...register('task')} 
              id="task" 
              name="task" 
              type="text" 
              placeholder="Fazer café..."  
              darkMode = {darkMode}/>
            <Button type="submit">Inserir</Button>
          </Form>
        </Container>
        <div style={{
          padding: "20px"
        }}>
           <ButtonUsers onClick={switchTask}>Tarefas Salvas</ButtonUsers>
          <h2>Minhas tarefas:</h2>
          <PlaceholderBox>
          {visivel === true && (
            <ContainerPostIt>
              {task.map((task, index) => (
                <PostIt
                  key={index}
                  title={`Tarefa ${index + 1}`}
                  content={task.name}
                  color={darkMode ? lightColors[index % lightColors.length] : darkColors[index % darkColors.length]}
                  done={task.done}
                  onToggle={() => toggleTaskStatus(task.id, task.done)}
                  onDelete={() => deleteTask(task.id)}
                />
              ))}
            </ContainerPostIt>
          )}
          </PlaceholderBox>
        </div>
      </div>
    );
  }


export default TodoList;