function cars(input) {
    const data = {}

    const instr = {
        create: (name, inherits, name2) =>
            (data[name] = inherits ? Object.create(data[name2]) : {}),
        set: (name, color, model) => (data[name][color] = model),
        print: name => {
            const entry = []
            for (const key in data[name]) {
                entry.push(`${key}:${data[name][key]}`)
            }
            console.log(entry.join(", "))
        },
    }

    input.forEach(x => {
        const [command, name, color, model] = x.split(" ")

        instr[command](name, color, model)
    })
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);