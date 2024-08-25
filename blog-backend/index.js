// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const blogPostsRouter = require('./routes/blogPosts');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', blogPostsRouter);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
