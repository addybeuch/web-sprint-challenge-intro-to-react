// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Swag = styled.h2`
    background-color: #dead31;
    width: 50%;
    margin-left: 25%;
    opacity: 0.6;
    border-radius: 20px;
`

const Character = props => {
    const {character} = props;


return (
    <div className='character'>
        <Swag>
        <h2>{character.name}</h2>
        </Swag>
    </div>
)
}

export default Character;