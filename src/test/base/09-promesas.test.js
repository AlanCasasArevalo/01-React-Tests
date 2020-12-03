import {getHeroeByIdAsync} from "../../base/09-promesas";

describe('Pruebas 09-promesas.test', () => {
    test('getHeroeByIdAsync should be a functions', () => {
        expect(typeof getHeroeByIdAsync).toBe('function')
    })
    test('getHeroeByIdAsync should return an object', (done) => {
        const id = 0
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(typeof hero).toBe('object')
                done()

            })
    })
    test('getHeroeByIdAsync should return undefined if id is wrong', (done) => {
        const id = 10
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(typeof error).toBe('string')
                done()
            })
    })
    test('getHeroeByIdAsync should return undefined if id is wrong', (done) => {
        const id = 10
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    })
    test('getHeroeByIdAsync should return an async object', ( done ) => {
        const heroTest = {
            id: 0,
            name: 'Eye Halcón',
            owner: 'Marvel'
        }
        const id = 0
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toStrictEqual(heroTest)
                done()
            })
    })
})