/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



var uurl="https://api.telegram.org/bot"+bot.token+"/copyMessage?chat_id=@bjsbottg&from_chat_id="+user.telegramid+"&message_id="+request.reply_to_message.message_id;

//Bot.inspect(uurl)
HTTP.post({url:uurl,
body:{reply_markup: {
    "inline_keyboard": [
      [
        {
          "text": "👍",
          "callback_data": "/react 👍"
        },
{
          "text": "👎",
          "callback_data": "/react 👎"
        },
{
          "text": "🔥",
          "callback_data": "/react 🔥"
        }
      ]
    ]
  }
}

})

