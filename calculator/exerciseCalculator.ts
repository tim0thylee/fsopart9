export interface TrainingObject{ 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const parsedArray = (args: Array<string>): Array<number> => {
    if (args.length < 4) throw new Error('Not enough arguments');
    const parsedNumbers = [];
    for (let i = 2; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('Provided values were not numbers!');
        } else {
            parsedNumbers.push(Number(args[i]));
        }
    }
    return parsedNumbers;
};

export const calculateExercises = (exercise: Array<number>, target: number) : TrainingObject => {
    let trainingDays = 0;
    let success = false;
    let rating = 1;
    let ratingDescription = '';
    const periodLength = exercise.length;
    const sumOfTraining = exercise.reduce((acc : number, currentValue : number) => {
        if (currentValue > 0) {
            trainingDays++;
        }
        return acc + currentValue;
    }, 0);
    const average = sumOfTraining / periodLength;
    if (average < target - 1) {
        ratingDescription = 'Must try harder';
    } else if (average >= target - 1 && average < target) {
        rating = 2;
        ratingDescription = 'Almost there, but need to do better';
    } else {
        rating = 3;
        success = true;
        ratingDescription = 'Congrats! you did it!';
    }
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};
try {
    const userEntries = parsedArray(process.argv);
    const target = userEntries[0];
    const exerciseData = userEntries.slice(1);
    console.log(calculateExercises(exerciseData, target));
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}

