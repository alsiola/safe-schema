import { GraphQLInt, GraphQLScalarType } from "graphql";
import { Brand } from "../util/brand";

export type Integer = Brand<GraphQLScalarType, "GRAPHQL_INT">;

export const integer = (): Integer => GraphQLInt;
