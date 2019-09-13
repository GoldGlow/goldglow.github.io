function setPage(title, page){
	$(".title").html(title);
	$(".content").load(page);
}

$(document).ready(function(){
  $("#intro").click(function(){
    setPage("Intro", "pages/intro.txt");
  });
});