import { container } from 'tsyringe';

import { DateFNSProvider } from './implementations/DateFNSProvider';
import { IDateProvider } from './models/IDateProvider';

container.registerSingleton<IDateProvider>('DateProvider', DateFNSProvider);
