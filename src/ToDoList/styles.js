import styled from 'styled-components';

export const Formulario = styled.div`
        background-color: rgba(239,235,232);
        text-align: center;
        height: 100vh;

    form {
        width: 75vw;
        margin: 0 auto;
        position: relative;
        top: 30px;
        border-radius: 15px;
        background-color: rgba(245,255,250);
        min-height: 50vh;
    }

    h1 {
        background-color: rgba(168, 195,225);
        color: rgba(245,255,250);
        height: 75px;
        text-align: center;
        border-radius: 15px 15px 0px 0px ;
    }

    li {
        text-align: start;
        list-style: none;
    }

    input{
        height: 50px;
        width: 400px;
        border: none;
        text-align: center;
    }

    button{
        height: 50px;
        width: 80px;
        padding: 15px;
        border-radius: 10px;
    }

    .controle-edicao{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }

    #controle-excluir-botao{
        
    }

    .controle-adicao{
        display:flex;
        height: 40vh;
        margin: 0 auto;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
    }

    .controle-adicao button {
        margin: 20px;
    }

    .controle-tarefa {
        display: flex;
        justify-content: space-around;
    }

    .controle-tarefa li{
        width: 400px;
        height: 50px;
        margin: 20px 0px 20px 0px;
        background-color: #fff;
        align-items: center;
        font-size: 24px;
    }
    
    .controle-tarefa-botoes {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        width: 180px;
    }


`