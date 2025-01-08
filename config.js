const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUa4+qSBT8L/1V5g4PETGZZBFEEV8IiM7mZtNAAy0PeTQoTtzfvkFnMpNN7t1ZPnWa7jrVVXXOG8hOuEI6asHoDeQlbiBB3ZK0OQIjMK6DAJWAAj4kEIxAq13E4pll3L4gKY5ls4VHl8/nyokU3RejlT+2glQvdXdnvIAbBfLaTbD3G8Ag8eZFqeZz23xFsyLdKCGf9Ewe8+yK9wpbUZwksS8b24xfwK1DhLjEWTjJI5SiEiY6ajcQl9+jj6XnrYOqWZ9oHM9MzEW6vQZ966qi1xAz22i5E81kGhw26Tfp80oozyq7koOVzNnzqqHpJF+JjALpIFadnI6j425FBj3DftCvcJghX/NRRjBpv627POcRc7Q3+0lS7KI4nS695WB4iuwI5Xi/izIj2hrxerd3Dt/U3dF7+xmamk50XLwuBnpl9TeRCRWH7Fd1nQ3H4fWw53kxHX4lvik/shL/H93bpXw8cbNEaKa70lDMVW/nZ3tn3STqrDR64Wsz42UxPRpZ/D361la3HJx6mR0WAlu6/cV+PPPO+7qN29DecoetrJYpb0Y7+pM+JHX5O5aLfhNbeTtsN3hvFerWjCacK6X8bBay10Ljdr40pQfajMvK0phG5y1Ue6w2Ebix+LxUz4c0siyj0scrzqOHiF67m0JUwpf7i2LUaj4YMTcKlCjEFSkhwafsvscIFIB+YyKvROQuL7i2fWUrS4kj6L3JTvCOiF40rdd7nruwmMxY8ZyuUwYKrXx+ARTIy5OHqgr5M1yRU9kuUVXBEFVg9OdPCmToQh7GdeU4hgIBLitiZ3WenKD/4erHT+h5pzojZpt5crdAJRjRn9uIEJyFVadjncHSi3CD5AiSCowCmFToRgEfNdhDHR4oJL8NU7rcwvpqa7bq6n/lptFRjk7Z4wgdsB4LRe9JoMXgqe97/BP0GPppyPsCCuCQ9aEAKIDfe6a780sLL3Ssxt5indULgb5MtQ1cjfeuyMXn4d2Gh/aoRD4YkbJGFHChF9e5dYpR9htc9lAsTVXx6DXRG4XUChcu0jnTE7b0F9yHp2D09jmn5JPf4W0EfbkcTixAgfQeQdy9nOX7AsewfZYZiCOu/0f149wJCfP8R4YIoEAGu9Pg767Eu/7dZR8RiJOqmwsb/cLmmjLRrkNRqKZTaRJKciiBT78+gv8I1npt7DZnG58mVXbM+At6bpaxd1GqgSzyGleqrlc0Oimi+B6sf4OAEcin8XmyRHtjMF60cd6uFCEXD7Xr5ByckpVDNhdjWTcu8RYyc8QSr6srxGvrZJ9YaD5ud/rCMXQ8J690HRMcsFWeKdJLV+2Rm6/Fimt9ZrC4l49Luh5sRW2nHC3XQInLOC7M2WH4PPT01Dws1NmrdeANT+9rRiHZ2kC25euQ5NbYkw+CXgSSH089sZ5tx8ajJe8jIXkfxfjeLG/vKQswuk+2d/3/06fPwNM36gvG+6z8RajG1jFWraGqFePFvM/3vH0jXOezpSGswwaZq8HF4fSyLeHpdQlut58UyBNIglOZghGAmV+esA8okMCKSJ89a+EUVQSmORgxAjfgGJoVRQqkrZTnJoHko9WB1H0rfwJu/wAyzWFiBggAAA==',
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
    CHATBOT : process.env.PM_CHATBOT || 'yes',
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

