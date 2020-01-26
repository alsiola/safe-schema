import * as s from "../src";

const user = s.object<{ name: string }>({
    name: "User",
    fields: {
        name: s.field({
            type: s.string()
        }),
        age: s.field({
            type: s.integer(),
            args: {
                id: s.inputField({
                    type: s.integer()
                })
            },
            resolve: (root, args) => {
                console.log(args.id + root.name);
                return args.id;
            }
        })
    }
});
