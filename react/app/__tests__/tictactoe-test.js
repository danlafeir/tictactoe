import test from 'ava'
import TicTacToe from '../tictactoe'
import Gameboard from '../gameboard'
import React from 'react'

import { shallow } from 'enzyme'

test('app contains a gameboard', t => {
  const tictactoe = shallow(<TicTacToe/>)
  t.true(tictactoe.contains(Gameboard))
})

test('app contains a header', t => {
  const tictactoe = shallow(<TicTacToe/>)
  t.truthy(tictactoe.find('h1'))
})