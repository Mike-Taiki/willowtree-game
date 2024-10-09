import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/vue'
import HelloWorld from '@/modules/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const { getByText } = render(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(getByText('Hello Vitest')).toBeInTheDocument()
  })
})
