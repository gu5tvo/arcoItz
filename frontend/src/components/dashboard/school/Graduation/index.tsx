import React from "react"
import { GraduationStyle } from "./style"

export default function Graduation(): JSX.Element {

    return (
    <>  
  
        <GraduationStyle>
   
            
            <div className="inner-div">
              <input type="text"  placeholder='Curso'/>
               <select name="" id="">
                    <option value="">Tipo</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Tecnólogo">Tecnólogo</option>
                    <option value="Licenciatura">Licenciatura</option>
                    <option value="Bacharelado">Bacharelado</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    <option value="Especialização ou MBA">Especialização ou MBA</option>
                    <option value="Outro">Outro</option>

               </select>

                <input type="text" placeholder='Instituição'/>
                 <select name="" id="">
                      <option value="">Situação</option>
                      <option value="Concluído">Concluído</option>
                      <option value="Andamento">Andamento</option>
                      <option value="Interrompido">Interrompido</option>
                      <option value="Outra">Outra</option>
                 </select>
            </div>
            

            <textarea placeholder="Descrição" className="description"></textarea>
        </GraduationStyle>

    </>)
}