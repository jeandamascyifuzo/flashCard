import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";   // 1

export const schema = makeSchema({
    types,   // 2
    outputs: {
        typegen: join(process.cwd(), ".src/nexus-typegen.ts"),
        schema: join(process.cwd(), ".src/schema.graphql"),
    },
    
    contextType: {  
        module: join(process.cwd(), "./src/context.ts"),  // 1
        export: "Context",  // 2
    },
});