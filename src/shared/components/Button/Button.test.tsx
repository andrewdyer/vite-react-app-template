import { fireEvent, render, screen } from '@testing-library/react';

import Button, { type ButtonProps } from './Button';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    label: 'Click me',
  };

  test('should render button with label', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should apply primary class when primary prop is true', () => {
    render(<Button {...defaultProps} primary />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });

  test('should apply secondary class when primary prop is false', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--secondary');
  });

  test('should apply correct size class', () => {
    render(<Button {...defaultProps} size="large" />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--large');
  });

  test('should call onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
