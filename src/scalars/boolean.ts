import { GraphQLBoolean, GraphQLScalarType } from "graphql";
import { Brand } from "../util/brand";

export type Boolean = Brand<GraphQLScalarType, "GRAPHQL_BOOL">;

export const boolean = (): Boolean => GraphQLBoolean;
