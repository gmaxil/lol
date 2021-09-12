

module.exports = ({

 name: "play",

 aliases: ["p"],

 code: `

$playSong[$message;1m;{title:Error}{description:**:no_entry: Произошла ошибка при запросе**}{color:RED}]

$onlyIf[$message!=;{title:Error}{description:**:no_entry: Мне нужно имя что бы найти** \`песню\`...}]

$onlyIf[$voiceID!=;**:no_entry: Вы не в голосовом канале**]

$cooldown[5s;Подождите **%time%** для использования команды]

$author[:arrow_forward:Добавление в очередь;]

$color[#add8e0]

`

})

module.exports = ({
type: 'mmusicStartCommand', 

 channel: "$channelID",

 code: `$author[Щас играет;https://bigsmokebot.ga/music.png]

$description[**__Автор__**: [$songInfo[publisher]\\]($songInfo[publisher_url])

**__Песня__**: [$songInfo[title]\\]($songInfo[url])

**__Продолжительность__**: $songInfo[duration]

$thumbnail[$songInfo[thumbnail]]

$footer[Заказ от $userTag[$songInfo[userID]];$userAvatar[$songInfo[userID]]]

$color[#add8e6]`

})