'use strict'

import { Shape, Block, IconText, Direction } from '../'

import style from './style'

export const Button = {
  proto: [Shape, Block, IconText, Direction],
  tag: 'button',
  style,
  props: {
    type: 'button'
  },
  attr: {
    type: ({ props }) => props.type
  }
}

export const SquareButton = {
  proto: Button,
  props: {
    size: 'A',
    padding: 'X1'
  },
  class: {
    squareButton: {
      justifyContent: 'center',
      boxSizing: 'content-box'
    }
  }
}

export const CircleButton = {
  proto: SquareButton,
  style: { borderRadius: '100%' }
}

export const KangorooButton = {
  tag: 'button',
  proto: [Shape, Direction, Block],
  style,

  iconText: {
    proto: IconText
  },

  child: {
    proto: [Shape, Block, IconText]
  }
}

export default Button
