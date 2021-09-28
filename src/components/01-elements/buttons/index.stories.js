import buttons from './index.pug';
import './styles/index.scss';

export default {
  title: 'Elements/Buttons',
  argTypes: {
    label: { name: 'Label', control: 'text' },
    type: {
      name: 'Select A Button Type',
      control: {
        type: 'select',
        options: {
          CTA: 'cta',
          Large: 'large',
          Reverse: 'reverse',
          Search: 'search',
          Arrow: 'arrow',
          Submit: 'submit',
          Circle: 'circle',
        },
      },
    },
  },
};

const Template = (props) => buttons({ props });

export const Default = Template.bind({});
Default.args = {
  label: 'Button text',
  type: '',
};
