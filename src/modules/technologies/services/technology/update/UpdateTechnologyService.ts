import { inject, injectable } from 'tsyringe';

import { IUpdateTechnologyDto } from '@modules/technologies/dto/IUpdateTechnologyDto';
import { Technology } from '@modules/technologies/infra/typeorm/entities/Technology';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateTechnologyService {
  constructor(
    @inject('TechnologyRepository')
    private TechnologyRepository: ITechnologyRepository,
  ) {}

  async execute({
    id,
    name,
    description,
  }: IUpdateTechnologyDto): Promise<Technology> {
    const exists = await this.TechnologyRepository.findById(id);

    if (!exists) {
      throw new AppError('Tecnologia não encontrada!');
    }

    const updated = await this.TechnologyRepository.update({
      id,
      name,
      description,
    });

    return updated;
  }
}
