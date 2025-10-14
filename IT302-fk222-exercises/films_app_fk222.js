/*
Fariha Khan
10/13/25
Unit 6 Express.js Part 2 Exercise
IT302-451
fk222@njit.edu
*/

const express = require('express');

const { MongoClient } = require('mongodb');

const app = express();

const port = 3000;


// MongoDB connection URL (replace with your MongoDB connection string)

const mongoUrl = 'mongodb+srv://mongodb_user:dbUserPassIT302@cluster0.ixzlgte.mongodb.net/it302';


// Define a function to connect to MongoDB and return the database object

async function connectToMongo() {

    const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });


    try {

        await client.connect();

        return client.db('it302');

    } catch (error) {

        console.error('Error connecting to MongoDB:', error);

        throw error;

    }

}


// Route to get films from MongoDB and return them as JSON

app.get('/films_fk222', async (req, res) => {

    try {

        const db = await connectToMongo();


        // Remove the filter query

        const query = {};


        // Use the query object to find all films

        const films_fk222 = await db.collection('films_fk222').find(query).toArray();


        res.json(films_fk222);

    } catch (error) {

        res.status(500).json({ error: 'Error fetching films from the database' });

    }

});


// Route to get films from MongDB and handle filtering based on the "title" field

app.get('/films_title_fk222', async (req, res) => {

    try {

        const db = await connectToMongo();



        // Get the "title" filter from the query parameters

        const propertyTypeFilter = req.query.title;


        // Define a query object based on the filter, or an empty query if no filter is provided

        const query = propertyTypeFilter ? { title: propertyTypeFilter } : {};


        // Use the query object to find films that match the filter

        const films_fk222 = await db.collection('films_fk222').find(query).toArray();


        res.json(films_fk222);

    } catch (error) {

        res.status(500).json({ error: 'Error fetching filtered films from the database' });

    }

});


// TODO Route to get films from MongoDB and handle filtering based on the "genre" field
app.get('/films_genre_fk222', async (req, res) => {
    try {
        const db = await connectToMongo();

        // Get the "genre" filter from the query parameters

        const propertyTypeFilter = req.query.genre;


        // Define a query object based on the filter, or an empty query if no filter is provided

        const query = propertyTypeFilter ? { genre: propertyTypeFilter } : {};


        // Use the query object to find films that match the filter

        const films_fk222 = await db.collection('films_fk222').find(query).toArray();


        res.json(films_fk222);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching filtered titles from the database' });
    }
});

app.use(express.json())
app.post('/films_fk222', async (req, res) => {
    try {
        // Step 1: Initialize a variable for the MongoClient using the connectToMongo function
        const db = await connectToMongo();

        // Step 2: initialize 4 (or more) variables to extract the title, year, genre and actors from the req.body JSON (the request body)
        const movieDoc = {
            title: req.body.title,
            year: req.body.year,
            genre: req.body.genre,
            actors: req.body.actors
        }

        // Step 3: Call the "insertOne" function with these parameters to the films collection
        const movieResponse = await db.collection('films_fk222').insertOne(movieDoc);

        // Step 4: If the "acknowledged" field from the results is true, respond with status 201 and an appropriate "message" field and value, otherwise status 500 with an appropriate "error" field and value
        if (movieResponse.acknowledged) {
            res.status(201).json({ message: 'Film created successfully.' });
        }
    }
    catch (e) {
        // Step 5: Remember to include a try-catch block inside the entire function that returns a status 500 with an appropriate "error" field and value
        console.error('Error posting film:', e);
        res.status(500).json({ error: e.message })
    }

});

app.delete('/films_fk222', async (req, res) => {
    try {
        // Step 1: Initialize a variable for the MongoClient using the connectToMongo function
        const db = await connectToMongo();
        // Step 2: extract the film title from the req.body JSON (the request body)
        const deleteDoc = {
            title: req.body.title
        }
        // Step 3: Call the "deleteOne" function with these parameters to the films collection
        const deleteResponse = await db.collection('films_fk222').deleteOne(deleteDoc);
        // Step 4: If the "deletedCount" field from the results is 1, respond with status 200 and an appropriate "message" field and value, otherwise status 500 with an appropriate "error" field and value
        if (deleteResponse.deletedCount == 1) {
            res.status(200).json({ message: "Film deleted successfully." });
        }
        else {
            res.status(500).json({ error: 'Error deleting film.'});
        }
    }
    catch (e) {
        // Step 5: Remember to include a try-catch block inside the entire function that returns a status 500 with an appropriate "error" field
        console.error('Error deleting film:', e);
        res.status(500).json({ error: e.message })
    }

});


// Start the server

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});