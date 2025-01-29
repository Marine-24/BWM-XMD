const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246jOBT8F7+GnnCHRGppgQQSyJXcs5oHBwxxwtUYCBnl31eku9X9sDPby5Nl43KdqjrnF0hSXCAHNaD/C2QEV5CidkmbDIE+0MsgQAQwwIcUgj6w9JhUU5GFg802EUI9l+YbusNGszPlUbjkRKTqp8T1OiPxFTwYkJWnCHt/AAw82R3gPL2anZskkHy5iX098Huq4YVG74Dsids5rk+l6Hqv4NEiQkxwEg6zM4oRgZGDmgXE5Hv0ZeeEaXDa4mYbDN2hIMCx3SRCBEczbmjma7a0OYvQHt5svkc/ZDnX2ixzy9E0596sO/thxiNXt6Px7Cgk99o50sV21GBt+Ea/wGGC/LGPEopp823dDwa6165cOLPNMla8dXTsLfhFd0KWgZ3uzjMuamQzZ6sry36POB5wna5ajd18ss6KvDgd5uVOzGEWB8tBPJoMXNU5j4Wa7JdfiS/IR1au/0d3cTSSL5fujL/w1fEUnaNU6d7vyDifw/1S0HS7vNO5q0YDq/4e/eM558V1g3l7HzfBCg2azvZ2tfcONw/sY5NFunCPipu9qL1P+pCW5E8sT46RVLITCyUyuV6Pnm+s0Enm4dIU0mHCHvXMISuxU41dv3OYr2PL3MTBssOrA3x3Jv7Ku06IMB6E2/p0EfT6MHTmh4v2+qzoipqxD/rcgwEEhbigBFKcJs89TmIA9KsV8giiT3kBbabCrN7IHD3c7cnuPimMfDLeodOgF+00TolWdSdTq/Uxmr4CBmQk9VBRIH+EC5qSZoqKAoaoAP2/fzIgQTf6Zlz7nMAxIMCkoJukzKIU+h+ufhxCz0vLhK6axDPaBSKgz35uI0pxEhatjmUCiXfGFTLOkBagH8CoQA8G+KjCHmrxQA1f6MLZlss5DqEmCadekHHLlvI5Td5+4VheDthe74UTffFFDGThBSqK8sJzgcRyPC8rSAAMwO890975rYUGys63qstnKbwK971dsI4mVqpmr9SnDW/aI4J80KekRAw4Qe9aZuv0ipI/4FaTESxqc3pb7cLlJT9ELl2klssaxeEL7punoP/rc04Zqd/iLQ7Wwpm6E8CA+BlB3FbOS6IicLzIc3KvL/F/FT/qVkiYZT8SRFvcd9HbGz6iEEdFW+QcOYkkWkObpBKpLUsbh5oRauDTpI+0v6VpfpWKW3A1sWMV17TerwnCrN4VsvtKKkJoL73gdhsEV1tIX/8FBPQBjKAlzZXyasK4IobOhZ25N6iIgFCdXR01i3dKZW4o2tZBUiEzMhI1Ty8jVQu0FLvx3Joefctw1uaAjNTJIbo0ld62xkdYvj7WhbxkeQcKo3iKJrNNNeE9qM7zXrlZ1JE8VtZTpeGPxJoFmY5jWVqMbm5XhDk+jEJHiepqp92Nszc1j4fA1noBKyr4vQ+fcyB6n7/42SG/3qMVYPQcZwlsLfovc76mnH0wXzDeB+RvkqSvs/lpupf0Az4T25marCykVAt6sseWp7GFN6OR6i0FyfBl8Hj8ZEAWQRqkJG5tSHySYh8wIIIF1T4bdY1jVFAYZ6DPKYLK8bKgyAyIGy3LVhTSj/4GWvstLjvw+AdmIRIW+wcAAA==',
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

