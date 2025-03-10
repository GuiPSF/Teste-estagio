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
    {title: "card1", content: "card 1"},
    {title: "card2", content: "card 2"}
  ]

  return (
    <GridContainer>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
    </GridContainer>
  )
}

export default Grid