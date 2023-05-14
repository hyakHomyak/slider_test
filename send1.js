
  const send = async () => {
 let name = $("input[name=name]")[0].value;
    let email = $("input[name=email]")[0].value;
    let message = $("#message-3b9a")[0].value;
    $("#ok")[0].style.display='flex';
    console.log(name+'\n'+email+'\n'+message)
setTimeout(() => {
    $("input[name=name]")[0].value='';
    $("input[name=email]")[0].value='';
    $("#message-3b9a")[0].value='';
    $("#ok")[0].style.display='none';
    $("#not_ok")[0].style.display='none';
  }, "5000");

  }
document.getElementById("btn_send").addEventListener("click", send)