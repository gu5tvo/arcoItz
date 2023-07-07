//DocumentComponent.tsx
import React from "react";
import { DocumentComponentStyle } from "./style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";


export default function DocumentComponent(){
    return(
    <>
        <DocumentComponentStyle>
            <div className="document-name">
                NomeDoArquivo.pdf{/* should be file.name*/}
            </div>
            <div className="description-div">

                <textarea name="" id="" placeholder="Descrição"></textarea>
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