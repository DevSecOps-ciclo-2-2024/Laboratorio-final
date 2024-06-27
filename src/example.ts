// Ejemplo de uso inseguro de setTimeout con eval
function executeCodeAfterDelay(code: string, delay: number) {
    setTimeout(() => {
        eval(code); // Uso de eval dentro de setTimeout
    }, delay);
}

export {}