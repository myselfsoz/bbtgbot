/*CMD
  command: /react
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var btns = request.message.reply_markup.inline_keyboard[0]

var rtc = [
  parseInt(btns[0].text.replace("👍", "")),
  parseInt(btns[1].text.replace("👎", "")),
  parseInt(btns[2].text.replace("🔥", ""))
]

for (let i = 0; i < rtc.length; i++) {
  if (!rtc[i]) {
    rtc[i] = 0;
  }
}

var curr_position

if(!params){return}
let num,txt,emoji, reaction,like, dislike,fire
switch (params){
case "👍":
emoji="👍";
reaction="like"
curr_position=0
break;
case "👎":
emoji="👎";
reaction="dislike"
curr_position=1
break;
case "🔥":
emoji="🔥";
reaction="fire"
curr_position=2
break;
}






var reacted = User.getProperty("react_"+request.message.message_id)

if (reacted) {
//Bot.inspect(reacted)
if(reaction==reacted){
rtc[curr_position]-=1;
like="👍"+rtc[0].toString();
dislike="👎"+rtc[1].toString();
fire="🔥"+rtc[2].toString();
User.setProperty("react_"+request.message.message_id, reaction, "string")

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You removed "+reaction+emoji,
  show_alert: false // or false - for alert on top
})

Bot.editInlineKeyboard([ [{title: like, command: "/react 👍"},{title: dislike, command: "/react 👎"},{title: fire, command: "/react 🔥" } ] ], request.message.message_id, chat.id)





User.setProperty("react_"+request.message.message_id, null, "string" );
return
}else{
rtc[curr_position]+=1;
switch(reacted){
case "like":
rtc[0]-=1;
break;
case "dislike":
rtc[1]-=1;
break;
case "fire":
rtc[2]-=1;
break;


}



like="👍"+rtc[0].toString();
dislike="👎"+rtc[1].toString();
fire="🔥"+rtc[2].toString();
User.setProperty("react_"+request.message.message_id, reaction, "string")
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You "+reaction+emoji +" this.",
  show_alert: false // or false - for alert on top
})
Bot.editInlineKeyboard([ [{title: like, command: "/react 👍"},{title: dislike, command: "/react 👎"},{title: fire, command: "/react 🔥" } ] ], request.message.message_id, chat.id)
return
//
//Bot.sendMessage("200")


//Bot.inspect(rtc)






return
}

}else{
rtc[curr_position]+=1;
like="👍"+rtc[0].toString();
dislike="👎"+rtc[1].toString();
fire="🔥"+rtc[2].toString();
User.setProperty("react_"+request.message.message_id, reaction, "string")

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You "+reaction+emoji +" this.",
  show_alert: false // or false - for alert on top
})
Bot.editInlineKeyboard([ [{title: like, command: "/react 👍"},{title: dislike, command: "/react 👎"},{title: fire, command: "/react 🔥" } ] ], request.message.message_id, chat.id)
//
//Bot.sendMessage("200")
}

//Bot.inspect(rtc)

