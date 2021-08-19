import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    
    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute({name, description} : IRequest) :Promise<void> {

        const categoryAlreadyExist =  await this.categoriesRepository.findByName(name);

        if(categoryAlreadyExist) {
            throw new Error("Category Already Exist");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }