import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import {
  renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('component exists', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle button', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('btn-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
