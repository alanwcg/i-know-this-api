export interface IDateProvider {
  addHours(date: Date, hours: number): Date;
  addDays(date: Date, days: number): Date;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}
