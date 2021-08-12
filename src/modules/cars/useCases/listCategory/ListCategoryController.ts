import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {
    private listCategoryUseCase : ListCategoryUseCase;
    constructor(listCategoryUseCase : ListCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }

    handle(request : Request, response : Response) : Response {
        const list = this.listCategoryUseCase.execute();

        return response.json(list);
    }
}

export { ListCategoryController }