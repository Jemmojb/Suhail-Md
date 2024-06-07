const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254103491213" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254103491213";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254103491213";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254103491213,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICA2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSm8wYWZhUTNQaVhhbzY2enlRUDVlK3p1NnRPWFZVWk5MOHk1VlNrR1IwOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT2dxUi0xQ2ZSWTZ3OFhFaFRtbzJaZ1wiLFxuICBcInBob25lSWRcIjogXCI0YTc1YTVmMi0yOWI3LTRhMDMtOGQyYS00ZTczMTgxZDhjNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgODYsXG4gICAgICAyOCxcbiAgICAgIDE2MixcbiAgICAgIDY4LFxuICAgICAgMTI2LFxuICAgICAgMjAyLFxuICAgICAgNzgsXG4gICAgICAxODIsXG4gICAgICAxMzEsXG4gICAgICAyMixcbiAgICAgIDI0NixcbiAgICAgIDcsXG4gICAgICA0LFxuICAgICAgMjgsXG4gICAgICAxMTcsXG4gICAgICA1LFxuICAgICAgMTA3LFxuICAgICAgODAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgNjUsXG4gICAgICA1NSxcbiAgICAgIDEwOSxcbiAgICAgIDE2MyxcbiAgICAgIDE1OCxcbiAgICAgIDE1NCxcbiAgICAgIDE0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE5NCxcbiAgICAgIDIsXG4gICAgICAyNixcbiAgICAgIDMyLFxuICAgICAgMjE4LFxuICAgICAgNzUsXG4gICAgICA3LFxuICAgICAgNjcsXG4gICAgICA2NCxcbiAgICAgIDM3LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZMNE9zRUVLdm1pN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0aE9YVzg3WW1TZzlRcEd6eVNydEQzN05SSnV4cng5TGI4OHpGOFRiYUVVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIisvci94VWhkRytaUXZ6UTJ2c3B0Ry9yUjNXVXVOeVVJblJpdVpyNTg2elk5UUZTY0dEem1TNm1ncS96RGMvZy9nTnl1N0s5VVJqdUNnb1R1Rm9CVkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZ6RWduRUhNWjloN3RmVjc5d0ZlNkgwMjhmSEc3NG9OL1ZXNzFVdjcrNlFFeWg1VnJ3WjJDZGNBT2lPT1d4R2dYN0NrekJFZlBQOW8xS1lKOFdDZUJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAzNDkxMjEzOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSU5GSU5JVEVDT0RJTkdURUNIXCIsXG4gICAgXCJsaWRcIjogXCI0MDQ1ODk2MTAyNzEwMzo0MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMzQ5MTIxMzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzYwODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzc2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJScFZoNXFERkU2RG1Dc2dRbTJVQlFNMHluQ3BEUk92dDVPWE9BN3Y2Y3FnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTk3MTEzOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc2MDgxNzc4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "infinite",
  ownername:process.env.OWNER_NAME|| "infinitetech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
