import { inject, injectable } from 'tsyringe';

import { Technology } from '@modules/technologies/infra/typeorm/entities/Technology';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';

@injectable()
export class ListTechnologyService {
  constructor(
    @inject('TechnologyRepository')
    private technologyRepository: ITechnologyRepository,
  ) {}

  async execute(): Promise<Technology[]> {
    const list = await this.technologyRepository.findAll();

    return list;
  }
}
