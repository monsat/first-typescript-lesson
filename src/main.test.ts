import { greet } from './main'

describe('greet', () => {
  test('is greeting', () => {
    expect(greet('たなかこうじ')).toBe('Hello たなかこうじ san!')
  })
})
