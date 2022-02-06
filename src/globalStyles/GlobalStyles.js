import {createGlobalStyle} from 'styled-components/macro';

 const GlobalStyles = createGlobalStyle`
    html,body{
        margin:0px;
        padding:0px;
        background-color: #000000;
    }
    li{
        list-style:none;
    }
    a{
        text-decoration:none;
        cursor:pointer;
    }
`

export default GlobalStyles