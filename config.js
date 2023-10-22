import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['584127952548', '👑 Mystic - Creador 👑', true],
  ['50499698072', '💫 Mystic - Collaborator 1 💫', true],
  ['51940617554', '💫 Mystic - Collaborator 2 💫', true],
  ['51996089079', '💫 Mystic - Collaborator 3 💫', true],
  ['5218442286089', '💫 Mystic - Collaborator 4 💫', true],
  ['50246028932', '💫 Mystic - Collaborator 5 💫', true],
  ['5212412377467', '💫 Mystic - Collaborator 6 💫', true],
  ['5215533827255', '💫 Mystic - Collaborator 7 💫', false],
  ['59895555511', '💫 Mystic - Collaborator 8 💫', true],
  ['5219993404349'],
  ['584123578936'],
  ['5492266466080'],
  ['5219996125657'],
  ['5218442114446'],
  ['59894808483'],
  ['593980586516'], 
  ['595975740803'],  
  ['5492266613038'], 
  ['595992611272']
];

global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = ' ̴̢̺̙̖̳̺̼͎̹͆̏̀̎͆̂̒̀̿̒͛̊̄̏̉ ̷̨̬̺͚̟̼͎̺̹̽̈́̉̈́͗̐̍̄̉̓͛́͜͝ ̵̨̨̛̘̭̲̣̜͎͔̞̄̋̄͂̽̒̒̌͘ͅ ̴̧̨͍͚̲̖̺̟̻̲̜͌͜ ̵̧̝̯̳͉̗̼͓̥̗̼̓̒͆̓̏̈́͗̕͝ ̷̧̥̹͓͖͈̯̭̋̀̀̑̈́̇͌̐͒̂͛̒̕͠ ̵̡̢̛̛͙̣̦̖͕̭̱͓̻̼̖̮̍̌̑͒̔͆̒̚͘ ̷̡̢̧̛̩̯͍̲̦̣̼̱͙̹̄̀̾̏̌̿͐̽̽͝ ̵͇̺͛ ̸̡̞̭̤̳̼͙͚̬̇̌͊ ̷̙̬̊͂̊͒̔̐̕̚ ̴̨̧̛̳̠͓̳̹̜͓̙̬̘͚͍̆́̉̀̂͆̿̈́̏̃̚ ̷̛̦͓͎͖̖̬̲̗̈́̀͋̀͂̿̆̀̐ ̸̥̳̥̻͍͆͒́̑͛͂̄͛͐̈́̀̕͠ ̷̪̻̺̀̆͑̽̀̓͐̓͋͊̋͛ ̸̛͙̺̮̭͑̊̇̇̀͝ͅ ̵̙̫̝̐̿͒̏͒̀͒͆̚ ̴̼̋̅̌́̍̄͛̀̈́̀͐͂͝ ̶̥̯͚̜̲̺̝̠͕͍̊̇̓͒͘̚͜ͅ ̶̮̗̼̲̘̲̝̬̜̮̜̩̺̗͌̍̊̀̔̽̾̒̕ ̴̠̼̥̳̼̠̪̤̪̙̮̠̻̰̄͑́̐̉̏́̋͐̍͒͜ ̵̧͈͖̭̩̭̠̼̼̲̦̦͎͕̮̌̈́́̃͌͆̐̐̄͊̀̌͋̀̃ ̴̢̠͔̪̺̪̭͕̼̅̆̄̌͌̂͘͜ ̵̟̆͆̍͋̾̚



FAST OBB TEAM DOMINA🇧🇷📲



 ̴̢̺̙̖̳̺̼͎̹͆̏̀̎͆̂̒̀̿̒͛̊̄̏̉ ̷̨̬̺͚̟̼͎̺̹̽̈́̉̈́͗̐̍̄̉̓͛́͜͝ ̵̨̨̛̘̭̲̣̜͎͔̞̄̋̄͂̽̒̒̌͘ͅ ̴̧̨͍͚̲̖̺̟̻̲̜͌͜ ̵̧̝̯̳͉̗̼͓̥̗̼̓̒͆̓̏̈́͗̕͝ ̷̧̥̹͓͖͈̯̭̋̀̀̑̈́̇͌̐͒̂͛̒̕͠ ̵̡̢̛̛͙̣̦̖͕̭̱͓̻̼̖̮̍̌̑͒̔͆̒̚͘ ̷̡̢̧̛̩̯͍̲̦̣̼̱͙̹̄̀̾̏̌̿͐̽̽͝ ̵͇̺͛ ̸̡̞̭̤̳̼͙͚̬̇̌͊ ̷̙̬̊͂̊͒̔̐̕̚ ̴̨̧̛̳̠͓̳̹̜͓̙̬̘͚͍̆́̉̀̂͆̿̈́̏̃̚ ̷̛̦͓͎͖̖̬̲̗̈́̀͋̀͂̿̆̀̐ ̸̥̳̥̻͍͆͒́̑͛͂̄͛͐̈́̀̕͠ ̷̪̻̺̀̆͑̽̀̓͐̓͋͊̋͛ ̸̛͙̺̮̭͑̊̇̇̀͝ͅ ̵̙̫̝̐̿͒̏͒̀͒͆̚ ̴̼̋̅̌́̍̄͛̀̈́̀͐͂͝ ̶̥̯͚̜̲̺̝̠͕͍̊̇̓͒͘̚͜ͅ ̶̮̗̼̲̘̲̝̬̜̮̜̩̺̗͌̍̊̀̔̽̾̒̕ ̴̠̼̥̳̼̠̪̤̪̙̮̠̻̰̄͑́̐̉̏́̋͐̍͒͜ ̵̧͈͖̭̩̭̠̼̼̲̦̦͎͕̮̌̈́́̃͌͆̐̐̄͊̀̌͋̀̃ ̴̢̠͔̪̺̪̭͕̼̅̆̄̌͌̂͘͜ ̵̟̆͆̍͋̾̚';
