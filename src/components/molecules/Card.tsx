import React from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'

const SCard = styled.div `
    background-color: white;
    width: 12rem;
    height: 15rem;
    border-radius: 20px;
    margin: auto;
    box-shadow: 10px 10px 10px grey;
`

const Card = () => {
  return (
    <SCard>
        <Button kind='primary' size='1' state='enabled'/>
        <Button kind='secondary' size='2' state='enabled'/>
        <Button kind='tertiary'size='3' state='enabled'/>
    </SCard>
  )
}

export default Card