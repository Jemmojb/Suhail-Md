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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_35_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJicTVpazAwdEM2SzJuWTc0WXBYcTB3enJ4QVdybTFZZ2RLaHJqRWpDdmVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1U3pXdGM5Z1FNR2ZCakJlNmJhdEl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmNzk5MjRmLTI5YjEtNGRkZC05NWQ5LWZiMThjMzExNzkxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyMDUsXG4gICAgICA3NCxcbiAgICAgIDI1MSxcbiAgICAgIDQxLFxuICAgICAgNzgsXG4gICAgICAzOSxcbiAgICAgIDE2NyxcbiAgICAgIDE0NyxcbiAgICAgIDI1MixcbiAgICAgIDE4NCxcbiAgICAgIDI2LFxuICAgICAgMTE5LFxuICAgICAgMTU3LFxuICAgICAgMjA5LFxuICAgICAgMTUyLFxuICAgICAgOCxcbiAgICAgIDIwMixcbiAgICAgIDMyLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTQzLFxuICAgICAgMTcsXG4gICAgICAxOTEsXG4gICAgICAyMDEsXG4gICAgICAxNjksXG4gICAgICAyNSxcbiAgICAgIDIsXG4gICAgICAxMjMsXG4gICAgICAyMTMsXG4gICAgICAxNzQsXG4gICAgICAxMDMsXG4gICAgICAxNDQsXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDE2MixcbiAgICAgIDMsXG4gICAgICAyNDEsXG4gICAgICAyNTAsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUtDR0pON1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwMzQ5MTIxMzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklORklOSVRFQ09ESU5HVEVDSFwiLFxuICAgIFwibGlkXCI6IFwiNDA0NTg5NjEwMjcxMDM6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnFMNE9zRUVLRFRuN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0aE9YVzg3WW1TZzlRcEd6eVNydEQzN05SSnV4cng5TGI4OHpGOFRiYUVVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInIvUTZ5RG9tWXYvcytoSzhlUWhrZHcxWEVmZTJtT1ZhNWlUcFMwLzZNSEVrcGp3WVB3by9hb3ZCOG9UT0NZeDlDYUFQWDZJUDRQUDhWcHRxNmF5d0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInUyVW8wTmpFdHhIU0xleEJXSkFRdFphaVVTRy9PdWc5VXlrNDJuQjZjL2M1R1N2NUtUYkhucjBocjFoa0QrbWZmaFlleWQwTUQyTjBGRTdqR3VIWER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMzQ5MTIxMzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1OTg4ODk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEphXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyMExQempOcFFxNnB1ckMzUFVFaTE0VkFkaE5iTklSSEJZMjZhOElXUjNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTk3MTEzODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk4ODkwMjI1M1wifSIKfQ=="  // PUT your SESSION_ID 


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
