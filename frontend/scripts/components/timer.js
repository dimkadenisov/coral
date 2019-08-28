


class Timer {
  constructor(selector) {
    if ($(selector).length === 0) return false;
    this.firstDaysNode = $(selector).find('.timer__field:nth-child(1) .timer__digit:nth-child(1)');
    this.secondDaysNode = $(selector).find('.timer__field:nth-child(1) .timer__digit:nth-child(2)');

    this.firstHoursNode = $(selector).find('.timer__field:nth-child(2) .timer__digit:nth-child(1)');
    this.secondHoursNode = $(selector).find('.timer__field:nth-child(2) .timer__digit:nth-child(2)');

    this.firstMinutesNode = $(selector).find('.timer__field:nth-child(3) .timer__digit:nth-child(1)');
    this.secondMinutesNode = $(selector).find('.timer__field:nth-child(3) .timer__digit:nth-child(2)');

    this.deadline = new Date($(selector).attr('data-deadline'));
    this.timer = 0;

    this.timeBetweenDates();
    this.timer = setInterval(() => this.timeBetweenDates(), 1000);
  };

  clear() {
    clearInterval(this.timer);

    this.firstDaysNode.text('0');
    this.secondDaysNode.text('0');

    this.firstMinutesNode.text('0');
    this.secondMinutesNode.text('0');

    this.firstHoursNode.text('0');
    this.secondHoursNode.text('0');
  }

  timeBetweenDates() {
    const now = new Date();
    const difference = this.deadline.getTime() - now.getTime();

    if (difference <= 0) {
      console.log(this.deadline);
      this.clear();

    } else {

      let minutes = (Math.floor(difference / 60 / 1000)) % 60;
      let hours = (Math.floor(difference / 60 / 60 / 1000)) % (60 * 60);
      let days = (Math.floor(difference / 24 / 60 / 60 / 1000)) % (60 * 60 * 24);

      minutes = minutes.toString().split('');
      hours = hours.toString().split('');
      days = days.toString().split('');

      if (minutes.length === 1) {
        this.secondMinutesNode.text(minutes[0]);
      } else {
        this.firstMinutesNode.text(minutes[0]);
        this.secondMinutesNode.text(minutes[1]);
      }

      if (hours.length === 1) {
        this.secondHoursNode.text(hours[0]);
      } else {
        this.firstHoursNode.text(hours[0]);
        this.secondHoursNode.text(hours[1]);
      }

      if (days.length === 1) {
        this.secondDaysNode.text(days[0]);
      } else {
        this.firstDaysNode.text(days[0]);
        this.secondDaysNode.text(days[1]);
      }
    }
  }
}

const timer = new Timer('.timer');
