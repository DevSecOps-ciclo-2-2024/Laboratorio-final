function unsafeEval(userInput: string) {
    eval(userInput); // Esto es inseguro y podría permitir la ejecución de código arbitrario
  }
  
export default unsafeEval;