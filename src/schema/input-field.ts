import { Brand } from "../util/brand";
import { Scalars } from "../scalars";
import { Input } from "../input";

export type InputField<T extends Input> = Brand<
    InputOpts<T>,
    "GRAPHQL_INPUTFIELD"
>;

export interface InputOpts<T extends Input> {
    name?: string;
    description?: string;
    type: T;
    defaultValue?: any;
}

export const inputField = <T extends Input>(
    opts: InputOpts<T>
): InputField<T> => opts as any;
