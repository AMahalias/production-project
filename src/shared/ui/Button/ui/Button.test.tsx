import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button'

describe('Button', () => {
  test('button exists', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('button class clear exists', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
