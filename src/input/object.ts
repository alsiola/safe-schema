import { GraphQLInputObjectType, Thunk } from "graphql";
import { Brand } from "../util/brand";
import { InputField } from "../schema";
import { Scalars } from "../scalars";

export interface InputObjectConfig<
    TFields extends Record<string, InputField<Scalars>>
> {
    name: string;
    fields: Thunk<TFields>;
}

export type InputObject<
    TFields extends Record<string, InputField<Scalars>>
> = Brand<GraphQLInputObjectType, "GRAPHQL_INPUT_OBJECT"> & {
    _typesave?: TFields;
};

export const inputObject = <
    TFields extends Record<string, InputField<Scalars>>
>(
    opts: InputObjectConfig<TFields>
): InputObject<TFields> => new GraphQLInputObjectType(opts);
