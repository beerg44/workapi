const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedb', 'beerg44', '11AHmo11', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
        timestamps: true
    }
});   

//Connection Test
sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;