const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://admin:nofood123456@cluster0-oy9b7.mongodb.net/nofood?retryWrites=true&w=majority'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|b079d17d7ea8c91d4ee237ba8ebdadf1'
    }
}
module.exports = variables;