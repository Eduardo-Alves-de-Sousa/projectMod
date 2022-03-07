const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const Jogos = require('../app/models/Jogos');

const models = [User, Jogos];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(dbConfig);

        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();