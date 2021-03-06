import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export default (): ListCategoryController => {
    const categoryRepository = new CategoriesRepository();
    
    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
    
    const listCategoryController = new ListCategoryController(listCategoryUseCase);
    
    return listCategoryController;
}