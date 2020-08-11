interface Result {
  weight: number,
  height: number, 
  bmi: string
};

interface MultiplyValues {
  value1: number,
  value2: number,
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

export const calculateBmi = (height: number, weight: number) : Result => {
    const meters = height / 100
    const bmi = weight / (meters * meters)
    let text = ''
    if (bmi < 18.5) {
      text =  'Under (unhealthy weight)'
    } else if (bmi >= 18.5 && bmi < 25) {
      text =  'Normal (healthy weight)'
    } else {
      text = 'Over (unhealthy weight)'
    }
    return {
      weight,
      height,
      bmi: text
    }
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
  
