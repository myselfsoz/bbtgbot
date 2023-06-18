/*CMD
  command: /cmds
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /cmds@sozkobot
CMD*/

Bot.sendMessage("*Currently available commands* :\n/start - check bot status \n/id - to know your id \n/info - to know your telegram info \n/getAdmins - get group Admins list \n\n*Owner* Commands : \n/promote - make new admins _[reply]_\n/demote - remove admins _[reply]_\n\n*Admin* Commands: \n/ban - ban a user from the group without giving him the possibility to join again using the link of the group _[reply]_\n/unban - unban a banned user _[reply]_\n/kick - bans a user from the group _[reply]_")
