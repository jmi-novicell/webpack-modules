export class DateSelector {
  init() {
    const t = this;
    const today = new Date();
    const todayString = this.getDate(today);

    Array.from(document.getElementsByClassName('day-selector')).forEach(
      (item) => {
        console.info(item);
        const previousDay = item.querySelector('.previousDay');
        const nextDay = item.querySelector('.nextDay');
        // eslint-disable-next-line no-param-reassign
        item.querySelector('.dateIn').innerHTML = todayString;
        item.querySelector('.previousDay').classList.add('disable');

        previousDay.addEventListener(
          'click',
          () => {
            t.previousDay(item);
          },
          false
        );

        nextDay.addEventListener(
          'click',
          () => {
            t.nextDay(item);
          },
          false
        );
      }
    );
  }

  previousDay(item) {
    const todayString = this.getDate(new Date());
    const currentDate = item.querySelector('.currentDate').value;
    const previousDate = this.addDays(currentDate, -1);
    const previousDateString = this.getDate(previousDate);
    const currentDateString = this.getDate(new Date(currentDate));
    if (currentDateString !== todayString) {
      // eslint-disable-next-line no-param-reassign
      item.querySelector('.dateIn').innerHTML = this.getDate(previousDate);
      // eslint-disable-next-line no-param-reassign
      item.querySelector('.currentDate').value = previousDate;
      if (previousDateString === todayString) {
        item.querySelector('.previousDay').classList.add('disable');
      }
    }
  }

  nextDay(item) {
    const currentDate = item.querySelector('.currentDate').value;
    const nextDate = this.addDays(currentDate, 1);
    // eslint-disable-next-line no-param-reassign
    item.querySelector('.dateIn').innerHTML = this.getDate(nextDate);
    // eslint-disable-next-line no-param-reassign
    item.querySelector('.currentDate').value = nextDate;
    item.querySelector('.previousDay').classList.remove('disable');
  }

  // eslint-disable-next-line class-methods-use-this
  addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
  }

  // eslint-disable-next-line class-methods-use-this
  getDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yy = date.getFullYear().toString().substr(-2);
    const dateString = `${dd}/${mm}/${yy}`;

    return dateString;
  }

  onAppInit() {
    this.init();
  }
}

export default DateSelector;
