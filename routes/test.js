var express = require("express");
var router = express.Router();

const bodyParser = require('body-parser');
const PosterBasic = require("../classes/posterbasic");

router.get("/", async function(req, res, next) {
    const users = await PosterBasic.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
    res.json(users);
});

router.post("/", async function (req, res, next){
    var imdb = req.body.imdb;
    var img = req.body.img;
    var ptype = req.body.ptype;
    var ltype = req.body.ltype;

    await PosterBasic.create({
        ImdbNo: imdb,
        Image: img,
        Type: ptype,
        LanguageType: ltype
    }).then(function(item){
        res.send(imdb + ' was saved to the database!');
    }).catch(function (err) {
        res.send(imdb + ' could not been saved\n w/ Error: ' + err);
    });
    
});

router.put("/", async function (req, res, next){

    var imdb = req.body.imdb;
    var img = req.body.img;
    var ptype = req.body.ptype;
    var ltype = req.body.ltype;
    var oldImdb = req.body.oldImdb;

    await PosterBasic.update({
        ImdbNo: imdb,
        Image: img,
        Type: ptype,
        LanguageType: ltype
    }, { 
        where: {
            ImdbNo: oldImdb
        }
    }).then(function(item){
        res.send(imdb + ' was updated');
    }).catch(function (err) {
        res.send(imdb + ' could not be updated\n w/ Error: ' + err);
    });

});

router.delete("/", async function (req, res, next){

    var imdb = req.body.imdb;

    await PosterBasic.destroy({ 
        where: {
            ImdbNo: imdb
        }
    }).then(function(item){
        res.send(imdb + ' was deleted');
    }).catch(function (err) {
        res.send(imdb + ' could not be deleted\n w/ Error: ' + err);
    });

});

module.exports = router;