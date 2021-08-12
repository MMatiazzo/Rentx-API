import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoryUseCase {
    private categoryRepository : ICategoriesRepository;

    constructor(categoryRepository: ICategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute() : Category[] {
        return this.categoryRepository.list();
    }
}

export { ListCategoryUseCase }