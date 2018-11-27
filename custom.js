$(document).ready(function(){

$("#search_form").submit(function(){

var search_ = $("#books").val();
if(search_=='')
{
 alert("Please enter something in the field");

}   
else{

    var url='';
    var img='';
    var title='';
    var author='';
    	$.get("https://www.googleapis.com/books/v1/volumes?q="+search_,function(response){
    		if(response.totalItems == 0)
    		{
    			alert("Does not exists");
    		}
    		else
    		{
            
    			 $("#result").html("");
          for(i=0;i<response.items.length;i++){
              title=$('<h5 class="center-align black-text" style="font-weight: bold">'+response.items[i].volumeInfo.title + '</h5>');
              author=$('<h6 class="center-align black-text">Author: '+response.items[i].volumeInfo.authors + '</h6>');
              img=$('<img class="aligning card z-depth-4" id="dynamic"><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn blue aligning">Read More</button></a><br>');
              url=response.items[i].volumeInfo.imageLinks.thumbnail;

              img.attr('src',url);

              //entered_text.appendTo("#result");
              title.appendTo("#result");
              author.appendTo("#result");
              img.appendTo("#result");
}
          }
    		});


}

});
return false;
});

