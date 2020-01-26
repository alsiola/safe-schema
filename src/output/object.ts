import { GraphQLObjectType } from "graphql";
import { Brand } from "../util/brand";
import { Field } from "../schema/field";

export interface ObjectConfig<
    TRoot,
    TFields extends Record<string, Field<{}, TRoot>>
> {
    name: string;
    fields: TFields;
}

export type Object = Brand<GraphQLObjectType, "GRAPHQL_OBJECT">;

export const object = <TRoot>() => <
    TFields extends Record<string, Field<{}, TRoot>>
>(
    opts: ObjectConfig<TRoot, TFields>
): Object => new GraphQLObjectType(opts);
