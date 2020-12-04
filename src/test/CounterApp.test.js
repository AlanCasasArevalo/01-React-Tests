import {shallow} from "enzyme";
import React from "react";
import CounterApp from "../CounterApp";

describe('CounterApp Component test', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('CounterApp should be defined', () => {
        expect(<CounterApp />).toBeDefined()
    })
    test('CounterApp should be an object', () => {
        expect(typeof <CounterApp />).toBe('object')
    })

    test('CounterApp should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('CounterApp should return correct value by props', () => {
        const value = 101
        const wrapper = shallow(
            <CounterApp
                value={value}
            />)
        const valueInComponent = wrapper.find('h2').text().trim()
        expect(`${value}`).toBe(valueInComponent)
    })
    test('CounterApp should increment value +1', () => {
        wrapper.find('button').at(0).simulate('click')
        let counterText = wrapper.find('h2').text().trim()
        expect(counterText).toStrictEqual('11')
    })

    test('CounterApp should reset value to 10', () => {
        wrapper.find('button').at(0).simulate('click')
        let counterText = wrapper.find('h2').text().trim()
        expect(counterText).toStrictEqual('11')

        wrapper.find('button').at(1).simulate('click')
        counterText = wrapper.find('h2').text().trim()
        expect(counterText).toStrictEqual('10')
    })

    test('CounterApp should substract value -1', () => {
        wrapper.find('button').at(2).simulate('click')
        let counterText = wrapper.find('h2').text().trim()
        expect(counterText).toStrictEqual('9')
    })
})
