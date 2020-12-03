import {getUser, getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser should be a functions', () => {
        expect(typeof getUser).toBe('function')
    })
    test('getUser should return some defined', () => {
        const user = getUser()
        expect(user).toBeDefined()
    })
    test('getUser should return an object', () => {
        const user = getUser()
        expect(typeof user).toBe('object')
    })
    test('getUser should return a specific object with toEqual', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        expect(user).toEqual(userTest)
    })

    test('getUser should return a specific object with toStrictEqual', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        expect(user).toStrictEqual(userTest)
    })
    test('getUsuarioActivo should be a functions', () => {
        expect(typeof getUsuarioActivo).toBe('function')
    })
    test('getUsuarioActivo should return some defined', () => {
        const user = getUsuarioActivo('Alan')
        expect(user).toBeDefined()
    })
    test('getUsuarioActivo should return an object', () => {
        const user = getUsuarioActivo('Alan')
        expect(typeof user).toBe('object')
    })
    test('getUsuarioActivo should return a specific object with toStrictEqual', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Alan'
        }

        const user = getUsuarioActivo('Alan')
        expect(user).toStrictEqual(userTest)
    })
})