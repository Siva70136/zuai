// models/index.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const BlogPost = sequelize.define('BlogPost', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    excerpt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = { BlogPost, sequelize };
