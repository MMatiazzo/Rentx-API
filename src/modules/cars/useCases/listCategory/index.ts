import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoryRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };