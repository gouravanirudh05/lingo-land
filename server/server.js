// server.js

import app from './app.js';
import Question from './models/questionModel.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;
