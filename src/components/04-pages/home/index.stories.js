import * as JumbotronStories from '03-sections/jumbotron/index.stories';
import * as SliderStories from '03-sections/slider/index.stories';
import * as ButtonsStories from '01-elements/buttons/index.stories';
import home from './index.pug';

export default {
  title: 'Pages/Home',
  argTypes: {
    text: { name: 'Title', control: 'text' },
    isColored: { name: 'Colored Title?', control: 'boolean' },
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

const Template = (props) => home({ props });

export const Home = Template.bind({});
Home.args = {
  ...JumbotronStories.Jumbotron.args,
  ...SliderStories.Slider.args,
  ...ButtonsStories.Default.args,
};
