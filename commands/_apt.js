/*CMD
  command: /apt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var newJoined=request.new_chat_members
 

if(newJoined.length>0){
let fname = newJoined[0].first_name;
Bot.sendMessage("Hy ["+fname +"](tg://user?id="+newJoined[0].id+").\nWelcome to the chat.",{is_reply:true});
}
