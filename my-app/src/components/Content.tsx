import React from 'react'

interface Content {
    name: string;
    exerciseCount: number;
}

interface ContentProps {
    content: Content [];
}

const Content: React.FC<ContentProps> = ({content}) => {
    return <>{content.map(c => <p key={c.name}>{c.name} {c.exerciseCount}</p>)}</>
}

export default Content