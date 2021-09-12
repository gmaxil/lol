module.exports = ({

    name: "ejected", 

    code: `$color[$getServerVar[color]]

$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]] $footer[By Deadly Software© | все права защищены] `

}) 