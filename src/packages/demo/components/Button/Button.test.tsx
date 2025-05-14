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

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should apply correct size class for small', () => {
    renderComponent({ size: 'small' });

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('button--small');
  });

  test('should apply correct size class for medium', () => {
    renderComponent({ size: 'medium' });

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('button--medium');
  });

  test('should apply correct size class for large', () => {
    renderComponent({ size: 'large' });

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('button--large');
  });

  test('should call onClick handler when clicked', () => {
    const mockOnClick = vi.fn();

    renderComponent({ onClick: mockOnClick });

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
