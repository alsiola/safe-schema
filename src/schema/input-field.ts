import { Brand } from "../util/brand";
import { Scalars } from "../scalars";

export type InputField<T extends Scalars> = Brand<
    InputOpts<T>,
    "GRAPHQL_INPUTFIELD"
>;

export interface InputOpts<T extends Scalars> {
    name?: string;
    description?: string;
    type: T;
    defaultValue?: any;
}

export const inputField = <T extends Scalars>(
    opts: InputOpts<T>
): InputField<T> => opts as any;
