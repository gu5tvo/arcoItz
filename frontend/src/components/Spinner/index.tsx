/* eslint-disable react/react-in-jsx-scope */
import { SpinnerContainer } from "./style"

import spinnerImg from '../../assets/spinner.png'

export default function Spinner() {
    return (
        <SpinnerContainer>
            <img src={spinnerImg}/>
        </SpinnerContainer>
    )
}