global.author = '𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙';
global.wm = '𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙 𝖙𝖊𝖆𝖒 𝖋𝖆𝖘𝖙';
global.titulowm = '🤖 ＴＨＥ ＭＹＳＴＩＣ － ＢＯＴ 🤖';
global.titulowm2 = `乂  𝚃 𝙷 𝙴  𝙼 𝚈 𝚂 𝚃 𝙸 𝙲  -  𝙱 𝙾 𝚃  乂`
global.igfg = ' ̴̢̺̙̖̳̺̼͎̹͆̏̀̎͆̂̒̀̿̒͛̊̄̏̉ ̷̨̬̺͚̟̼͎̺̹̽̈́̉̈́͗̐̍̄̉̓͛́͜͝ ̵̨̨̛̘̭̲̣̜͎͔̞̄̋̄͂̽̒̒̌͘ͅ ̴̧̨͍͚̲̖̺̟̻̲̜͌͜ ̵̧̝̯̳͉̗̼͓̥̗̼̓̒͆̓̏̈́͗̕͝ ̷̧̥̹͓͖͈̯̭̋̀̀̑̈́̇͌̐͒̂͛̒̕͠ ̵̡̢̛̛͙̣̦̖͕̭̱͓̻̼̖̮̍̌̑͒̔͆̒̚͘ ̷̡̢̧̛̩̯͍̲̦̣̼̱͙̹̄̀̾̏̌̿͐̽̽͝ ̵͇̺͛ ̸̡̞̭̤̳̼͙͚̬̇̌͊ ̷̙̬̊͂̊͒̔̐̕̚ ̴̨̧̛̳̠͓̳̹̜͓̙̬̘͚͍̆́̉̀̂͆̿̈́̏̃̚ ̷̛̦͓͎͖̖̬̲̗̈́̀͋̀͂̿̆̀̐ ̸̥̳̥̻͍͆͒́̑͛͂̄͛͐̈́̀̕͠ ̷̪̻̺̀̆͑̽̀̓͐̓͋͊̋͛ ̸̛͙̺̮̭͑̊̇̇̀͝ͅ ̵̙̫̝̐̿͒̏͒̀͒͆̚ ̴̼̋̅̌́̍̄͛̀̈́̀͐͂͝ ̶̥̯͚̜̲̺̝̠͕͍̊̇̓͒͘̚͜ͅ ̶̮̗̼̲̘̲̝̬̜̮̜̩̺̗͌̍̊̀̔̽̾̒̕ ̴̠̼̥̳̼̠̪̤̪̙̮̠̻̰̄͑́̐̉̏́̋͐̍͒͜ ̵̧͈͖̭̩̭̠̼̼̲̦̦͎͕̮̌̈́́̃͌͆̐̐̄͊̀̌͋̀̃ ̴̢̠͔̪̺̪̭͕̼̅̆̄̌͌̂͘͜ ̵̟̆͆̍͋̾̚



FAST OBB TEAM DOMINA🇧🇷📲



 ̴̢̺̙̖̳̺̼͎̹͆̏̀̎͆̂̒̀̿̒͛̊̄̏̉ ̷̨̬̺͚̟̼͎̺̹̽̈́̉̈́͗̐̍̄̉̓͛́͜͝ ̵̨̨̛̘̭̲̣̜͎͔̞̄̋̄͂̽̒̒̌͘ͅ ̴̧̨͍͚̲̖̺̟̻̲̜͌͜ ̵̧̝̯̳͉̗̼͓̥̗̼̓̒͆̓̏̈́͗̕͝ ̷̧̥̹͓͖͈̯̭̋̀̀̑̈́̇͌̐͒̂͛̒̕͠ ̵̡̢̛̛͙̣̦̖͕̭̱͓̻̼̖̮̍̌̑͒̔͆̒̚͘ ̷̡̢̧̛̩̯͍̲̦̣̼̱͙̹̄̀̾̏̌̿͐̽̽͝ ̵͇̺͛ ̸̡̞̭̤̳̼͙͚̬̇̌͊ ̷̙̬̊͂̊͒̔̐̕̚ ̴̨̧̛̳̠͓̳̹̜͓̙̬̘͚͍̆́̉̀̂͆̿̈́̏̃̚ ̷̛̦͓͎͖̖̬̲̗̈́̀͋̀͂̿̆̀̐ ̸̥̳̥̻͍͆͒́̑͛͂̄͛͐̈́̀̕͠ ̷̪̻̺̀̆͑̽̀̓͐̓͋͊̋͛ ̸̛͙̺̮̭͑̊̇̇̀͝ͅ ̵̙̫̝̐̿͒̏͒̀͒͆̚ ̴̼̋̅̌́̍̄͛̀̈́̀͐͂͝ ̶̥̯͚̜̲̺̝̠͕͍̊̇̓͒͘̚͜ͅ ̶̮̗̼̲̘̲̝̬̜̮̜̩̺̗͌̍̊̀̔̽̾̒̕ ̴̠̼̥̳̼̠̪̤̪̙̮̠̻̰̄͑́̐̉̏́̋͐̍͒͜ ̵̧͈͖̭̩̭̠̼̼̲̦̦͎͕̮̌̈́́̃͌͆̐̐̄͊̀̌͋̀̃ ̴̢̠͔̪̺̪̭͕̼̅̆̄̌͌̂͘͜ ̵̟̆͆̍͋̾̚.';
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝`;
global.gt = 'fastobb';
global.mysticbot = 'fastobb';
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.waitt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
