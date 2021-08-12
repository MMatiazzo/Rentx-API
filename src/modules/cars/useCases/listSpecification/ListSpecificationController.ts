import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase"


class ListSpecificationController { 
    private listSpecificationUseCase : ListSpecificationUseCase;

    constructor(listSpecificationUseCase: ListSpecificationUseCase) {
        this.listSpecificationUseCase = listSpecificationUseCase;
    }

    handle(request : Request, response : Response) : Response {
        
        const list = this.listSpecificationUseCase.execute();

        return response.status(200).json(list);
    }

}

export { ListSpecificationController }