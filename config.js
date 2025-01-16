const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3rVPnIVMelk8AIKoo3K8TKZTAoosEALpIqbHf99gt2d7oc5Z3reKnVZe9Vaa+9XQFJMkYUaMHwFWY5LyFC7ZE2GwBCMijBEOeiCADIIhiA15ztyhlJ8PAbF/ko7h0iDC38k1vuCvx1sGelTpf9ieRfuGdy7ICu8M/Z/A7gYqMuN88ItRpHAH+JSC7dLky7VLF4OtrNM0VwxMA++LeuDZ3BvESHOMYmm2QldUA7PFmpeIM6/R1+y9NjYkbWnUDhXw2O1m1M17wU/NR0X6Z4Iawcyf1cr+uF79AeXzUotuILx00GzmFodZz3WjEO5Kq3SvfTFyWxuTQQSXfnpG32KI4KCeYAIw6z5tu79GWHJJC3cnwbLg22WNSe9k5ipdVvqon84HNm1X8YbbXH2v0d8NvL0nRbMkkO8xVOk6yeS2pPxTiHKopbCUc+sg6JxI6JLX4m/5B9ZSf6P7txkYjZrXE6pXJVaZ7obBLpjNVN7UofJCQ6cWVytHG7LC9H36EvGmLPysSyI1U80nxTSvFDHJ005uN5esaE29aaLeFRVDvY/6UNW5L9jGW3UlR2YR/oy+NmTE7ned0p/5R95LYtv/uh6dQ9SCeXQ3vVPtcQbHWUl42C5CUt5GQ9SaBDTCA0oHG0812PeddVmjqvnx48S1MwDMOTvXZCjCFOWQ4ZT8tjjuwAG5Qb5OWIPdYF3FaqGpoP0MrOLcN1UJ+2sZ2S+L7w5lhx4I5OmVDWppO4z6IIsT31EKQpmmLI0b2xEKYwQBcM//+oCgmr25ltbTeS7IMQ5ZS4psnMKgw9TPw6h76cFYZuG+ON2gXIw5D63EWOYRLSVsSAw90+4ROMTZBQMQ3im6N4FASqxj1o8sJOu+d+bRlxXBo5jWijuxDOdlvIpJW9XRAg9KVTUJ1XihSdJEbgnqHD8kyBICvJ8DnIwAF2A31umffNLB6/rXvWim72jwOKRtjKP1L7J+TbxUvvhwpv0KEcBGLK8QF3gQT8psm2aIPIb3L2+FWOFj9fceTLQETQr78CnQUGs6Avum6Vg+Po5psZp0OLtJyqv9cUl6ILLI4G4/bkgS4rIC5LA99WhzP1Bf1StkDDLfhDEWtx30dsXAWIQnykYgvEKWkSWjKkJj9miMgzNjbRxpIFPkz7C/pamVSLTOkx0bBk0Sav9NkeYG/XE7LaRaQRNxw/rehImppg+/wsIGIJJPVeNg6L4TTGajYLe6ST6WRLx0d6zbvuaOU7JjVabaLU9DnYdDTmaOVB3vj/e3bRLb3HkXEHTQ1xfUllfbpa7Me5kI+e5rfYWlq/FgiOqsKaa673gBh2iGvoVqdKpbPLVIh1kwkGD88uO3jaVLeQ92bNDfsquftPHBdM3DnF5bm8ei/XRM+trfdMdGnDxexs+xsD5ffziR4e8vkcrxOgxzQhsLfovc76mnLt3v2C8z8dfJGm0zVaevZdHB3zKTcvWub6YMi1U+z5XeHMDu7PZwHdEeRz0wf3+VxdkZ8jCNL+AIYAkyFPcdsMZUqZ9NuoWXxBl8JKBIa+ICidKKi/f/wGmMJb73QcAAA==',
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

