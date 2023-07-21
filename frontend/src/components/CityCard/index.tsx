import { CityCardContainer } from "./style";
import React from 'react'
import { TrashIcon } from '../Icons'

interface CityCardProps {
    cityName: string;
    onDelete: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function CityCard({ cityName, onDelete }: CityCardProps) {

    return (
        <CityCardContainer>
            {/* it's backwards to properly apply style using the general sibling selector in css */}
            {/* the positions are reversed using the order property */}
            <span onClick={onDelete}>
                <TrashIcon className="trash-icon"/>
            </span>
            

            <p className="ts">{cityName}</p>
        </CityCardContainer>
    )
}