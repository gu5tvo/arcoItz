import { styled } from "styled-components";

export const GraduationStyle = styled.div`
    


    .inner-div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        input, select{
            background-color: #9AE7F8;
            color: #001C22;
            border: none;
            border-radius: 1rem;
            
        }

        input{
        width: 48%;
        height: 3rem;
        padding-left: 0.3rem ;
        }

        select{
        width: 47%;
        height: 3.14rem;

        }

    }



    .description{

        background-color: #00B4D8;
        color: #C5EFF8;
        width: 99%;
        height: 7.5rem;
        border: none;
        border-radius: 1rem;
        padding: 0.3rem ;
    }
`