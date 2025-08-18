import { fireEvent, render, screen } from '@testing-library/react';

import Button, { type ButtonProps } from './Button';

const defaultProps: ButtonProps = {
  label: 'Click me',
};

const renderComponent = (props: Partial<ButtonProps> = {}) => {
  return render(<Button {...defaultProps} {...props} />);
};

describe('Button', () => {
  test('should render button with label', () => {
    renderComponent();

    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  test('should apply correct size class for small', () => {
    renderComponent({ size: 'small' });

    expect(screen.getByText(/click me/i)).toHaveClass('button--small');
  });

  test('should apply correct size class for medium', () => {
    renderComponent({ size: 'medium' });

    expect(screen.getByText(/click me/i)).toHaveClass('button--medium');
  });

  test('should apply correct size class for large', () => {
    renderComponent({ size: 'large' });

    expect(screen.getByText(/click me/i)).toHaveClass('button--large');
  });

  test('should call onClick handler when clicked', () => {
    const mockOnClick = vi.fn();

    renderComponent({ onClick: mockOnClick });

    fireEvent.click(screen.getByText(/click me/i));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
