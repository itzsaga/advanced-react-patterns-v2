import React from 'react'
import {renderToggle, Simulate} from '../../test/utils'
import Usage from '../exercises-final/07'
// import Usage from '../exercises/07'

test('renders a toggle component', () => {
  const handleToggle = jest.fn()
  const {toggleButton, toggle} = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

test('can reset the state of the toggle', () => {
  const handleReset = jest.fn()
  const {toggleButton, toggle, getByText} = renderToggle(
    <Usage onToggle={() => {}} onReset={handleReset} />,
  )
  toggle()
  Simulate.click(getByText('Reset'))
  expect(toggleButton).toBeOff()
  expect(handleReset).toHaveBeenCalledTimes(1)
  expect(handleReset).toHaveBeenCalledWith(false)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react%20patterns&e=07&em=seth.alexander@pm.me
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
