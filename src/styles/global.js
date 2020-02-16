import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0; 
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, border-style, #root{
        min-height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Didact Gothic', sans-serif;
        overflow-x: hidden !important;
        overflow-y: scroll;
        

        @media(max-width:980px){
            overflow-x:hidden;
            overflow-y:scroll;
            max-width: 100%;
        }
    }
    button {
        cursor: pointer;
        border: 0;
    }
`;