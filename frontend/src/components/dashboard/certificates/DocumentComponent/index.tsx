import React from "react";
import { DocumentComponentStyle } from "./style";

export default function DocumentComponent(){
    return(
    <>
        <DocumentComponentStyle>
            <div className="document-name">
                NomeDoArquivo.pdf
            </div>
            <div className="description-div">
                <textarea name="" id="" placeholder="Descrição"></textarea>
                <button>Salvar</button>
            </div>
        </DocumentComponentStyle>
    </>
    )
}