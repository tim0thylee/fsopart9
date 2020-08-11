import express from 'express'
import { calculateBmi } from './bmiCalculator'
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack');
});

app.get('/bmi', (req, res) => {
  const heightNumber = Number(req.query.height)
  const weightNumber = Number(req.query.weight)
  if (!isNaN(heightNumber) && !isNaN(weightNumber)) {
    
    const {weight, height, bmi} = calculateBmi(heightNumber, weightNumber)
    res.json({
      weight,
      height,
      bmi
    })
  } else {
    res.send({error: "malformatted parameters"})
  }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});