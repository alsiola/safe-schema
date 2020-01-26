import {
    GraphQLFieldConfig,
    GraphQLOutputType,
    GraphQLFieldResolver,
    GraphQLFieldConfigArgumentMap,
    GraphQLArgumentConfig,
    GraphQLScalarType,
    GraphQLResolveInfo
} from "graphql";
import { Brand } from "../util/brand";
import { String, Integer } from "../scalars";
import { InputField, InputOpts } from "./input-field";
import { OutputType, Object } from "../output";

export type Field<TArgs, TRoot> = Brand<
    GraphQLFieldConfig<TRoot, {}, TArgs>,
    "GRAPHQL_FIELD"
>;

export type MapArgsType<TArgs extends Record<string, GraphQLArgumentConfig>> = {
    [K in keyof TArgs]: TArgs[K] extends InputField<infer U>
        ? U extends String
            ? string
            : U extends Integer
            ? number
            : never
        : never;
};

export type MapOutputType<TOut extends OutputType> = TOut extends String
    ? string
    : TOut extends Integer
    ? number
    : TOut extends Object
    ? {}
    : never;

export type Resolver<TRoot, TArgs, TContext, TOutput> = (
    root: TRoot,
    args: TArgs,
    ctx: TContext,
    info: GraphQLResolveInfo
) => TOutput | Promise<TOutput>;

export type FieldOpts<
    TArgs extends Record<string, GraphQLArgumentConfig>,
    TRoot,
    TType extends OutputType
> = {
    description?: string;
    type: TType;
    args?: TArgs;
    resolve?: Resolver<TRoot, MapArgsType<TArgs>, {}, MapOutputType<TType>>;
    subscribe?: GraphQLFieldResolver<{}, {}, TArgs>;
    deprecationReason?: string;
};

export const field = <
    TArgs extends Record<string, GraphQLArgumentConfig>,
    TRoot,
    TType extends OutputType
>(
    opts: FieldOpts<TArgs, TRoot, TType>
): Field<TArgs, TRoot> => opts as any;

const z: MapArgsType<{
    id: Brand<
        InputOpts<Brand<GraphQLScalarType, "GRAPHQL_STRING">>,
        "GRAPHQL_INPUTFIELD"
    >;
}> = {} as any;
