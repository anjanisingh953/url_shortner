const app = require('./src/app')
require('dotenv').config();
const dbConnect = require('./src/db/database')
const PORT = process.env.PORT
dbConnect(process.env.MONGO_URI)
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
    
})