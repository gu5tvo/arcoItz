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
               </select>

                <input type="text" placeholder='Instituição'/>
                 <select name="" id="">
                      <option value="">Situação</option>
                 </select>
            </div>
            

            <textarea placeholder="Descrição" className="description"></textarea>
        </GraduationStyle>
            
    </>)
}