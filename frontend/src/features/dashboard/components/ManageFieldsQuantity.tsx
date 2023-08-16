import React from 'react'
import { FieldsManagerArea, ActionButton, AddIcon, RemoveIcon, ActionDescription } from '../style/manager'

interface Props {
    decrementQuantity: ()=> void,
    incrementQuantity: ()=> void,
    type: 'experiência' | 'formação'
}

export default function ManageFieldsQuantity({ decrementQuantity, incrementQuantity, type }: Props) {

    return (
        <FieldsManagerArea>
            <ActionButton onClick={incrementQuantity}>
                <AddIcon/>
                <ActionDescription>Adicionar {type}</ActionDescription>
            </ActionButton>

            <ActionButton $isRemoveBtn onClick={decrementQuantity}>
                <ActionDescription>Remover {type}</ActionDescription>
                <RemoveIcon/>
            </ActionButton>
      </FieldsManagerArea>
    )
}