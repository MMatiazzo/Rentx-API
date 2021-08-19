import { Specification } from '../../entities/Specification'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

class ListSpecificationUseCase {

    private specificationRepository: ISpecificationRepository;

    constructor(specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute() : Specification[]{
        const list = this.specificationRepository.list();
        
        return list;
    }

}

export { ListSpecificationUseCase } 