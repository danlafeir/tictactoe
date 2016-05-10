import test from 'ava'
import Square from '../square'
import React from 'react'

import { shallow } from 'enzyme'

test('square initially has nothing in it', t => {
  const square = shallow(<Square/>)
  t.is(square.text(),'')
})

test('square inserts a symbol onClick', t => {
  const square = shallow(<Square/>)
  square.find('div').simulate('click')
  t.is(square.text(),'O')
})