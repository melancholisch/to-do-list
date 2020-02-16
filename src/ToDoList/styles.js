import styled from 'styled-components';

export const Formulario = styled.div`
    background-color: tomato;
    text-align: center;
    margin-top: 40px;
    
    h1 {
        margin-bottom: 20px;
    }

    input{
        height: 50px;
        width: 200px;
        border: none;
        margin-bottom: 10px;
        text-align: center;
    }

    button{
        margin-left: 20px;
        margin-top: 20px;
        height: 50px;
        width: 80px;
        padding: 15px;
        
    }
    .controle-edicao{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        left: 65%;
        background-color: green;
        width: 300px;
        text-align: center;
        transition: all .2s;
    }
`