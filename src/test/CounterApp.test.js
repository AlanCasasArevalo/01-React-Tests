import {shallow} from "enzyme";
import React from "react";
import CounterApp from "../CounterApp";

describe('CounterApp Component test', () => {
    test('CounterApp should be defined', () => {
        expect(<CounterApp />).toBeDefined()
    })
    test('CounterApp should be an object', () => {
        expect(typeof <CounterApp />).toBe('object')
    })

    test('CounterApp should return a snapshot', () => {
        const wrapper = shallow(<CounterApp />)
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
})
