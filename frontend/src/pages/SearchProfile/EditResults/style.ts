import styled from "styled-components";

export const EditResultsDiv = styled.div`
    padding: 19px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    max-width: 260px;
    max-height: 380px;
    background-color: #fff;
    flex: 1;
    box-sizing: border-box;

    div{
        display: flex;
        flex:2;
        flex-direction: column;
        
        p{
            font-weight: 400;
            font-size: 14px;
        }

        button{
            height: 44px;
            color: #fff;
            background: #48A7FF;
            border-radius: 10px;
            border: none;   
        }
        .title-paragraph{
            font-weight: 700;
            font-size: 16px;
        }
    }
    .text-div{
        flex:1;
    }
    input{
        background: #F2F2F2;
        border-radius: 10px;
        width: 200px;
        height: 35px;
        border: none;
        margin-top: 5px;
    }

    .NavEditResultsDiv{
        flex:1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
    
        button{
            display: inline;
            width: 40px;
            height: 35px;
            background: #48A7FF;
            border-radius: 10px;
        }
        span{ 
            display: flex;
            width: 30px;
            height: 30px;
            background: #F2F2F2;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
        }
    }
`