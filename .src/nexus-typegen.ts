/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ProductOrderByInput: { // input type
    country?: NexusGenEnums['Sort'] | null; // Sort
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    lifetime?: NexusGenEnums['Sort'] | null; // Sort
    productName?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: {};
  Product: { // root type
    Sold: boolean; // Boolean!
    country: string; // String!
    id: number; // Int!
    lifetime: string; // String!
    productName: string; // String!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    SoldProduct: NexusGenRootTypes['Product']; // Product!
    deleteProduct: NexusGenRootTypes['Product']; // Product!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    post: NexusGenRootTypes['Product']; // Product!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateProduct: NexusGenRootTypes['Product']; // Product!
  }
  Product: { // field return type
    Sold: boolean; // Boolean!
    country: string; // String!
    id: number; // Int!
    lifetime: string; // String!
    postedBy: NexusGenRootTypes['User'] | null; // User
    productName: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Product'][]; // [Product!]!
    product: NexusGenRootTypes['Product'][]; // [Product!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    SoldProduct: 'Product'
    deleteProduct: 'Product'
    login: 'AuthPayload'
    post: 'Product'
    signup: 'AuthPayload'
    updateProduct: 'Product'
  }
  Product: { // field return type name
    Sold: 'Boolean'
    country: 'String'
    id: 'Int'
    lifetime: 'String'
    postedBy: 'User'
    productName: 'String'
  }
  Query: { // field return type name
    feed: 'Product'
    product: 'Product'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
    products: 'Product'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    SoldProduct: { // args
      Sold: boolean; // Boolean!
      id: number; // Int!
    }
    deleteProduct: { // args
      id: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    post: { // args
      Sold: boolean; // Boolean!
      country: string; // String!
      lifetime: string; // String!
      productName: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateProduct: { // args
      Sold: boolean; // Boolean!
      country: string; // String!
      id: number; // Int!
      lifetime: string; // String!
      productName: string; // String!
    }
  }
  Query: {
    feed: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['ProductOrderByInput'][] | null; // [ProductOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    product: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}