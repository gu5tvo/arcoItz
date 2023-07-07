import styled from 'styled-components';

export const SearchContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: min(3rem, 20vh) min(2rem, 5vw);
    gap: min(20vh, 3rem);
    
    font-size: min(1rem, 3vw, 1.4rem) !important;

    .aoba:hover + .epa {
        background-color: red;
    }

    .epa:hover + .aoba {
        background-color: yellow;
    }

    div, main, section, aside, article {
        font-size: min(1rem, 3vw, 1.4rem) !important;
    }

    &, * {
        box-sizing: border-box;
    }

    h1 {
        font-size: 1.3em;
        font-weight: bold;
    }

    main {
        display: grid;
        grid-template-columns: 1fr 350px;
        width: min(80%, 1400px);
        gap: min(30px, 10vw);
        font-size: 1em;
        justify-content: center;
        align-items: flex-start;

        @media (max-width: 799px) {
            display: flex;
            flex-direction: column;

            aside {
                width: 100%;
            }

            section { 
                order: 2;
                width: 100%;
            }
        }
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .search {
            background-color: #f2f2f2;
            width: 100%;
            display: grid;
            grid-template-columns: auto 1fr auto;
            justify-content: space-between;
            gap: 10px;
            align-items: center;
            padding: min(20px, 3vw);
            border: 1px solid black;
            border-radius: min(30px, 8vw);

            p {
                font-weight: bold;
                text-align: center;
            }

            input {
                width: 100%;
                padding: min(15px, 5vw);
                border-radius: min(15px, 5vw);
                border: 1px solid black;
                font-size: 1em;
            }

            button {
                font-size: 0.9em;
                all: unset;
                margin-left: 10px;
                padding: 5px;
                border: 1px solid#719FEF;
                color:#719FEF;
                padding: min(10px, 2vw);
                font-weight: bold;
                border-radius: min(10px, 2.5vw);
                transition: 0.15s linear;
                cursor: pointer;
                text-align: center;

                &:hover {
                    background-color:  #2812F3;
                    border-color: white;
                    color: white;
                }
            }

            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
                font-size: 1.1em
            }
        }
    }

    aside {
        h2 {
            align-self: flex-start;
            font-size: 1.1em;
            font-weight: bold;
        }

        display: flex;
        flex-direction: column;
        gap: min(20px, 5vh);
        border: 1px solid gray;
        justify-content: space-evenly;
        padding: min(40px, 8vw);
        border-radius: min(30px, 6vw);
        background-color: #f2f2f2;

        span {
            display: flex;
            flex-direction: column;
            gap: min(7px, 1.5vh);

            input {
                outline: none;
                padding: min(8px, 1.5vw);
                border: none;
                color: hsl(0, 0%, 20%);
                background-color: #f9f9f9;
                border-radius: min(5px, 1vw);
                margin: 0;
                border: 1px solid gray;
                font-size: 1.1em;
            }
        }


        button {
            background: none;
            text-align: center;
            width: 100%;
            background-color:#719FEF;
            color: white;
            padding: min(15px, 2.5vw);
            transition: 0.15s linear;
            border: none;
            border-radius: min(10px, 2vw);
            font-size: 1;
            font-weight: bold;
            &:hover {
                background-color:  #2812F3;
                border-color: white;
                color: white;
            }
        }

        nav {
            display: flex;
            gap: min(10px, 2vw);
            justify-content: center;
            button {
                width: auto;
                padding: min(8px, 1.5vw);
                border-radius: min(5px, 1vw);
            }

            input {
                width: 20%;
                padding: min(5px, 5%);
            }
        }
    }
    
    .cv-card {
        display: grid;
        grid-template-columns: min(10vw, 80px) 1fr;
        border: 1px solid gray;
        gap: min(15px, 3vw);
        padding: min(20px, 5vw);
        border-radius: min(25px, 7vw);
        background-color: #f2f2f2;

        &:hover {
            scale: 1.05;
            cursor: pointer;
        }
        span {
            display: flex;
            gap: min(15px, 4vw);
            font-size: 1em;
            align-items: center;
            h2 {
                text-align: center;
                font-size: 1.3em;
                font-weight: bold;
                white-space: nowrap;
            }
        }

        img {
            aspect-ratio: 1;
            width: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            align-self: center;
        }

        .basic-infos {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: min(6px, 1vh);
            h2 {
                font-size: 1em;
            }

            span p {
                font-size: 0.7em;
            }
            p {
                font-size: 0.8em;
            }
        }

        .cta {
            justify-self: end;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: min(15px, 2vh);
            transition: 0.15s;

            .eye-icon {
                fill: cyan;
                width: min(30px, 6vw);
                height: min(30px, 6vw);
            }

            p {
                font-size: 0.8em;
                font-weight: bold;
            }

            button {
                background: none;
                border: none;
                border: 1px solid cyan;
                padding: min(6px, 1.5vw) min(12px, 3vw);
                border-radius: min(15px, 5vw);
                font-size: 2em;
                color: cyan;
                transition: 0.15s linear;
                display: flex;
                align-items: center;

                &:hover {
                    filter: invert(1);

                    .eye-icon {
                        fill: invert(1);
                    }
                }

                img {
                    width: min(30px, 4vw);
                    aspect-ratio: 1;
                }
            }
        }
    }
`