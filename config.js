const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW2+rOBj8L35NegKEQIhUaYGQCySBhFxZHR0ZMMS5cLENhFT97yvSVq1WOme7PFmAx+OZ+eYFJCmmyEI1GLyAjOASMtQsWZ0hMABaEUWIgDYIIYNgAHTLPgrO3k63twPv9sS7R2bhUF4MC1MznehiqpV5yCX7PNo8g9c2yAr/goM/AIrTTRHdTcgZkW8Ot0qdj8v1uLCkuL9wdO4ib9e08vZB3zCewWuDCDHBSWxkR3RFBF4sVDsQk+/R5xzF8K+TKKXK/jBBi9Md91FaSPd4L/i9jgUn14KD6Va5LL9H3wxue4nbXevFIlKmfFkudZYHzOjYLl+7NbUP/gbP48AbT9/oUxwnKJyGKGGY1d/WfTeeCNHEm2I9WvkigqscV5P6rHej+eEqz9xspi6l0aoVd/vfI373Z8dsZGmVsrRvxu5+Ts8dc1gkB6+mNhJUMZx6nVWqnmr1K3GHfGTl/H90L4ZEXagTPC9zl28txNDODl3FXWu5oWl1OFaUOY199bY7fzM22mG7WBILLg4X/bgf8yfe4Uqzv5NvruGQzvJuaeyqEy4fxp/0ISvIn1ierLGvb4TebKWFiNS9bX3tHxC57fihdB/HB2/EkdzZjm1vep/w3aNsFpHWF7tere5Np6Mvoa8dgtxF2ZFH7kRG+eSKq+fHjc6onoZgwL+2AUExpoxAhtPk8Y6X2wCGpYsCgthDXlBOnZnp0tae394DLw16YrezsRd7f9fR6X081wRp16qFqrKrZ9AGGUkDRCkKJ5iylNRzRCmMEQWDv3+2QYJu7M245rgu3wYRJpRtkiK7pDD8cPXjIwyCtEiYWyeB3iwQAQPu8zViDCcxbXQsEkiCIy6RfoSMgkEELxS9tkGIShygBg8o6Rb+EsXeWhYOv8TetuvO03LZUD6mydsvviSIUtCNnvphn3sSpT56UgRZfoJhz+dkIUJIiUAb4PeZafb81sLRYRY4+4mtVWS4tBPP7Z8931YDjUwfNrxpjwgKwYCRArWBD4Nzka3TM0r+gOuxjSO5czVeK/KoU/p5xwp0MjWREXzBffMUDF4+e0pPwwZvtdsd+N2sD9rg+oggbm4u9ES5ywuiwEvKQFD+oj+qRkiYZT8SxBrcd9GbHSFiEF9oU8LO+CZk06FhQZzM6HisGrGqxyr4NOkj7W9psu3l1qk2ODVockp6N9Qp5+fgNqSSrvSmXTLyg7y0WH48P9L0bxAwAJK3xI4fzFW1U3Tzux4ya+uSeZRKqxuC92Mql1iklhQs9U7JFbNTxTpGEaxIT+5u52PD9yYGZ45RK+wkdNYqK3560JrR+AjL18OEU1yrc0fa3RGlu2OLc93NWrYVmN4q7b44YbGoWhUcXZcCnbRKlG+v8OT0lqwlZsqxZnELupP1yLC2oo3GZIY544bjtzl89MDlvX/xY0Je3qMVYfSoswRe0X+b8zXl3Gv7C8Z7Qf6uudan82jdH01zbWaKvVawL+W7OZkvZTsukbuQbruuRWoCU28OXl9/tkF2gSxKyRUMAExCkuIQtMEFUqZ+DuoaXxFl8JqBAS93xT4n9yWuDa61mmUug+xjvoHaPDMRgdd/AIkIF9r7BwAA',
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

