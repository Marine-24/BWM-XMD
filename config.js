const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU226rOBT9lZFfoScQbiFSpSGXEnIDQhICo/NgwBAXMBQMKan67yPSVu1Ic850eLJss/byWmvvF0AKXKMV6sD4BZQVbiFF/ZJ2JQJjMGniGFWABRGkEIyB9yBIS7K/ICoIg4vucczDedmiBi+erOe9cZTtU3y1bNlIR/fglQVlE2Q4/A2gZErZVbgOCtkJ0z2vGtRHqRRl28o0J6l5CPh1rcerrrV7wB4R4gqTZF6eUY4qmK1QZ0FcfY8+MyvWhr0pNy70zSgb7Q6aJotZGU7y5dRoUWclJ1eONUaov0ef7Nr1LglR6OdPE+8SOJ7Ja0p1tqfKnJgrddIMq80aHZ70wxv9GicERUaECMW0+7buzFStJfc5MffQzvWr6umJeV1EM+KV+VmvVI8scKQVk8q1v0ccYi0YuJXI5OYEmebJ3j4z4XnBhOpugZcmmVnzWIrNpyX+B3Gr+shK+n9017Q1QwZkm2TZgzhJc/FJr54kh0eW3ToJrzykYlHUIsnT+ffoMzFjbIwgHi2eINV3R1+erBZpELRJu4/nnDDXdX6UpdH2MvqkD2lT/Y7lXgrJqAxky9W1lRqaQ/0yTLl4s25Wze5kd8PU0WzvNGRsb1qR03ygl7uLHfNRNDvuXD9cLk2l8ropc/COR265TB8frxP7/vaiFHVGBMb8KwsqlOCaVpDigvR7w+GQBTBqHRRWiN7kBYc5UZHnLXN3UQ7smVOo53Xlu916rciuY7n16jFyVw4vNpd7wIKyKkJU1yha4JoWVbdBdQ0TVIPxXz9ZQNAzfTOuLyfwLIhxVdMDacqsgNGHqx+HMAyLhlCnI+G0X6AKjLnPbUQpJknd69gQWIVn3KLpGdIajGOY1eiVBRFqcYh6PHC0ytigE2G/ukuP4qbTLqeppvWUzwV5u6KoXCgJUXQnDyV0J0qceAdVDt7FkRLGchwqIZIAC/B7z/T//NLC69aQTc6hq/h6ElsfkZPqc2SmdtS72fCmPapQBMa0ahALAhimTbkvUkR+g/t4uIhBCB1buqKAeinmn/etYEhKmHzBffMUjF8+59S0iHq8oe6vZ+J6AViQ3yKI+5cPJVHhOGnED1V+LPxZ/7j0OsKy/EEQBSwgsL8MfHyFf1hVETUhrftq71b0OBGiEGc1GIPpqjnXrT2bG92IrGtd1zaJNk16rT+s++iBt4ypI0VKOmsq6wdGEPPV0T8Om/wqh5po+6RNk2DCl6YfhDP7/l9Abim1yL5sp+1y7mezh6aeObI4MpOD4Jtbvjmbw6OjzpfqhjNcy3OTfBs6FjqTXJlcT9Mil07y6mof8kW9HDRetXPTczC73PfV3iL0tdg8SfL9Oe5Cb+5G5lR0VTLg5AczCBx8UevT9erPXWXtB1EmhLqHlcR5UMXRYsn46yG/zXhqKNBn2nBPZ7OEpEkRP96KfUyH7H0q41vfvLwHLsboNuTevfgvyz6jz72yXyDep+Yv4jWJY5PxNo+X5pxZlFnizD1GVVkzRDPnuq9Ihn6J4D53BY0Dr68/WVBmkMZFlYMxqPMAAhZksKbaZ+vucY5qCvMSjHlFEEc8z8siC/JOK0uHQvrR8UDrvxWxwOvf0gdSaA0IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

