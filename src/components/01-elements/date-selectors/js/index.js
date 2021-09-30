import { DateSelector } from './date-selector';

const displayDateJS = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const getDate = new DateSelector();
    console.info(getDate);
    getDate.onAppInit();
  });
};

export default displayDateJS;
