import {retornaArreglo} from "../../base/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {
    test('retornaArreglo should be a functions', () => {
        expect(typeof retornaArreglo).toBe('function')
    })
    test('retornaArreglo should return some defined', () => {
        const arr = retornaArreglo()
        expect(arr).toBeDefined()
    })

    test('retornaArreglo should return specific array', () => {
        const arrayTest = ['ABC', 123]
        const arr = retornaArreglo()
        expect(arr).toStrictEqual(arrayTest)
    })

    test('retornaArreglo should return specific array', () => {
        const [characters, numbers ] = retornaArreglo()

        expect(typeof characters).toBe('string')
        expect(characters).toStrictEqual('ABC')

        expect(typeof numbers).toBe('number')
        expect(numbers).toStrictEqual(123)
    })
})