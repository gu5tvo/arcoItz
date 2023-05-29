import {EditResultsDiv} from './style'
import leftArrowIcon from '../../../assets/images/leftArrow.png'
import rightArrowIcon from '../../../assets/images/rightArrow.png'

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
            <button><img src={leftArrowIcon} alt="" /></button>
            <span> 1 </span>
            <button><img src={rightArrowIcon} alt="" /></button>
        </div>
        </EditResultsDiv>
    )
}
