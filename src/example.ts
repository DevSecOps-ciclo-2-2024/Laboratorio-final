// Ejemplo de código vulnerable a buffer overflow en TypeScript
function copyData(source: string) {
    const dest: string[] = new Array(10);
    for (let i = 0; i < source.length; i++) {
        dest[i] = source[i];
    }
}
