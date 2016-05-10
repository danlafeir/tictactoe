import test from 'ava'
import Gameboard from '../gameboard'
import Square from '../square'
import React from 'react'

import { shallow } from 'enzyme'

test('square initially has nothing in it', t => {
  const gameboard = shallow(<Gameboard />)
  t.is(gameboard.find(Square).length, 9)
})