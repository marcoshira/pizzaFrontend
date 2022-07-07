import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextInput, TextInputProps } from '.';

const props: TextInputProps = {
  label: 'Teste label',
  name: 'input-name',
  disabled: false,
  errorMessage: '',
};

describe('<TextInput />', () => {
  it('should render', () => {
    const { container } = renderTheme(<TextInput {...props} />);

    expect(screen.getByLabelText('Teste label')).toHaveAttribute(
      'type',
      'text',
    );
    expect(container).toMatchSnapshot();
  });
});
