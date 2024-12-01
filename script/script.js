const cardBackground = document.getElementById("card-crm");
const textAlignment = document.getElementById("card-crm");
const userName = document.getElementById("crm-username");
const socialFont = document.getElementById("social");
const instaGram = document.getElementById("ig");
const steam = document.getElementById("stm");
const github = document.getElementById("git");

cardBackground.style.backgroundColor = "rgba(0,0,0, 0.5)";
cardBackground.style.padding = "10vh"
textAlignment.style.textAlign = "center";
userName.innerHTML = "<h1>Crm</h1>";
userName.style.fontFamily = "Silkscreen, sans-serif";
socialFont.style.fontFamily = "Silkscreen, sans-serif";

instaGram.innerHTML = "Instagram";
instaGram.style.marginTop = "4px";

steam.innerHTML = "Steam";
steam.style.marginTop = "4px";

github.innerHTML = "Github";
github.style.marginTop = "4px";

instaGram.style.fontFamily = "Silkscreen, sans-serif";
instaGram.style.fontWeight = "300";

steam.style.fontFamily = "Silkscreen, sans-serif";
steam.style.fontWeight = "300";

github.style.fontFamily = "Silkscreen, sans-serif";
github.style.fontWeight = "300";