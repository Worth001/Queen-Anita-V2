//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349043703768";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09jY1RoOGNzYmx4cUNvMVgzam1IWlR5c2NSRVJrQkZRS0JEb2Rmc1VGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEgwSElQU3VXQnFNYlJ3ZEE2UFQwTzhDS0dodlNGVHJLRzFSNlZKTklGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSkNJRFdJdnVmSkJCb1FMc1owb2QwNVMvanJSSG01UTVBSGhOZzRpYjNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTnhyeEkyVVJXQzFNUHk1SjMzU2dUOU1jenZHRTNWV0pvWmMzQnVObURVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDZXo1Ri96dGhhRVRVeXBWdFoxRXorYzBLcTFadWI4bEVTRnZURmlBSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJlREFma3BlT1l1ank4cmUxMW9iVU44ZTF2ODBhdGdFV29ra1dZSnNEazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia052VWQ2OXpvaDZmcGRodmhYbksraHFKQWxKbW5LR0ZtdERLZEZZZGJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE1WVkFKZVpxOG5yd20xSnFkUExFenVXbjdXRlJEUkpkc3U1UERTaEl6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIYWVNcXZHYXZ6VGRPVkVEMXBpbm1mMDBnZXpQajV5ajlSMDlGcEJLODR3K3QwNlk4cnNkKytiamtnT3JYMkVYQnNKbGJOL1YwN0xJVHVyRzhaa0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJCb25LQkRTNzRsVHBqUVFORFFHd25WYTU3MENaRVQydWJKWFgzbTBLNHNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNDM3MDM3NjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjFCQTMzNzlGNjA5QTdDMTkwNzUxQkNGQ0VDNzcxREQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTQ0MTI3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ0w3X1hrOHFRT3l4UVNwN240dGdwUSIsInBob25lSWQiOiIwNDI2YWM5OS0xNDAzLTQyOWEtOGNlZi00OWRmOWM5Yjg1NGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2JJaEMrOS9hUHREL0FOcWt1NHM2K0Q2d2RvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmaEQvMi9EWFBENThpQWRhazZNaG54dHl3WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3VlE1UTlaTCIsIm1lIjp7ImlkIjoiMjM0OTA0MzcwMzc2ODozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IldvcnRoIFBldGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZjM3TmNCRU9YSjRMWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmcHNEOWY0NFY3MEh3L052NmVJVkc3TWVRc2w5ZFVkWjN4ajIvcVlhVXdNPSIsImFjY291bnRTaWduYXR1cmUiOiJWYnJLekVkZDY4QS9nNlUveHFRd1VtQW8reVlBZ2dPdVErUCtOUmtpNEs5NVQ4b2tWd3owQ3hWNjZFaWovd25GZmRSSkk1U25ab3hLNk1NYm5vc0dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlZQZmNaSjhnNXgwcUZUZ0laL2RBMWV2aG1KQkNqTkU2bVJLVFkydTdleFg2UVJRQlpXdkc3WmMvTkZsamFyVmEra0NrZE1mOHdnNERrTzJIanBXQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQzNzAzNzY4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDZiQS9YK09GZTlCOFB6YituaUZSdXpIa0xKZlhWSFdkOFk5djZtR2xNRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQ0MTI2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCczEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
