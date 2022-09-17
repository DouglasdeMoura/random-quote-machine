import TwentyFivePlusFiveClock from '.'
import { render, screen } from '../../utils/test-utils'

async function repeat(fn: () => Promise<void>, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    await fn()
  }
}

describe('<TwentyFivePlusFiveClock />', () => {
  test('I can see an element with id="break-label" that contains a string (e.g. "Break Length")', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('Break Length')).toHaveAttribute(
      'id',
      'break-label',
    )
  })

  test('I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement"', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByTestId('break-decrement')).toHaveAttribute(
      'id',
      'break-decrement',
    )

    expect(screen.getByTestId('session-decrement')).toHaveAttribute(
      'id',
      'session-decrement',
    )
  })

  test('I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment"', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByTestId('break-increment')).toHaveAttribute(
      'id',
      'break-increment',
    )

    expect(screen.getByTestId('session-increment')).toHaveAttribute(
      'id',
      'session-increment',
    )
  })

  test('I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('5')).toHaveAttribute('id', 'break-length')
  })

  test('I can see an element with a corresponding id="session-length", which by default displays a value of 25', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('25')).toHaveAttribute('id', 'session-length')
  })

  test('I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session")', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('Session')).toHaveAttribute('id', 'timer-label')
  })

  test('I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00)', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('25:00')).toHaveAttribute('id', 'time-left')
  })

  test('I can see a clickable element with a corresponding id="start_stop"', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByTestId('play-pause')).toHaveAttribute('id', 'start_stop')
  })

  test('I can see a clickable element with a corresponding id="reset"', () => {
    render(<TwentyFivePlusFiveClock />)
    expect(screen.getByText('Reset')).toHaveAttribute('id', 'reset')
  })
  test('When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    const reset = screen.getByRole('button', { name: 'Reset' })

    expect(reset).toHaveAttribute('id', 'reset')

    await repeat(() => user.click(screen.getByTestId('break-increment')), 5)
    await repeat(() => user.click(screen.getByTestId('session-increment')), 5)

    expect(screen.getByTestId('break-length')).toHaveTextContent('10')
    expect(screen.getByTestId('session-length')).toHaveTextContent('30')

    await user.click(reset)

    expect(screen.getByTestId('break-length')).toHaveTextContent('5')
    expect(screen.getByTestId('session-length')).toHaveTextContent('25')
    expect(screen.getByTestId('time-left')).toHaveTextContent('25:00')
  })

  test('When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    const increase = screen.getByTestId('break-increment')
    const breakLength = screen.getByTestId('break-length')

    expect(breakLength).toHaveAttribute('id', 'break-length')
    expect(breakLength).toHaveTextContent('5')
    expect(increase).toHaveAttribute('id', 'break-increment')
    expect(increase).toHaveTextContent('Increase')

    await user.click(increase)

    expect(breakLength).toHaveTextContent('6')
  })

  test('When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    const decrease = screen.getByTestId('break-decrement')
    const breakLength = screen.getByTestId('break-length')

    expect(breakLength).toHaveAttribute('id', 'break-length')
    expect(breakLength).toHaveTextContent('5')
    expect(decrease).toHaveAttribute('id', 'break-decrement')
    expect(decrease).toHaveTextContent('Decrease')

    await user.click(decrease)

    expect(breakLength).toHaveTextContent('4')
  })

  test('When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    const decrease = screen.getByTestId('session-decrement')
    const sessionLength = screen.getByTestId('session-length')

    expect(sessionLength).toHaveAttribute('id', 'session-length')
    expect(sessionLength).toHaveTextContent('5')
    expect(decrease).toHaveAttribute('id', 'session-decrement')
    expect(decrease).toHaveTextContent('Decrease')

    await user.click(decrease)

    expect(sessionLength).toHaveTextContent('24')
  })

  test('When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    const increase = screen.getByTestId('session-increment')
    const sessionLength = screen.getByTestId('session-length')

    expect(sessionLength).toHaveAttribute('id', 'session-length')
    expect(sessionLength).toHaveTextContent('5')
    expect(increase).toHaveAttribute('id', 'session-increment')
    expect(increase).toHaveTextContent('Increase')

    await user.click(increase)

    expect(sessionLength).toHaveTextContent('26')
  })

  test('I should not be able to set a session or break length to <= 0', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    await repeat(() => user.click(screen.getByTestId('break-decrement')), 6)
    await repeat(() => user.click(screen.getByTestId('session-decrement')), 26)

    expect(screen.getByTestId('break-length')).toHaveTextContent('0')
    expect(screen.getByTestId('session-length')).toHaveTextContent('0')
  })

  test('I should not be able to set a session or break length to > 60', async () => {
    const { user } = render(<TwentyFivePlusFiveClock />)

    await repeat(() => user.click(screen.getByTestId('break-increment')), 56)
    await repeat(() => user.click(screen.getByTestId('session-increment')), 36)

    expect(screen.getByTestId('break-length')).toHaveTextContent('60')
    expect(screen.getByTestId('session-length')).toHaveTextContent('60')
  })
})
