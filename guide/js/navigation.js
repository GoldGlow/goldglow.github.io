function setPage(title, page){
	$(".title").html(title);
	$(".content").load(page);
}

function toggleNPCFunctions(){
	if($("#functionsList").css("display")==="none"){
		$("#functionsList").css("display","block");
	}
	else{
		$("#functionsList").css("display","none");
	}
}

function setFunctionValues(title, fileName){
	$("#scriptTitle").html(title);
	$("#scriptConsole").load("pages/console/"+fileName+".txt");
	$("#scriptInfo").load("pages/info/"+fileName+".txt");
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
  $("#prewrittenFunctions").click(function(){
	  $(".title").html("Prewritten functions");
	  $(".content").load("pages/prewritten.txt",function(responseText, textStatus, XMLHttpRequest){
		  $("#npcFunctions").click(function(){
				toggleNPCFunctions();
			});
			$("#achievement").click(function(){
				setFunctionValues("Achievement", "achievement");
			});
			$("#playSong").click(function(){
				setFunctionValues("playSong", "playSong");
			});
			$("#setCurrentSong").click(function(){
				setFunctionValues("setCurrentSong", "setCurrentSong");
			});
			$("#checkRoute").click(function(){
				setFunctionValues("checkRoute", "checkRoute");
			});
			$("#updatePos").click(function(){
				setFunctionValues("updatePos", "updatePos");
			});
			$("#doubleNPCBattle").click(function(){
				setFunctionValues("createDoubleNPCBattle", "doubleNPCBattle");
			});
			$("#npcBattle").click(function(){
				setFunctionValues("createNPCBattle", "npcBattle");
			});
			$("#notification").click(function(){
				setFunctionValues("dialogNotification", "notification");
			});
			$("#losDialog").click(function(){
				setFunctionValues("LoSDialog", "losDialog");
			});
			$("#blockDialog").click(function(){
				setFunctionValues("openBlockDialog", "blockDialog")
			});
			$("#repeatableQuest").click(function(){
				setFunctionValues("repeatableQuestDialogs","repeatableQuest");
			});
			$("#blockLight").click(function(){
				setFunctionValues("setBlockLight","blockLight");
			});
			$("#blockModel").click(function(){
				setFunctionValues("setBlockModel","blockModel");
			});
	  });
  });
  $("#shopsAndInventories").click(function(){
	setPage("Shops and Inventories", "pages/inventories.txt");
  });
  $("#commands").click(function(){
	setPage("Commands", "pages/commands.txt");
  });
});