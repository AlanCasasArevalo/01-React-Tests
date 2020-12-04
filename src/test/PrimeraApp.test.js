import React from 'react';
import '@testing-library/jest-dom'
import '@testing-library/react'
import '@testing-library/user-event'
import {shallow} from "enzyme";
/************************************  Terceros  ************************************/
import PrimeraApp from "../PrimeraApp";

/*
Esta es una manera de poder hacer las pruebas de manera nativa, se recomienda realizarlo con la libreria de terceros enzymejs
Se recomienda realizarlas pruebas con esa libreria debido a que es mucho menos complejo que de esta manera nativa
https://enzymejs.github.io/enzyme/
import {render} from "@testing-library/react";
describe('PrimeraApp Component test', () => {
    test('PrimeraApp should return "Hola, soy Alan"', () => {
        const greeting = "Hola, soy Alan"
        const { getByText } = render(<PrimeraApp saludo={greeting}/>)
        expect(getByText(greeting)).toBeInTheDocument()
    })
})
*/

describe('PrimeraApp Component test', () => {
    test('PrimeraApp should return correct values', () => {
        const greeting = 'Hola, soy Alan'
        const wrapper = shallow(<PrimeraApp saludo={greeting}/>)

        expect(wrapper).toMatchSnapshot()
    })
    test('PrimeraApp should return subtitle by props', () => {
        const greeting = 'Hola, soy Alan'
        const subtitle = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp
                saludo={greeting}
                subtitulo={subtitle}
            />)

        const parrafo = wrapper.find('p').text(subtitle)
        expect(parrafo).toBe(subtitle)
        expect(parrafo).toStrictEqual(subtitle)
    })
})
