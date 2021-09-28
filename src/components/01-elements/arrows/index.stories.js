import arrows from './index.pug';
import './styles/index.scss';

export default {
  title: 'Elements/Arrows',
};

const Template = (props) => arrows({ props });

export const Default = Template.bind({});
Default.args = {
  isUp: false,
};

export const Up = Template.bind({});
Up.args = {
  isUp: true,
};
