// Create web server
// Created by: Fredrik Lautrup
// Date: 2014-09-08
// Edited: 2014-09-09
// Edited by: Fredrik Lautrup
// Description: This file contains the API for comments. It is used to get comments from the database, add comments to the database and delete comments from the database.

var express = require('express');
var router = express.Router();
var db = require('../database.js');

// Get all comments
router.get('/', function(req, res) {
    db.getComments(function (err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

// Get comments by post id
router.get('/post/:id', function(req, res) {
    var id = req.params.id;
    db.getCommentsByPost(id, function (err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

// Get comments by user id
router.get('/user/:id', function(req, res) {
    var id = req.params.id;
    db.getCommentsByUser(id, function (err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

// Add a comment
router.post('/', function(req, res) {
    var comment = req.body;
    db.addComment(comment, function (err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    });
});

// Delete a comment
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    db.deleteComment(id, function (err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    });
});

module.exports = router;