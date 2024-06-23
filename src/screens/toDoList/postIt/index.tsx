import React from "react";
import {Container, Content, Icon, Icons, Title, TrashIcon} from './styles.tsx'
import {FaCheck, FaTrash} from 'react-icons/fa'

const PostIt = ({ title, content, color, onToggle, onDelete, done }) => {
    return (
      <Container style={{backgroundColor: color}}>
        <Title done = {done}>
          {title}
          {done && 
            <FaCheck style={{marginLeft : `10px`, color: 'green'}}/>
          }
        </Title>
        <Content done = {done}>
          {content}
        </Content>
        <Icons>
          <Icon done = {done} onClick ={onToggle}>
            <FaCheck/>
          </Icon>
          <TrashIcon onClick={onDelete}>
            <FaTrash/>
          </TrashIcon>
        </Icons>
      </Container>
    );
  };
  
  export default PostIt;