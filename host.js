module.exports = ({

  name: "host",

  cat: "Информация",

  desc: "Выдает задержку, потребление памяти в боте",

  usage: "m/host",

  code: `$title[Статистика]

  $description[> **Задержка бота:** $replaceText[$replaceText[$checkCondition[$ping<50];true;$pingms :white_circle:];false;$replaceText[$replaceText[$checkCondition[$ping<100];true;$pingms :green_circle:];false;$replaceText[$replaceText[$checkCondition[$ping<150];true;$pingms :yellow_circle: ];false;$replaceText[$replaceText[$checkCondition[$ping<300];true;$pingms :orange_circle: ];false;$replaceText[$replaceText[$checkCondition[$ping<500];true;$pingms :red_circle: ];false;$replaceText[$replaceText[$checkCondition[$ping<700];true;$pingms :black_circle: ];false;ауе]]]]]]

> **Задержка между сообщениями:** $replaceText[$replaceText[$checkCondition[$botping<50];true;$botpingms :white_circle:];false;$replaceText[$replaceText[$checkCondition[$botping<100];true;$botpingms :green_circle:];false;$replaceText[$replaceText[$checkCondition[$botping<150];true;$botpingms :yellow_circle: ];false;$replaceText[$replaceText[$checkCondition[$botping<300];true;$botpingms :orange_circle: ];false;$replaceText[$replaceText[$checkCondition[$botping<500];true;$botpingms :red_circle: ];false;$replaceText[$replaceText[$checkCondition[$botping<700];true;$botpingms :black_circle: ];false;ауе]]]]]]

> **RAM:** $replaceText[$replaceText[$checkCondition[$ram<20];true;$rammb :white_circle:];false;$replaceText[$replaceText[$checkCondition[$ram<50];true;$rammb:green_circle:];false;$replaceText[$replaceText[$checkCondition[$ram<100];true;$rammb :yellow_circle: ];false;$replaceText[$replaceText[$checkCondition[$ram<150];true;$rammb :orange_circle: ];false;$replaceText[$replaceText[$checkCondition[$ram<300];true;$rammb :red_circle: ];false;$replaceText[$replaceText[$checkCondition[$ram<400];true;$rammb :black_circle: ];false;ауе]]]]]]

> **CPU:** $replaceText[$replaceText[$checkCondition[$cpu<2];true;$cpu% :white_circle:];false;$replaceText[$replaceText[$checkCondition[$cpu<10];true;$cpu% :green_circle:];false;$replaceText[$replaceText[$checkCondition[$cpu<35];true;$cpu% :yellow_circle: ];false;$replaceText[$replaceText[$checkCondition[$cpu<50];true;$cpu% :orange_circle: ];false;$replaceText[$replaceText[$checkCondition[$cpu<65];true;$cpu% :red_circle: ];false;$replaceText[$replaceText[$checkCondition[$cpu<80];true;$cpu% :black_circle: ];false;ауе]]]]]]

]

$addTimestamp

$color[GREEN]`

})