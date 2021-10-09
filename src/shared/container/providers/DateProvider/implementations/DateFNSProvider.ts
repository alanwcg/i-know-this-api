import { addDays } from 'date-fns';

import { IDateProvider } from '../models/IDateProvider';

export class DateFNSProvider implements IDateProvider {
  addDays(date: Date, days: number): Date {
    return addDays(date, days);
  }
}
