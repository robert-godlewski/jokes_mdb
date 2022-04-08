const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    console.log("findAllJokes in data: ", req.body)
    Joke.find({})
        .then((allJokes) => {
            res.json({joke: allJokes})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.findOneJoke = (req, res) => {
    console.log("findOneJoke in data: ", req.body)
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.createNewJoke = (req, res) => {
    console.log("createJoke in data: ", req.body)
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.updateJoke = (req, res) => {
    console.log("updateJoke in data: ", req.body)
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updateJoke => {
            res.json({joke: updateJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.deleteJoke = (req, res) => {
    console.log("deleteJoke in data: ", req.body)
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

//module.exports = {findAllJokes, findOneJoke, createNewJoke, updateJoke, deleteJoke}
