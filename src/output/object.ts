import {
    GraphQLObjectType,
    GraphQLObjectTypeConfig,
    Thunk,
    GraphQLFieldConfigMap
} from "graphql";
import { Brand } from "../util/brand";
import { Field } from "../schema/field";

export interface ObjectConfig<TRoot> {
    name: string;
    fields: Record<string, Field<{}, TRoot>>;
}

export type Object = Brand<GraphQLObjectType, "GRAPHQL_OBJECT">;

export const object = <TRoot>(opts: ObjectConfig<TRoot>): Object =>
    new GraphQLObjectType(opts);
