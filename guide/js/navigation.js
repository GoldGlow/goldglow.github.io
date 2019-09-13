function setPage(title, page){
	$(".title").html(title);
	$(".content").load(page);
}

$(document).ready(function(){
  $("#intro").click(function(){
    setPage("Introduction", "pages/intro.txt");
  });
  $("#scriptingGui").click(function(){
	setPage("The Scripting GUI", "pages/scriptingGui.txt");
  });
  $("#manualScripting").click(function(){
	setPage("Manual Scripting<br/><span style=\"font-size:16px;\">(It's more intimidating than it really is)</span>", "pages/manualScripting.txt");
  });
});