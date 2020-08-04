type Result = string;

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
  
console.log(calculateBmi(180, 74))