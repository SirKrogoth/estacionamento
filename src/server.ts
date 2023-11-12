import app from './app';
import database from './database/database';

(async () => {

    try {
        await database.sync();
        console.log(`Ronning database ${process.env.DB_NAME}`);
    
        app.listen(process.env.PORT, () => {
            console.log(`Database is running on port ${process.env.PORT}`)
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();