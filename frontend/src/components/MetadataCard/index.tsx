import { MetadataCardContainer } from "./style";
import React from 'react'
import { TrashIcon } from '../Icons'

interface MetadataCardProps {
    MetadataName: string;
    onDelete: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function MetadataCard({ MetadataName, onDelete }: MetadataCardProps) {

    return (
        <MetadataCardContainer>
            <span onClick={onDelete}>
                <TrashIcon className="trash-icon"/>
            </span>
            <p className="ts">{MetadataName}</p>
        </MetadataCardContainer>
    )
}