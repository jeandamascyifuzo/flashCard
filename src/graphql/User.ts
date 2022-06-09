import { objectType } from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.list.nonNull.field("products", {    // 1
            type: "Product",
            resolve(parent, args, context) {   // 2
                return context.prisma.user  // 3
                    .findUnique({ where: { id: parent.id } })
                    .products();
            },
        }); 
    },
});