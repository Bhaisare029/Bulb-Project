// Bulb "ON" javaScript:-

// var Bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   Bulb.style.backgroundColor = "yellow";
// });

// "EventListener" ke jo baad click banta hai or uske baad hai function lagte hai usse function ki body ke andar hum
// woh likhte hai code jo hum chahte hai jab ye event ho uske baad chale means jab bhi "h1" par click hoga tab ye
// function ke andar likha hua code chalega

//Bulb ko "off" karne ke liye ek or button banni padegi kya?  = Nahi dusri button toh nahi banyege
// kya koi aisa "EventListener" nahi hota hai kya jisse ki aapn do bar click kare hota hai
// Ek cheez hoti hai "Double click" or ek cheez hoti hai "do bar click"
// "Double click" means ek bar click kar diya
// "Do bar click" means ki ek bar click kara or phir thodi der bar phir click kara
// "Double click" ka toh use nahi karege hum

//  IMPORTANT LINE:-
// Hum click naam ka evenListeren bhi use nahi karege aapn toh karege kya?
// Answer = Yaha se start karege javaScript ke logic use karna
// Me ek variable bana rahi hu flag naam ka jiski value hai zero
// Me direct bulb ko on nahi karna chahti hu pehle check karo means "If" aayega jaha check a ya waha par if aayega
// Me if ke andar condition likhti hu agar mera flag hai bara-bara hai zero ke toh mere backgroundColor ki value "YELLOW"
// kar dena
// jab-jab me button pe click karti hu toh mera function chalta hua dikhta hai "Changed color"woh har bar check kar raha
// hai flag ki value zero hai
// me yaha pe flag ki value ko kar deti hu 1 isse kya hoga ?
// Answer= isse ye hoga ki jab me again button pe click karungi toh again function run hoga lekin jab function run hoga
// or woh yaha pe ja kar check karega ki kya is ki value zero hai flag ki value ho gayi hai 1 toh ye code mujhe chalta
// hua nahi dikhega
// jab mere flag ki value thi zero toh "color changed" ki number bhi dikh raha tha but jese hi mene flag ki value
// 1 ki toh number nahi bad raha hai 1 hone pe iske andar jayega hi nahi or jab me click karti jaungi toh mujhe kuch bhi nahi
// dikhai dega

var Bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    Bulb.style.backgroundColor = "yellow";
    console.log("Changed color!");
    //   me flag ki value ko change kar ke kar deti hu one
    flag = 1;
  } else {
    Bulb.style.backgroundColor = "white";

    console.log("Color will not changed!");
    flag = 0;
  }
});
// flag koi keyword nahi hai jo naam likhna hai likh do
