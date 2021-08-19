import { v4 as uuidv4 } from "uuid";

class Specification {
    uuid ?: string;
    name : string;
    description : string;
    created_at : Date;

    constructor() {
        if(!this.uuid){
            this.uuid = uuidv4();
        }
    }
}

export { Specification }