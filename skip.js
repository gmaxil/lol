module.exports = ({

    name: "skip", 

    code: `$skipSong

Песня успешно выключена $onlyIf[$voiceID[$authorID]!=;Вы не в гс] 

$onlyIf[$voiceID[$clientID]!=;Я не в гс]

$onlyForIDs[$songinfo[userID];Вы не ставили эту песню]`

   
  }) 

module.exports = ({
type: 'musicEndCommand', 

channel: "$channelID", 

code: `Музыка проиграна, выхожу из гс!` 

})



