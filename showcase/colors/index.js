'use strict'

import { Theme } from '@rackai/scratch'

var colors = {
  style: { display: 'flex', flexWrap: 'wrap', border: '1px solid red' },
  class: {},
  childProto: {
    style: { padding: '16 26', marginRight: 26, marginBottom: 26, border: '1px solid black' },
    class: { theme: element => Theme[element.theme] },
    define: { theme: param => param || '' },
    text: element => element.key
  }
}

for (let t in Theme) {
  colors[t] = { theme: t }
}

export default colors
