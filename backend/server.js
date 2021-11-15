const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  //middleware json paser used for access such as req.name etc

const uri = process.env.ATLAS_URI;
mongoose.connect(uri , {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open' ,() => {
    console.log("MongoDB connected Successfully");
})

//adding router to server
const userRouter = require('./routes/user');
const feedbackRouter = require('./routes/feedback');
const servicesRouter = require('./routes/services');
const eventsRouter = require('./routes/events');
const paymentRouter = require('./routes/payment');

app.use('/user', userRouter);
app.use('/feedback', feedbackRouter);
app.use('/services', servicesRouter);
app.use('/events', eventsRouter);
app.use('/payment', paymentRouter);


app.listen(PORT, () => console.log(`server is started on port: ${PORT}`));


