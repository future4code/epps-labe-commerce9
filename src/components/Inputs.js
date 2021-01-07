import React, {useState} from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
    width:100px;
    height:15px;
    font-size:16px;
    padding:2px;
    margin: auto;
`;

function InputTask() {

    const [texto, setTexto] = useState ('');
    const handleInput = (e) => {
        setTexto(e.target.value) 
    };

    return(
        <>
        <Inputs type ="text" value={texto} onChange={handleInput} />
        </>
    );
}

export default InputTask;