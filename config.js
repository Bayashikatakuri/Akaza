//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaOFrVw35fLtKssW5Z2f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaOFrVw35fLtKssW5Z2f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "27619882319";
global.sudo = process.env.SUDO || "27619882319,27747815326";
global.owner = process.env.OWNER_NUMBER || "27619882319";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JDbW1Hbk5BT04wRjM1ZDFZR21MaFhKQUdRcG91UHNNZDY3cHFwZUtuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGVrR1BFU1d3MmU3UVh4c2hHOXJtblFXckJUNkJFTUtWdXVZMENIemdTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUGdTTk1jZ3lWTG1NbnFIdWpTVkg2Y0pEVXhQSStJc0U5N3pRVm93TFUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVkliTHU1aFBkL0pJRm5VODhoaDlXcUJpem9kczlBaTBwNVVuTmlhTXc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCQXFqMTdJOUh6cUdQU2s0aUpMVHZjTVlQMTVyWk55NVZaZXlWREk5Rmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVHK0pVT2lsT25URTdqQUZkS1JqVHJZRjhNcW1Lc0Y5b3NxeExYNDVyV1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BmY2RDVHZtTS9mZU9rR0ZOVVI3N1dnamhRZ0REZG5VdzNNVnNvdm1Xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkx4dFFmV2RBVytTaE5nYklhUnZkM0RQb2NiQ2pEODVyVDVWc2NXR1h6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNXanR3MjNncnBkdG9BQncrOEZHVFhuN3RzcUVOdUZOQzVJcWF3VGUwdWlSL0Y1N2orNk5EM2QreXFYMmZXNndHKzlWK1RjMzlLN09xK1FzekQvTkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6ImtPY3EyWlFCQVZMZFd5M1JrNkpXRkVEWGtieG4zV3liYWVMdlk5OXRJbkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijc0OEk1NlpBUWZHNE1CV2xpakdLdGciLCJwaG9uZUlkIjoiOTQ0N2M1OTYtOWU5Ni00YjJjLTk5OTItOWY3OTgwZDYwYjZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldpQVBhV2FPRVdXVEJnakRIV3NvdEFQVVhLQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZW94YXZkRW1QbzRRK2RuWXcwZVhtdmxmV1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjc3RFFNTTEiLCJtZSI6eyJpZCI6IjI3NjE5ODgyMzE5OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EYTA1MERFTjdibXJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1xTllyQ05VekNBRmFHbW1qQTFvMXhiTGkzMGRuL2RyUVJYa0VOMEs4eE09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5FS2VYVkhnL1h0Rml3N1NxUjkzdnFnSFFneTIxSkliY1NpcVdPYW85ZkU1WXFYK3dTYkVmdlZiV3h3ZjZOSE1pcFc5MmZJYU1odkdSS1pGWWt0a0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1S2JoTVVaUk9MdUJ0MitUdzZlVXFDaFpaTTdXeElEOTZGSVpSMDRwNEk3b2Ivb0pRSXZWQWVpdGNuZXgrSWtOSXVsb3JiVkNoU3RvenhJbzQyM3RBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjE5ODgyMzE5OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEtqV0t3alZNd2dCV2hwcG93TmFOY1d5NHQ5SFovM2EwRVY1QkRkQ3ZNVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjM5MzgzNX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "➕",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BORUTO_MD™`",
  author: process.env.PACK_AUTHER || "BORUTO_MD",
  packname: process.env.PACK_NAME || "B O R U T O",
  botname: process.env.BOT_NAME || "BORUTO_MD",
  ownername: process.env.OWNER_NAME || "~Fuse",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "B O R U T O").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
