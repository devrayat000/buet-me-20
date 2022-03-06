import React from 'react'

export const Button: React.FC<ButtonProps> = ({ count, title }) => {
    if (!count) {
        return <span>{title}</span>
    }
    return (
        <div>
            <div className="mb-1">{title}</div>
            <div className="text-xs">{count} {title} this week</div>
        </div>
    )
}

export interface ButtonProps {
    title: string
    count?: number
    children?: never
}

