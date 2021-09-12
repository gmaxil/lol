module.exports = ({
name: "box", 
code: `$onlyIf[$getUserVar[box]>0;У вас **нет** ящиков для открытия, вы можете купить их в **магазине** (временно не работает) ] 



$setUserVar[box;$sub[$getUserVar[box];1]]



$title[Маленький ящик] 



$color[$getServerVar[color]]



$description[**Ящик успешно взломан!**

・Выпало: **$random[0;200]**$getServerVar[currency]•**$randomText[0;0;1;0;1] биг боксов**] $footer[By Deadly Software© | все права защищены]



$setUserVar[money;$sum[$getUserVar[money];$random[0;200]]]

$setUserVar[bbox;$sum[$getUserVar[bbox];$randomText[0;0;1;0;1]]]`
}) 
