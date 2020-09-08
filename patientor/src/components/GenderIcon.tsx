import React from 'react';
import { Icon } from 'semantic-ui-react';

type BarProps = {
    gender: string;
};

const GenderIcon = ({gender}: BarProps) => {
    const genderChoice = (choice: string) => {
        if (choice === 'male') {
            return 'mars';
        } else if (choice === 'female') {
            return 'venus';
        } else {
            return 'transgender alternate';
        }
    };
    return <Icon name={genderChoice(gender)}/>;
};

export default GenderIcon;