function fetchUserById(userId: string) {
    const query = `SELECT * FROM users WHERE id = '${userId}'`; // Concatenación directa de entrada de usuario en consulta SQL
    executeQuery(query);
}

function executeQuery(query: string) {
    console.log(`Ejecutando consulta: ${query}`);
    // Aquí normalmente se ejecutaría la consulta en una base de datos, pero en este ejemplo simplemente se muestra en consola
}

export {};