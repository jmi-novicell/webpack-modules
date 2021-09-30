import dateSelectors from './index.pug';
import displayDateJS from './js';
import './styles/index.scss';

export default {
  title: 'Elements/Date Selectors',
  argTypes: {
    text: { name: 'Title', control: 'text' },
  },
};

displayDateJS();

const Template = (props) => dateSelectors({ props });

export const DaySelector = Template.bind({});
DaySelector.args = {};
