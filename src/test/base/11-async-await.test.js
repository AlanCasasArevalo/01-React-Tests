import {getImagen} from "../../base/11-async-await";

describe('PRUEBA 11-async-await.test', () => {
    test('getImagen should be a functions', () => {
        expect(typeof getImagen).toBe('function')
    })
    test('getImagen should return a defined', async () => {
        const url = await getImagen()
        expect(typeof url).toBeDefined()
    })
    test('getImagen should return a string', async () => {
        const url = await getImagen()
        expect(typeof url).toBe('string')
    })
    test('getImagen should return a string with https', async () => {
        const url = await getImagen()
        expect(url.includes('https://')).toBeTruthy()
    })
})