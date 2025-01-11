const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V246qSBT9l3rVc+R+MelkuKuIithqO5mHAgos5SYUIJ747xPa7pxOzq0nGZ4qRdXaa++99qpvIMtxhWzUgfE3UJS4gQT1S9IVCIyBWkcRKsEQhJBAMAZQTXSZ2hQ1HtSXy6mTA9Y8C9N2empvE2q+CWIlnGxJzdDGE7gPQVH7CQ5+A0jhbEMVtcx7zuXk3PYWYxqhW++P+rZit6toNrj6E3w9cXH8BO49IsQlzmKjOKIUlTCxUbeCuPwc/bNKkQETrJrWtQ7SqE2iGLnH3HdTUkBrJ/hJfVifkFRa58/RXx3EkExtZZeikES13UTz+DJ9SRbnOjOnN4aJvNA92nuTfX7Qr3CcoXAaooxg0n267tqczOPt1Z3pdjO/YvXiLY75frFKJAenGfR4ja9TF6lB+knigm3RMzlen7PlgaWDi6jgfeTSzuoy0urtgE5O2kEyrdJRjI/EV+W7Vs7/pe6t/TJqUi/DXcuu7Wu5K+WVPysbwZbYyrAtby1qcZ65eup8jv4py8z5gtmfnmN+YeVzRMsLMaPavfrSiTuxHngn1t6eBV37QB+Suvwdy+stHQizbq1AVYyXUyPcH0gynxQiSuwa5skRRzMciwWE9I6Zndez9dXRiLFz64sWFifkHuhmY5ixWC/V68J1vcipFeXpNaMz6qYhGNP3IShRjCtSQoLzrN8TuSGAYeOhoETktbogJ5PIdfYdbE7GbWaeuYnFexeEXl7mtjjSuEiIksumWIZh/gSGoCjzAFUVCie4InnZOaiqYIwqMP77tVF9ziVKc4JmOARjwPCcSFG8RDMy/Vf1tT1CUsGi+JohAoYgKvPUQWBMyhoNwesFXZIZVZB1QWBZRjIMQ5IZWtQkWdAZWTSVPsP0EXSDU1QRmBZgTIusIFACLzH34f/DQ6UokzNlXpAMjec0g6FMWeFFU+BlndFp7Q882Ps/Q5ChK3nIuC8+Sw9BhMuKPGd1keQwfNf4+08YBHmdEa/LAq1foBKMP2wjQnAWV31mdQbL4IgbpPV5gHEEkwrdhyBEDQ5QjwfkzWHTUI7pLS1fRS90Q3lprPQdPObZ44hEc2yAKPqL5MvoCxfK3BdJCJkvNM1D6EeiJHAQ9OV4OEh/55eCVlzPkWo8d8TVeRpQtK9A199MDFQ+3PmhRFSi8L3KPgzOdbHJzyj7De4y28VOrCiNp06Mxcpe2iO7vq73yyD4gPtQOBh/++7aWh72eDtxt1dlYwf6bvVxflDDmP9RDxnsD4OXvO5jvDWgvx0iAnFS9TZpd8eqcXVjubNw2VqWYsSK9lrh94a9+8Bj0GRJ5ONupQnW84DlUnt72DJ1ehMChXMPWXOOfZUulgc/0N2nn4CAMciWyXxygTfUOuvlaeB52BtdONfUl9zmtNVKuGjaZ62a0LrPVxalblDgiwXNhNaeU8+yUeSzNOYpbaCO5FoaGJFymavxUx/tIZyPwTbXWL12DW89X5o82rVQbzt20WjTcjYrknU21ZGs2u1slJ62BlS6TN/y530S3FKJOVqWgllhZzruTYtg68Pj6LmTOiV+ONSrQyZvLxN+M4+HzCKMXo3+rQN/atR3wVP34QeIt5fjF6JSo2g5eHFObX1MVmQww8luG5ZFNciUpWEdRH5qtSHcpDtWocC9n+QigSTKyxSMQZX6/VQksCLK94H9iQeI0hCknVIUHoHkfc6B0n+aj8H9Xw6cwscRCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "MARINE_TECH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "MARINE_TECH",              
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

