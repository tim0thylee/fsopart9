import React from 'react'
import Part from './Part'

interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

interface CoursePartBaseDescription extends CoursePartBase {
    description: string;
}

interface CoursePartOne extends CoursePartBaseDescription  {
    name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBaseDescription  {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartBaseDescription {
    name: "Hello fellow kids";
    motto: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

interface ContentProps {
    content: CoursePart [];
}

const Content: React.FC<ContentProps> = ({content}) => {
    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };

    return <>{content.map(part => {
        switch(part.name) {
            case "Fundamentals":
                return <Part key={part.name} part={part}/>
            case "Using props to pass data":
                return <Part key={part.name} part={part}/>
            case "Deeper type usage":
                return <Part key={part.name} part={part}/>
            case "Hello fellow kids":
                return <Part key={part.name} part={part}/>
            default:
                return assertNever(part);
        }
    })}</>
}

export default Content