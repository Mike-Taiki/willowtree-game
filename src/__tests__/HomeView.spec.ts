import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/vue'
import HomeView from '@/modules/home/pages/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const { getByText } = render(HomeView)
    expect(getByText('Hello Vitest')).toBeInTheDocument()
  })
})
