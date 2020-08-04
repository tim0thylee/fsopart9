interface TrainingObject{ 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const exerciseData = [3, 0, 2, 4.5, 0, 3, 1]

const calculateExercises = (exercise: Array<number>, target: number) : TrainingObject => {
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
    }, 0)
    const average = sumOfTraining / periodLength;
    if (average < target - 1) {
        ratingDescription = 'Must try harder';
    } else if (average >= target - 1 && average < target) {
        rating = 2;
        ratingDescription = 'Almost there, but need to do better';
    } else {
        rating = 3;
        success = true;
        ratingDescription = 'Congrats! you did it!'
    }
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

console.log(calculateExercises(exerciseData, 2))