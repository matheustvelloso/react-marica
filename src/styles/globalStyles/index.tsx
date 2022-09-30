import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: #f5f5f5;
    }

    .relative{
        position: relative;
    }
    .fs-md{
        font-size: 18px !important;
    }
   .p-10 a:nth-child(n){
    padding-bottom: 10px;
   }
   .p-10 a:last-child(){
    padding-bottom: 0px;
   }
`
