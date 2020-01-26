import * as s from "../src";

const ageInput = s.inputObject({
    name: "AgeInput",
    fields: {
        id: s.inputField({
            type: s.integer()
        }),
        test: s.inputField({
            type: s.boolean()
        })
    }
});

const user = s.object<{ name: string }>()({
    name: "User",
    fields: {
        name: s.field({
            type: s.string()
        }),
        age: s.field({
            type: s.integer(),
            args: {
                input: s.inputField({
                    type: ageInput
                })
            },
            resolve: (root, args) => {
                console.log(args.input.id + root.name);
                return args.input.id;
            }
        })
    }
});
