
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

async function connect() {
    const dbuser = process.env.DBUSER;
    const dbpass = process.env.DBPASS;
    const dbname = process.env.DBNAME;

    const url = `mongodb+srv://${dbuser}:${dbpass}@test.uufvl.mongodb.net/${dbname}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(url);
        console.log('DB Connection Done.......')
    }
    catch (err) {
        console.log(`Error in DB Connection,` + JSON.stringify(err, undefined, 2));
        process.exit();
    }
}

export default connect;