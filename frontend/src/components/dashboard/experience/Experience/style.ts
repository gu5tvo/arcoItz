import styled from "styled-components";

export const ExperienceStyle = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: min(20px, 8vh);
    align-items: center;
    margin-bottom: min(30px, 15vh);
    
    .inner-div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;

        input, select, .input {
            box-sizing: border-box;
            background-color: #9AE7F8;
            color: #001C22;
            border: none;
            border-radius: 1rem;
            transition: 0.4s;
            padding: min(10px, 4vw);
            flex: 1;
            min-width: 240px;

            &:focus{
                outline: none;
                background-color: #40C4E0;
            }
        }

        .input {
            width: 100%;
        }
        span {
            flex: 1;
            min-width: 240px;
        }

        .lock {
            pointer-events: none;
        }
    }



    .description{
        box-sizing: border-box;
        background-color: #00B4D8;
        color: #C5EFF8;
        width: 99%;
        height: 7.5rem;
        border: none;
        border-radius: 1rem;
        padding: min(2rem, 10vw);
        transition: 0.4s;

        &:focus{
            background-color: #0087A3;
            outline: none;
        }
    }

    .button-area {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: min(20px, 4vw);
        flex-wrap: wrap;

        button:nth-child(2) {
            background-color: red;
        }
    }

    button {
        all: unset;
        background-color: #00B4D8;
        transition: 0.2s linear;
        padding: min(10px, 3vw);
        border-radius: min(20px, 4vw);
        text-align: center;
        color: #fff;
        font-size: clamp(0.8rem, 2vw, 1rem);
        font-weight: bold;
        cursor: pointer;
        min-width: min(200px, 90vw);
        &:hover {
            filter: invert(1)
        }
    }
`;
