const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./connect');

class PosterBasic extends Model {}

PosterBasic.init({
    // attributes
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    ImdbNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    Image: {
        type: Sequelize.STRING
    },

    Type: {
        type: Sequelize.STRING,
        allowNull: false
    },

    LanguageType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
    }, {
    sequelize,
    modelName: 'PosterBasic'
});

PosterBasic.sync().then(() => {
    
});

module.exports = PosterBasic;