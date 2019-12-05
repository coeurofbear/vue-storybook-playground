import { storiesOf } from '@storybook/vue'
import GTable from './GTable'

var items = [
  [ 'Yair Lamb', 'yair.lamb@email.com' ],
  [ 'Leonardo Payne', 'leonardo.payne@email.com' ],
  [ 'Carl Henson', 'carl.henson@email.com' ],
  [ 'Jensen Combs', 'jensen.combs@email.com' ],
  [ 'Amiah Burton', 'amiah.burton@email.com' ],
  [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com' ],
  [ 'Kamren Huffman', 'kamren.huffman@email.com' ]
]

storiesOf('GTable', module)
  .add('with 7 items', () => ({
    components: { GTable },
    template:
    `
      <GTable
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))
