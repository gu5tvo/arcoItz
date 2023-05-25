import {EditResultsDiv} from './style'

export function EditResults(){
    return(
        <EditResultsDiv>
        <div className='text-div'>
            <p className='title-paragraph'>Editar Resultados</p>
        </div>
        <div>
            <p>Perfís por página:</p>
            <input type="text" />
        </div>
        <div>
            <p>Cidade:</p>
            <input type="text" />
        </div>
        <div>
            <button>Aplicar filtros</button>
        </div>
        <div className='text-div'>
            <p>Navegar entre páginas:</p>
        </div>
        <div className='NavEditResultsDiv'>
            <button>  </button>
            <span> 1 </span>
            <button>  </button>
        </div>
        </EditResultsDiv>
    )
}
