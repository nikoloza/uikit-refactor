'use strict'

import { reactTransformer } from '@symbo.ls/react-transformer'
import { GridLayout as component } from '@symbo.ls/grid-layouts'

export const GridLayout = (props, state) => {
  return reactTransformer(component, props, state)
}
