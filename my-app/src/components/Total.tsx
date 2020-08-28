import React from 'react'


interface Content {
    name: string;
    exerciseCount: number;
}

interface ContentProps {
    content: Content [];
}


const Total: React.FC<ContentProps> = ({content}) => {
    return <p>Number of exercises{" "} {content.reduce((carry, part) => carry + part.exerciseCount, 0)}</p>
}

export default Total;