import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('component exists', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle button', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('btn-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
