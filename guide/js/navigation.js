function setPage(title, page){
	$(".title").load(title);
	$(".content").load(page);
}

$(document).ready(function(){
  $("#intro").click(function(){
    setPage("Intro", "pages/intro.txt");
  });
});