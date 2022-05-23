const mongoose = require('mongoose')

const dbConnection = async () => {
    try{
        const db = await mongoose.connect(process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("connection successfully")
    }catch(error){
        console.log(error)
    }
}

module.exports = dbConnection