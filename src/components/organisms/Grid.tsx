import React from 'react'
import Card from '../molecules/Card'
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

const Grid = () => {

  const cardsData = [
    {title: "Card 1", subtitle: "card1", content: "Este é o card 1, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
    {title: "Card 2", subtitle: "card2", content: "Este é o card 2, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
    {title: "Card 3", subtitle: "card3", content: "Este é o card 3, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
    {title: "Card 4", subtitle: "card4", content: "Este é o card 4, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
    {title: "Card 5", subtitle: "card5", content: "Este é o card 5, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
    {title: "Card 6", subtitle: "card6", content: "Este é o card 6, os botões podem ser configurados nas propriedades do botão no arquivo Card.tsx"},
  ]

  return (
    <GridContainer>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} subtitle={card.subtitle} content={card.content} />
        ))}
    </GridContainer>
  )
}

export default Grid