module.exports = ({

    name: "server", 

    code: `$title[Сервер] 

$description[Пользователей: $membersCount 

В сети: $membersCount[$guildID;online] 

Не в сети: $membersCount[$guildID;offline]

Не беспокоить: $membersCount[$guildID;dnd] 

Не активен: $membersCount[$guildID;idle] 

Каналов: $channelCount 

Текстовых: $channelCount[text] 

Голосовых: $channelCount[voice] 

Эмодзи: $emojiCount

В бане: $banCount

Описание сервера: $serverDescription]

$color[RANDOM] $footer[By Deadly Software© | все права защищены] `

}) 