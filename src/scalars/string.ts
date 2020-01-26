import { GraphQLString, GraphQLScalarType } from "graphql";
import { Brand } from "../util/brand";

export type String = Brand<GraphQLScalarType, "GRAPHQL_STRING">;

export const string = (): String => GraphQLString;
