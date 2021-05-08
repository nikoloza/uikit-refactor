'use strict'

import { Shape, Img, Icon } from '../'

import { UserBundle } from '../User'

import { styleParentMode } from './style'

export const parentMode = {
  proto: Shape,
  round: 10,
  theme: 'purple',
  style: styleParentMode,
  icon: {
    proto: Icon,
    name: 'checkMedium'
  },
  h2: 'Welcome to parent Mode',
  description: {
    proto: UserBundle,
    users: { ...[{}, {}, {}] },
    span: 'You’ll now be able to chat with tutor privately. No other participants will see the messages.'
  }
}
