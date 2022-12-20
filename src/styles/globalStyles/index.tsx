import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
   .w-lg-100{
    width: 350px;
    @media(max-width: 991px){
        width: 100%;
    }
   }
   .slick-arrow{
    background-color: rgba(0,0,0, 0.7);
    width: 60px;
    height: 60px;

    &:hover{
        background-color: #000;
    }
    &:focus{
        background-color: rgba(0,0,0, 0.7);

        &:hover{
            background-color: #000;
        }
    }
   }

   .slick-next{
        @media(min-width: 992px)
            {
                right: 0;
                z-index: 2;
            }
        right: -70px;
        z-index: 1;  
   }

   .slick-prev{
        @media(min-width: 992px)
            {
                left: 0;
                z-index: 2;
            }
        left: -70px;
        z-index: 1;
   }

   .slick-disabled{
        opacity: 0;
   }
   .slick-next:before, [dir=rtl] .slick-prev:before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color:#ccc;
        content: '>';
        font-weight: 700;
    }
    .slick-next:before {
        padding-bottom: 5px;
        content: '>';
    }
    .slick-prev:before, [dir=rtl] .slick-prev:before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: 700;
        color:#ccc;
        content: '<';
    }
    .slick-prev:before {
        padding-bottom: 5px;
        content: '<';
    }
    .fs-small{
        @media(max-width: 575px){
            font-size: 14px;
        }
    }
    .flex-1{
        flex: 1;
    }
`
