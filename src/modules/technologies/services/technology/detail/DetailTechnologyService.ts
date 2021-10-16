import { inject, injectable } from 'tsyringe';

import { Technology } from '@modules/technologies/infra/typeorm/entities/Technology';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DetailTechnologyService {
  constructor(
    @inject('TechnologyRepository')
    private technologyRepository: ITechnologyRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Technology> {
    const exists = await this.technologyRepository.findById(id);

    if (!exists) {
      throw new AppError('Technology não encontrado!');
    }

    return exists;
  }
}
