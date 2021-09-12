module.exports = ({

    type: "loopCommand", 

channel: "852633441589657630",

code: `

$editMessage[852633461826519057;

    {description:RAM Usage: **$ram / $maxRam MB**

CPU Usage: **$cpu% / 100%**

Пинг: **$ping**

Задержка между сообщениями: **$botping ms**

Пользователей: **$allMembersCount**

Серверов: **$serverCount**

Каналов: **$allChannelsCount**

Текстовых: **$allChannelsCount[text]**

Голосовых: **$allChannelsCount[voice]**

Категорий: **$allChannelsCount[category]**} {color:RANDOM} ]  

`, 

   executeOnStartup: true,

every: 50000

})