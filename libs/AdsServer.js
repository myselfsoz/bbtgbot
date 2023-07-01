let lib_prefix = 'AdsServer';
let API_URL = 'https://api.telegram.org/bot'+bot.token+'/getChatMember';


  
  function checkMembership(chat_id,user_id){
  if(!chat_id){
    chat_id = params;
  }

  Api.getChatMember({
    chat_id: chat_id,
    user_id: user_id,
    on_result: lib_prefix + "onApiResponse",
    on_error: lib_prefix + "onApiError"
  })
  
}

function onApiResponse(){
  Bot.inspect(options);
  //Bot.inspect(getLibOptions())
 return getContent();
}
function onApiError(){ return 0; }
function getContent(){
//  var opts = getLibOptions();
  return options;
}

function isJoined(response){
  var status = response.result.status;
  return (
    (status == "member")||
    (status == "administrator")||
    (status == "creator")
  )
}

publish({
  checkMembership: checkMembership
})

on(lib_prefix + "onApiResponse", onApiResponse)
on(lib_prefix + "onApiError", onApiError)
