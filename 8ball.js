module.exports = ({

    name: "8ball", 

    code: `

$title[Вопрос: $message] 

$color[$getServerVar[color]] 

$description[Шар говорит: $randomText[Невозможно ❌; Предрешено✅; я так не думаю; мои данные говорят нет❌;да; возможно; знаки говорят да👍]] 

$onlyIf[$message!=;Введите сообщение] $footer[By Deadly Software© | все права защищены] `

}) 

