var key = "9cde84bfb7ee4b4db658fc17d61ecf38";
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key="+key;


$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(result){
	console.log(result);
});