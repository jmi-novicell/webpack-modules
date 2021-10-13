import cardsSlider from './index.pug';
import data from './data/cards.json';
import './styles/index.scss';

export default {
  title: 'Modules/Cards Slider',
  argTypes: {
    label: { name: 'Label', control: 'text' },
  },
};

const Template = (props) => cardsSlider({ props });

export const Default = Template.bind({});
Default.args = {
  label: 'Button text',
  cards: data,
};
