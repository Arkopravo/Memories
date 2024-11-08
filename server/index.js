import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

// bodyparser is now embedded in express...... no need to rewrite specifically
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptMastery:javascriptMastery@cluster0.ebkjv.mongodb.net/';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running perfectly on PORT ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
