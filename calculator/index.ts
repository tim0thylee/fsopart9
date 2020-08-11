import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator'
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack');
});

app.get('/bmi', (req, res) => {
  const heightNumber = Number(req.query.height);
  const weightNumber = Number(req.query.weight);
  if (!isNaN(heightNumber) && !isNaN(weightNumber)) {
    const {weight, height, bmi} = calculateBmi(heightNumber, weightNumber);
    res.json({
      weight,
      height,
      bmi
    });
  } else {
    res.send({error: "malformatted parameters"});
  }
});

app.post('/exercise', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const daily_exercises = req.body.daily_exercises;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const target : number = req.body.target;

  if (!daily_exercises || !target) {
    return res.status(400).json({error: 'parameters missing'});
  }

  if(isNaN(target) || !Array.isArray(daily_exercises)) {
    return res.status(400).json({error: 'malformatted parameters'});
  }

  const {periodLength, trainingDays, success, rating, ratingDescription, average} = calculateExercises(daily_exercises, target);
  return res.send({
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});