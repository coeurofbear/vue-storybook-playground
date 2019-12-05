import { storiesOf } from '@storybook/vue'
import GTableRow from './GTableRow'

storiesOf('GTableRow', module)
  .add('normal', () => ({
    components: { GTableRow },
    template:
    `
      <GTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))
