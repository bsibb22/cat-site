/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('cats-nextjs');

// Insert a few documents into the sales collection.
db.getCollection('cats').insertMany([
    {
        id: "100",
        imageUrl: "/kepler.png",
        name: "Kepler",
        color: "Orange",
        age: 3,
        price: 1000000,
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
        hasSiblings: false,
        siblingNames: []
    },
]);