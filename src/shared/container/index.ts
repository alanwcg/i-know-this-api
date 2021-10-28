import { container } from 'tsyringe';

import '@modules/users/providers/HashProvider';
import './providers';

import { OptionsRepository } from '@modules/quizzes/infra/typeorm/repositories/OptionsRepository';
import { QuestionsRepository } from '@modules/quizzes/infra/typeorm/repositories/QuestionsRepository';
import { IOptionsRepository } from '@modules/quizzes/repositories/IOptionsRepository';
import { IQuestionsRepository } from '@modules/quizzes/repositories/IQuestionsRepository';
import { LevelRepository } from '@modules/technologies/infra/typeorm/repositories/LevelRepository';
import { ModuleRepository } from '@modules/technologies/infra/typeorm/repositories/ModuleRepository';
import { TechnologyRepository } from '@modules/technologies/infra/typeorm/repositories/TechnologyRepository';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';

// Users
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

// Technology
container.registerSingleton<ITechnologyRepository>(
  'TechnologyRepository',
  TechnologyRepository,
);

// Level
container.registerSingleton<ILevelRepository>(
  'LevelRepository',
  LevelRepository,
);

// Module
container.registerSingleton<IModuleRepository>(
  'ModuleRepository',
  ModuleRepository,
);

// Question
container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository,
);

// Option
container.registerSingleton<IOptionsRepository>(
  'OptionsRepository',
  OptionsRepository,
);
