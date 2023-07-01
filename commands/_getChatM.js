/*CMD
  command: /getChatM
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var ll=Libs.AdsServer.showAds(chat.chatid,user.telegramid)
Bot.inspect(ll)
Bot.inspect(content)
