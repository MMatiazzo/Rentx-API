import { Router } from "express";
import createCategoryController from "../modules/cars/useCases/createCategory";
import listCategoryController from "../modules/cars/useCases/listCategory";
import importCategoryController from "../modules/cars/useCases/ImportCategory";

import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController().handle(request, response); 
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handle(request, response);
});

export { categoriesRoutes }