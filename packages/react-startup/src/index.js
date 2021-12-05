'use strict'

import '@domql/emotion'
import { set } from '@symbo.ls/scratch'

import CONFIG_DEFAULT from '@symbo.ls/config-default'
import { loadModule } from './require'

const SYMBOLSRC_FILE = process.cwd() + '/.symbolsrc.json'
loadModule(SYMBOLSRC_FILE)

const activeConfig = SYMBOLSRC_FILE || CONFIG_DEFAULT
set(activeConfig)

export default activeConfig

export * from '@symbo.ls/scratch'
