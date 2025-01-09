const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWW+rOBj9L35NehP2JFKlAQJZgAAhS+noPhgwS8JqDAmp8t9HpK1uNdK90+HJAnx8fJbvDeRFUiMNdWD2BkqctJCgfkm6EoEZkJowRBgMQQAJBDMw2bxKuknmx2nW+Hm3GteN0OhZeVPV3cBd+JKSDUZh0hTH6Bnch6BsvDTx/wBo3Cq9DD2BN4VjuFADfo4z1tesuJqYnIFVe002ez6jzKX/DO49IkxwkkdKGaMMYZhqqLNggr9HX1P3aLqevxTpjhQyszdGtb609C6mOj7wIREsFAym7oEw/vfoH+ZexSrwet2Ga8nJY4x0TOo1ebVP+Sqau2UVVlXlJhN6/06/TqIcBasA5SQh3bd1H6uD0ahpptx2EXWGi12eWkdGrZooii1EDJVR1t1kY4wV8XvEVV8/mNrm1O08f7OZSG2z8a0d2d/sWhS4sxKbHmO0heUf3K/ELfyZlfP/0X2xSiIm45aWDuUqCAYYk9WUPpHVyDMdNj9KZUCVfhwbqvI9+i90QKPrIlEOQrpHcRGvj0sjki/biF6J0gjPxVN3O+cXRql/0YekwX9i+SLtB6+DPGzXjDRtdZcXxSl9WujXq9e66UB+uVE2q2cetZrTJyqdy0eZSS5sHU7OzdSxPFvmxa100UcmvWQ2c5GScCBHz48bnVG3CsCMug8BRlFSEwxJUuSPdzQ/BDBoHeRjRB7yghO6adtLrsnOfsXrqTVxdPvm3KTBLiu8bieM7YkyJrEt2JdnMAQlLnxU1yhYJjUpcGeguoYRqsHs759DkKMreTeuP46hhiBMcE32eVOmBQw+Xf38CH2/aHLidLkv9wuEwWz86zUiJMmjutexySH246RFcgxJDWYhTGt0H4IAtYmPejygu1WUQs51nOONUCnjslstF3vKcZG//8IhJPDIo554bsw9sZDln6YCRT9BesogXqA4mhXAECQfnen3/NZCLDmmIlc1s97EPMOmWiWdGevKqpTxsOFde4RRAGYEN2gIPOifm3JXnFH+B9zr2tNgLPGOyYojQ+PGdSxxjZCr5Vfcd0/B7O3XnJKLoMebHzSKMZgJGILsEcGkvznNsQJD0SxN8dMZM/2r/nHphYRl+SNHpMf9EL3fESACk7QGMyBb2pUuV3PF1MqRUC8WohuJctSr+mnSZ9rf02Sa9sG67JNCqfNTzl3RqDXO/nVe8/KUWzFY9fyq1UgVnx9p+jcImAFPOPGN93KYIjyS9FtB1qrSTPhSUqjuElo3h7G3XYbSWMoE9mJY48veT/ckc6vqvG0o1ri0SrYQrOXq5cBOo0tlK9K8r8ZnWL4eRoccHdpnKb5KrwI8decyMGF3Cq1aWhjVBZ41SVGXG28gSW1rh6Z+yaFf8QFWBnDDywJyhdSZFFAYS7R421f+JgpF8b2HjzmQfszf5NGQt49ohQl6jLMcZui/zfma8vF9+AXjY0D+JknS7nRWdxN1VUn6muUG/ksr3NZLwxbMqEXOhr8eGQ13GBavBrjffw5BmUISFjgDMwDzABdJAIYghTURfxV1l2SoJjArwYwSGJ5lxpO+ylknlqVDIPnsNxD7ZxMswf0fqYPD2PsHAAA=',
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

