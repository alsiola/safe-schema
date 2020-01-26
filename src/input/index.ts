import { InputObject } from "./object";
import { Scalars } from "../scalars";

export * from "./object";

export type Input = InputObject<any> | Scalars;
