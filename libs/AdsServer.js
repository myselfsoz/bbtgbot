let lib_prefix = 'AdsServer';
let API_URL = 'https://api.telegram.org/bot'+bot.token+'/getChatMember';

function showAds(){
  let parameter = {
    url: API_URL + '?chat_id='+chat.id + '&user_id=' + request.from.id,
    success: lib_prefix + 'onApiResponse',
    error: lib_prefix + 'onApiError'
  }
  HTTP.get(paramter)
}

function onApiResponse(){ return; }
function onApiError(){ return; }

publish({
  showAds: showAds
})

on(libPrefix + "onApiAnswer", onApiAnswer)
on(libPrefix + "onApiError", onApiError)
