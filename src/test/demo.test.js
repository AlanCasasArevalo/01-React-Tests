describe('Prueba en el archivo demo.test', () => {
    test('Deben ser iguales los 2 strings', () => {
        // 1- Inicializacion
        const message = 'Hello world'

        // 2- Estimulo
        const second_message = `Hello world`

        // 3- Observar el comportamiento
        expect(message).toBe(second_message)
    })
})