import {getSaludo} from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo should be defined', () => {
        const name = 'Alan'
        const greeting = getSaludo(name)
        expect(greeting).toBeDefined()
    })
    test('getSaludo should be a functions', () => {
        expect(typeof getSaludo).toBe('function')
    })
    test('getSaludo should return Hola nameToGreeting', () => {
        const name = 'Alan'
        const greeting = getSaludo(name)
        expect(greeting).toBe('Hola Alan')
    })
    test('getSaludo should return Hola Pepe if you do not sent any arguments', () => {
        const greeting = getSaludo()
        expect(greeting).toBe('Hola Pepe')
    })
})