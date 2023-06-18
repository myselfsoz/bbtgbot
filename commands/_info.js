/*CMD
  command: /info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /info@sozkobot
CMD*/

//Bot.inspect(request.reply_to_message)

if (request.reply_to_message) {
  Bot.sendMessage(
    "*First name * :  " +
      request.reply_to_message.from.first_name +
      "\n*Last name * : " +
      request.reply_to_message.from.last_name +
      "\n*Username* : @" +
      request.reply_to_message.from.username +
      "\n*Telegram Id* : `" +
      request.reply_to_message.from.id +
      "`",
    { is_reply: true }
  )
} 
else {


Bot.sendMessage(
    "*Your Info* -\n_First name _ :  " +
      request.from.first_name +
      "\n_Last name _ : " +
      request.from.last_name +
      "\n_Username_ : @" +
      request.from.username +
      "\n_Telegram Id_ : `" +
      request.from.id +
      "`",
    { is_reply: true }
  )

}

