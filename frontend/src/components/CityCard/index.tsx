import { CityCardContainer } from "./style";
import { RestFilled } from "@ant-design/icons";
import React from 'react'

interface CityCardProps {
    cityName: string;
    onDelete: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function CityCard({ cityName, onDelete }: CityCardProps) {

    return (
        <CityCardContainer>
            {/* it's backwards to properly apply style using the general sibling selector in css */}
            {/* the positions are reversed using the order property */}
            <RestFilled onClick={onDelete} className='trash-icon' />
            <p className="ts">{cityName}</p>
        </CityCardContainer>
    )
}