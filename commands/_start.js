/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start@sozkobot
CMD*/

var text='Hy ['+user.first_name+'](tg://user?id='+user.telegramid+'). I am a simple group management bot.\nUse /cmds to know all commands.'
var buttons=[ {title: "Add me to your group", url: "http://t.me/"+bot.name+"?startgroup=botstart" } ]
if(request.chat.type=="private"){
Bot.sendInlineKeyboard(buttons, text)
}
else{
  Bot.sendMessage(text,{is_reply:true})
  }
