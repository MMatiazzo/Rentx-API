import { Specification } from '../../entities/Specification'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    private specificationRepository: ISpecificationRepository;
    constructor(specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute({name, description}: IRequest) :void {
        const specificationAlreadyExist = this.specificationRepository.findByName(name);

        if(specificationAlreadyExist) {
            throw new Error("Specification Already Exist");
        }

        this.specificationRepository.create({name, description});
        
    }
}

export { CreateSpecificationUseCase }