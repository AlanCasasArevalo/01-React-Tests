import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";

describe('Pruebas 08-imp-exp', () => {
    test('getHeroeById should be a functions', () => {
        expect(typeof getHeroeById).toBe('function')
    })
    test('getHeroesByOwner should be a functions', () => {
        expect(typeof getHeroesByOwner).toBe('function')
    })
    test('getHeroeById should return some defined', () => {
        const hero = getHeroeById(0)
        expect(hero).toBeDefined()
    })

    test('getHeroeById should return undefined if id is wrong', () => {
        const hero = getHeroeById(10)
        expect(hero).toBeUndefined()
    })

    test('getHeroesByOwner should return undefined if owner is wrong', () => {
        const heroes = getHeroesByOwner('10')
        expect(Array.isArray(heroes)).toBeTruthy()
        expect(heroes.length).toBe(0)
    })
    test('getHeroesByOwner should return some defined', () => {
        const heroes = getHeroesByOwner('DC')
        expect(heroes).toBeDefined()
    })
    test('getHeroeById should return object', () => {
        const hero = getHeroeById(0)
        expect(typeof hero).toBe('object')
    })
    test('getHeroesByOwner should return array', () => {
        const heroes = getHeroesByOwner('DC')
        expect(Array.isArray(heroes)).toBeTruthy()
    })
    test('getHeroeById should return specific hero', () => {
        const heroTest = {
            id: 0,
            name: 'Eye Halcón',
            owner: 'Marvel'
        }
        const hero = getHeroeById(0)
        expect(hero).toStrictEqual(heroTest)
    })
    test('getHeroesByOwner should return specific kind heroes', () => {
        const heroesTest = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },{
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },{
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]
        const heroes = getHeroesByOwner('DC')
        expect(heroes).toStrictEqual(heroesTest)
    })
})