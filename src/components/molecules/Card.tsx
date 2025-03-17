import React, { useState } from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'
import Modal from './Modal';
import { title } from 'process';

const SCard = styled.div `
    background-color: white;
    width: 12rem;
    height: 15rem;
    border-radius: 20px;
    margin: auto;
    box-shadow: 10px 10px 10px grey;
    color: black;
`
var index = 1;

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({  title, subtitle,  content}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <SCard>
      <h3>Este é um card</h3>
      <hr />
      <br />
        <Button onClick={() => setIsModalOpen(true)}/>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{content}</p>
        </Modal>
    </SCard>
  )
}

export default Card