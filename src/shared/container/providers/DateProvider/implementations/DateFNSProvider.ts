import { addDays, addHours, isBefore } from 'date-fns';

import { IDateProvider } from '../models/IDateProvider';

export class DateFNSProvider implements IDateProvider {
  addHours(date: Date, hours: number): Date {
    return addHours(date, hours);
  }

  addDays(date: Date, days: number): Date {
    return addDays(date, days);
  }

  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return isBefore(start_date, end_date);
  }
}
