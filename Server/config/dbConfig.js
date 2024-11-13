const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://shreyaspatil6969:c8SmSjxa_AiC83d@cluster0.9aeow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
   { useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Enable SSL/TLS
    tlsAllowInvalidCertificates: true, // Validate SSL certificate
})
const connection=mongoose.connection;
connection.on("connected",()=>{
    console.log("Mongo DB connected successfully")
})
connection.on("error",(err)=>{
    console.log("Mongo DB not connected ",err)
})

