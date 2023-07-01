let lib_prefix = 'AdsServer';
let API_URL = 'https://api.telegram.org/bot'+bot.token+'/getChatMember';

function showAds(){
  let parameter = {
    url: API_URL + '?chat_id='+chat.id + '&user_id=' + request.from.id,
    success: lib_prefix + 'onApiResponse',
    error: lib_prefix + 'onApiError'
  }
  HTTP.get(parameter)
}

function onApiResponse(){ return; }
function onApiError(){ return; }

publish({
  showAds: showAds
})

on(lib_prefix + "onApiAnswer", onApiResponse)
on(lib_prefix + "onApiError", onApiError)
