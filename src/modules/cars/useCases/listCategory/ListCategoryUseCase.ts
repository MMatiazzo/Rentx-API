import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoryUseCase {
    private categoryRepository : ICategoriesRepository;

    constructor(categoryRepository: ICategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute() : Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}

export { ListCategoryUseCase }