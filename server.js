const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({

token: "NzExODQ5MzE0NTE0ODk0ODU4.XsI_Vg.caJcR22QpaTDoMAEofQcTI3ecGU", //Discord Bot Token

prefix: "m/" //Customizable

})

bot.onMessage() //Allows to run Commands

bot.command({

name: "ping", //Trigger name (command name)

code: `$ping Пинг!` //Code

})

bot.variables({
    
    prefix: "m/", 
    
    errorcol: "RED",
    
    color: "GREEN" 
    
   }) 



bot.command({
    name: "eval", 
    code: `$eval[$message] $onlyForIDs[718085164030361600;Только для разработчика] `

   }) 

bot.loadCommands(`./commands/`)

bot.command({
    name: "load", 
    code: `$updateCommands $addCmdReactions[✅] $onlyForIDs[718085164030361600;] `
    
   }) 

bot.variables({

    

color: "RANDOM",

    

money: "0", 

    

currency: "<a:ALMAZ:801854772633665556>",
    
    box: "0",
    
    bbox: "0"

    

   }) 

