const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', ( req, res) => {
    const numberOfCards = cards.length;
    const flashcardId = Math.floor (Math.random() * numberOfCards)
    //generate a random number use math.random
    res.redirect(`/cards/${flashcardId}`)
    //plug that unmber into url and used to move to different page
});
//created a new route using the router.get method

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if( !side) {
        res.redirect(`/cards/${id}?side=question`)
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text };
    if( side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if(side === 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    //since question and answer are properties on json


    res.render('card', templateData);
});

module.exports = router;