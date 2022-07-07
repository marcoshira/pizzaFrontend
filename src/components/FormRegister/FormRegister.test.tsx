import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormRegister } from '.';

const func = jest.fn();

describe('<FormRegister />', () => {
  it('should render', () => {
    renderTheme(<FormRegister />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should call function', async () => {
    renderTheme(<FormRegister onRegister={func} />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should change input', () => {
    renderTheme(<FormRegister errorMessage="oi" />);
    const input = screen.getByLabelText('Email');
    const input2 = screen.getByLabelText('Password');
    const input3 = screen.getByLabelText('Username');
    const input4 = screen.getByLabelText('Confirm Password');
    const input5 = screen.getByLabelText('Telephone');
    const input6 = screen.getByLabelText('Address');
    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.change(input2, { target: { value: 'abd' } });
    fireEvent.change(input3, { target: { value: 'abe' } });
    fireEvent.change(input4, { target: { value: 'abf' } });
    fireEvent.change(input5, { target: { value: 'abg' } });
    fireEvent.change(input6, { target: { value: 'abh' } });

    expect(input).toHaveValue('abc');
    expect(input2).toHaveValue('abd');
    expect(input3).toHaveValue('abe');
    expect(input4).toHaveValue('abf');
    expect(input5).toHaveValue('abg');
    expect(input6).toHaveValue('abh');

    expect(screen.getByText('oi')).toBeInTheDocument();
  });
});
