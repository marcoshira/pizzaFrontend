import { Meta, Story } from '@storybook/react/types-6-0';
import { FormRegister, FormRegisterProps } from '.';
import { RegWrapper } from '../RegWrapper';

export default {
  title: 'FormRegister',
  component: FormRegister,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '4rem' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta<FormRegisterProps>;

export const Mobile: Story<FormRegisterProps> = (args) => {
  return (
    <RegWrapper>
      <FormRegister {...args} />
    </RegWrapper>
  );
};

export const Template: Story<FormRegisterProps> = (args) => {
  return <FormRegister {...args} />;
};

export const WithError: Story<FormRegisterProps> = (args) => {
  return <FormRegister {...args} />;
};

WithError.args = {
  errorMessage: 'Este é seu erro',
};
