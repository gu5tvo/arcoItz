import React from "react"
import { ExperienceStyle } from "./style"

export default function Experience(): JSX.Element {

    

    return (
    <>  
        <ExperienceStyle>          
            <input type="text"  placeholder='Título'/>
            <textarea placeholder="Descrição" className="description"></textarea>
        </ExperienceStyle>

    </>)
}