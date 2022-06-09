
import { booleanArg, extendType, nonNull, objectType, stringArg, intArg, inputObjectType, enumType, arg,list } from "nexus";
import { Prisma } from "@prisma/client"
import { NexusGenObjects } from "../../nexus-typegen";

export const Product = objectType({
    name: "Product", // 1 
    definition(t) {  // 2
        t.nonNull.int("id");
        t.nonNull.string("country");
        t.nonNull.string("productName");
        t.nonNull.string("lifetime");
        t.nonNull.boolean("Sold");
        t.field("postedBy", {   // 1
            type: "User",
            resolve(parent, args, context) {  // 2
                return context.prisma.product
                    .findUnique({ where: { id: parent.id } })
                    .postedBy();
            },
        });
    },
});

let products: NexusGenObjects["Product"][] = [   // 1
    {
        id: 1,
        country: "china",
        productName: "Fullstack tutorial for GraphQL",
        lifetime: "12/02/2022",
        Sold: false
    },
    {
        id: 2,
        country: "rwanda",
        productName: "Fullstack tutorial for GraphQL222",
        lifetime: "12/02/202222",
        Sold: false
    },
];

export const ProductQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   // 3
            type: "Product",
            args: {
                filter: stringArg(),   // 1
                skip: intArg(),   // 1
                take: intArg(),   // 1 
                orderBy: arg({ type: list(nonNull(ProductOrderByInput)) }),  // 1
            },
            resolve(parent, args, context) {
                const where = args.filter   // 2
                    ? {
                          OR: [
                              { country: { contains: args.filter } },
                              { productName: { contains: args.filter } },
                              { lifetime: { contains: args.filter } },
                          ],
                      }
                    : {};
                return context.prisma.product.findMany({
                    where,
                    skip: args?.skip as number | undefined,    // 2
                    take: args?.take as number | undefined,    // 2
                    orderBy: args?.orderBy as Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput> | undefined,  // 2
                });
            },
        });
    },
});

export const ProductioMutation = extendType({  // 1
    type: "Mutation",
    definition(t) {
        t.nonNull.field("post", {  // 2
            type: "Product",
            args: {   // 3
                country: nonNull(stringArg()),
                productName: nonNull(stringArg()),
                lifetime: nonNull(stringArg()),
                Sold: nonNull(booleanArg()),
            },

            resolve(parent, args, context) {
                const { userId } = context;

                if (!userId) {  // 1
                    throw new Error("Cannot post without logging in.");
                }
                const newProduct = context.prisma.product.create({   // 2
                    data: {
                        country: args.country,
                        productName: args.productName,
                        lifetime: args.lifetime,
                        Sold: args.Sold
                    },
                });
                return newProduct;
            },
        });
    },
});

{/*===========Get single product===========*/}
export const singleProductQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("product", {
            type: "Product",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                const { id } = args;
                const singleProduct = context.prisma.product.findMany({
                    where: {
                      id: {
                        equals: id
                      }
                    },
                  })
                return singleProduct
            },
        });
    },
});

{/*===========Update Product===========*/}
export const updateProductQuery = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("updateProduct", {
            type: "Product",
            args: {
                id: nonNull(intArg()),
                country: nonNull(stringArg()),
                productName: nonNull(stringArg()),
                lifetime: nonNull(stringArg()),
                Sold: nonNull(booleanArg()),
            },
            resolve(parent, args, context, info) {
                const { id, country, productName, lifetime, Sold } = args;
                const updateproduct = context.prisma.product.update({
                    where: {
                      id: id,
                    },
                    data: {
                    country: country,
                     productName: productName,
                     lifetime: lifetime,
                     Sold: Sold
                    },
                  })
                return updateproduct
            },
        });
    },
});

{/*===========Mark as done card===========*/}
export const SoldProductQuery = extendType({  
    type: "Mutation",
    definition(t) {
        t.nonNull.field("SoldProduct", {   
            type: "Product",
            args: {   
                id: nonNull(intArg()),
                Sold: nonNull(booleanArg()),
            },
            resolve(parent, args, context, info) {    
                const { id, Sold } = args; 
                const { userId } = context;

                if (!userId) {  
                    throw new Error("Cannot seletec sold without logging in.");
                }

                const updateProduct = context.prisma.product.update({
                    where: {
                      id: id,
                    },
                    data: {
                     Sold: !Sold
                    },
                  })
                return updateProduct

            },
        });
    },
});

{/*===========Delete card===========*/}
export const deleteProductQuery = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("deleteProduct", {
            type: "Product",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                const { id } = args;
                const deleteProduct = context.prisma.product.delete({
                    where: {
                      id: id,
                    },
                  })
                  return deleteProduct
            },
        });
    },
});

export const ProductOrderByInput = inputObjectType({
    name: "ProductOrderByInput",
    definition(t) {
        t.field("country", { type: Sort });
        t.field("productName", { type: Sort });
        t.field("lifetime", { type: Sort });
        t.field("createdAt", { type: Sort });
    },
});

export const Sort = enumType({
    name: "Sort",
    members: ["asc", "desc"],
});