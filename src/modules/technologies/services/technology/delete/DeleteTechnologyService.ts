import { inject, injectable } from 'tsyringe';

import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteTechnologyService {
  constructor(
    @inject('TechnologyRepository')
    private technologyRepository: ITechnologyRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const exists = await this.technologyRepository.findById(id);

    if (!exists) {
      throw new AppError('Tecnologia não encontrada!');
    }

    await this.technologyRepository.delete(id);
  }
}
