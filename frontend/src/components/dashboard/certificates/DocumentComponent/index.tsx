//DocumentComponent.tsx
import React from "react";
import { DocumentComponentStyle } from "./style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";


export default function DocumentComponent( { name , description}){
    return(
    <>
        <DocumentComponentStyle>
            <div className="document-name">
                {name}
            </div>
            <div className="description-div">

                <textarea name="" id="" placeholder="Descrição" defaultValue={(description === "..." ? "" : description)}/> 

                <button className="salve-button">Salvar</button>

                <button >
                 <img
                   src={removeIconFormation}
                   alt="Remove Icon Formation"
                   className="remove"
                 />
                </button>

            </div>

        </DocumentComponentStyle>
        
    </>
    )
}