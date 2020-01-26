import { Object } from "./object";
import { Scalars, Integer, Boolean } from "../scalars";

export * from "./object";

export type OutputType = Object | Scalars;

export type MapOutputType<TOut extends OutputType> = TOut extends String
    ? string
    : TOut extends Integer
    ? number
    : TOut extends Boolean
    ? boolean
    : TOut extends Object
    ? {}
    : never;
