import React, { FC } from 'react'
import styled from 'styled-components';

const StyledLi = styled('li')`
    & {
        list-style-type: none;
    }

    &:not(:last-child) { 
        margin-bottom: 4px;  
     }
`

const StyledLabel = styled('label')`
    & {
        display: flex;
        align-items: center;
        gap: 12px;
    }
`

export interface IItem {
    title: string
    completed: boolean
}

export const Item: FC<IItem> = ({ title, completed }): JSX.Element => {
    return (
        <StyledLi>
            <StyledLabel>
                <input type='checkbox' checked={completed} />
                {title}
            </StyledLabel>
        </StyledLi>
    )
}
