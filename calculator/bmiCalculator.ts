type Result = string;

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

const calculateBmi = (height: number, weight: number) : Result => {
    const meters = height / 100
    const bmi = weight / (meters * meters)
    if (bmi < 18.5) {
      return 'Under (unhealthy weight)'
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal (healthy weight)'
    } else {
      return 'Over (unhealthy weight)'
    }
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
  
