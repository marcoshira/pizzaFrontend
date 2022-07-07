import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormLogin } from '.';

const func = jest.fn();

describe('<FormLogin />', () => {
  it('should render', () => {
    renderTheme(<FormLogin />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should call function', async () => {
    renderTheme(<FormLogin onLogin={func} />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should change input', () => {
    renderTheme(<FormLogin />);
    const input = screen.getByLabelText('Email');
    const input2 = screen.getByLabelText('Password');
    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.change(input2, { target: { value: 'abd' } });

    expect(input).toHaveValue('abc');
    expect(input2).toHaveValue('abd');
  });
  it('should render with errorMessage', () => {
    const { container } = renderTheme(<FormLogin errorMessage="oi" />);
    expect(screen.getByText('oi')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
