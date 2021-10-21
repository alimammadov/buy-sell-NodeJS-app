const yargs = require('yargs');
const backend = require('./backend.js')

//Add comand
yargs.command({
    command: 'add',
    describe: 'Add a new product',
    builder: {
        title: {
            describe: 'Product title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Product description',
            demandOption: true,
            type: 'string'
        },
        price: {
            describe: 'Product price',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        backend.addProduct(argv.title, argv.description, argv.price)
    }
});
//Remove comand
yargs.command({
    command: 'remove',
    describe: 'Remove a product',
    builder: {
        title: {
            describe: 'Product title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        backend.removeProduct(argv.title)
    }
});
//Products comand
yargs.command({
    command: 'show',
    describe: 'Show all products',
    handler() {
        backend.getAllProducts()
    }
})

yargs.parse()