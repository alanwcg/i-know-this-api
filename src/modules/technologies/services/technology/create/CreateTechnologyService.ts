import { inject, injectable } from 'tsyringe';

import { ICreateTechnologyDto } from '@modules/technologies/dto/ICreateTechnologyDto';
import { Technology } from '@modules/technologies/infra/typeorm/entities/Technology';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateTechnologyService {
  constructor(
    @inject('TechnologyRepository')
    private technologyRepository: ITechnologyRepository,
  ) {}

  async execute({
    name,
    description,
  }: ICreateTechnologyDto): Promise<Technology> {
    const exists = await this.technologyRepository.findByName(name);

    if (exists) {
      throw new AppError('Tecnologia já existe!');
    }

    const created = await this.technologyRepository.create({
      name,
      description,
    });

    return created;
  }
}
