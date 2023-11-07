export class DateTimeHelper {
  static getUtcDate(): Date {
    const year = new Date().getUTCFullYear();
    const month = new Date().getUTCMonth();
    const day = new Date().getUTCDate();

    return new Date(Date.UTC(year, month, day));
  }

  static getUtcDateTimeFormatted(): string {
    const date = this.getUtcDate();
    const hours = new Date().getUTCHours();
    const minutes = new Date().getUTCMinutes();
    const seconds = new Date().getUTCSeconds();
    const miliseconds = new Date().getUTCMilliseconds();

    return `${
      date.toISOString().split('T')[0]
    }T${hours}:${minutes}:${seconds}:${miliseconds}`;
  }
}
