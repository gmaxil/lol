module.exports = ({

    name: "user",

    aliases: ['userinformation', 'whois'],

    description: "Know information about a user",

    usage: "userinfo <user>",

    

    code: `$color[RANDOM]

    $thumbnail[$userAvatar[$findMember[$message]]]

    $author[$userTag[$findMember[$message]];$userAvatar[$findMember[$message]]]

    $title[User Information]

    $addField[Bot; $replaceText[$replaceText[$checkCondition[$isBot[$findMember[$message]]==true];true;Да];false;Нет]]

    $addField[Роли;

    $replaceText[$replaceText[$checkCondition[$charCount[$userRoles[$findMember[$message];mentions;/]]>1850];true;Слишком много ролей для показа];false;$userRoles[$findMember[$message];mentions; ]]]

    $addField[Высшая роль; <@&$highestRole[$findMember[$message]]>;yes]

    $addField[ID; $findMember[$message];yes]

    $addField[Платформа; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None];web;Website];mobile;Phone];desktop;PC];yes]

    $addField[Состояние; $replaceText[$replaceText[$checkCondition[$checkContains[$getCustomStatus[$findMember[$message];state];https;discord.gg;.gg;.com;.xyz;.app;.net;.org;.info;.co;.edu;.gov;.tv;.club]==true];true;Hidden];false;$replaceText[$getCustomStatus[$findMember[$message];emoji];none;] $replaceText[$replaceText[$checkContains[$getCustomStatus[$findMember[$message];state];none];true;None];false;$getCustomStatus[$findMember[$message];state]]];yes]

    $addField[Статус; $replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;Offline];online;Online];dnd;Do not disturb];idle;Idle];yes]

    $addField[Дата создания; $creationDate[$findMember[$message]];yes]

    $addField[Присоединился; $memberJoinedDate[$findMember[$message]];yes]

    $addTimestamp

    $footer[By Deadly Software© | все права защищены] 

    $onlyIf[$checkContains[$channelType;text;news]==true;]`

    

})