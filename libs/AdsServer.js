let lib_prefix = 'AdsServer';
let API_URL = 'https://api.telegram.org/bot'+bot.token+'/getChatMember';

function showAds(chat_id,user_id){
  Api.getChatMember({
    chat_id: chat_id,
    user_id: user.telegramid,
    on_result: lib_prefix + 'onApiResponse',
    on_error: lib_prefix + 'onApiError'
  })
  /*
  let parameter = {
    url: API_URL + '?chat_id='+chat_id + '&user_id=' + user_id,
    success: lib_prefix + 'onApiResponse',
    error: lib_prefix + 'onApiError'
  }
  HTTP.get(parameter)*/
}

function onApiResponse(){
  Bot.sendMessage(content);
 return getContent();
}
function onApiError(){ return 0; }
function getContent(){
  var opts = getLibOptions();
  return opts;
}
publish({
  showAds: showAds
})

on(lib_prefix + "onApiResponse", onApiResponse)
on(lib_prefix + "onApiError", onApiError)
