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
});