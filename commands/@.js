/*CMD
  command: @
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

var bts_id = "5420779379"; //Get It From @AdsServerBot After Adding Your Bot
HTTP.get( {
url: "https://tg.ads-server.site/?page=showads&id="+bts_id+"&action="+request.from.id
})
