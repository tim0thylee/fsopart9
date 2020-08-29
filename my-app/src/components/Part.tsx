import React from 'react'

const Part: React.FC<any> = ({part}) => {
    return <div>
                {part.name} 
                {part.description} 
                {part.exerciseCount} 
                {part.groupProjectCount}
                {part.exerciseSubmissionLink}
            </div>
}

export default Part;