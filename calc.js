bot.command({

 name: "calc",

 desc: "Выполнение указаного вычисления",

 cat: "Другие",

 usage: "mr:calc <computation>",

 code: `$title[Калькулятор]

 $description[\`$message\` = \`$math[$replaceText[$message; ;;-1]]\`]

 $color[GREEN]

 $onlyIf[$checkContains[$message;(;);1;2;3;4;5;6;7;8;9;-;+;*;/;**;%]==true;{author:Ошибка!:

https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description:Можно использовать только цифры или знаки арифметических действий!} {footer:$username:$authorAvatar} {delete:6s}]

 $argsCheck[>1;{author:Ошибка!:

https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description:Укажите что хотите вычислить!} {footer:$username:$authorAvatar} {delete:6s}]

 $suppressErrors[{author:Ошибка!:

https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description:Ошибка в вычислении!} {footer:$username:$authorAvatar} {delete:6s}]

 `

})