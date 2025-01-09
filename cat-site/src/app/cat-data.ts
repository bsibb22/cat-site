export interface Cat {
    id: string,
    imageUrl: string,
    name: string,
    color: string,
    age: number,
    price: number,
    desc: string,
    hasSiblings: boolean,
    siblingNames: string[]
}

export const cats: Cat[] = [
    {
        id: "100",
        imageUrl: "/kepler.png",
        name: "Kepler",
        color: "Orange",
        age: 3,
        price: 1000000,
        desc: "",
        hasSiblings: true,
        siblingNames: ["Sheldon", "Athena"]
    },
    {
        id: "101",
        imageUrl: "/sheldon.png",
        name: "Sheldon",
        color: "Orange",
        age: 4,
        price: 120,
        desc: "",
        hasSiblings: true,
        siblingNames: ["Kepler", "Athena"]
    },
    {
        id: "102",
        imageUrl: "/athena.png",
        name: "Athena",
        color: "Orange",
        age: 6,
        price: 120,
        desc: "",
        hasSiblings: true,
        siblingNames: ["Kepler", "Athena"]
    },
    {
        id: "103",
        imageUrl: "/bob.png",
        name: "Bob",
        color: "Orange",
        age: 5,
        price: 100,
        desc: "",
        hasSiblings: false,
        siblingNames: []
    },
    {
        id: "104",
        imageUrl: "/ajax.png",
        name: "Ajax",
        color: "Grey",
        age: 1,
        price: 80,
        desc: "",
        hasSiblings: false,
        siblingNames: []
    },
]