var title = document.createElement('title')
title.innerHTML = "NYT"
document.head.append(title)

var para = document.createElement('p')
para.setAttribute('id','p1')
document.body.append(para)


var artsbutton = document.createElement('button')
artsbutton.setAttribute('type','button')
artsbutton.setAttribute('class','btn btn-primary')
artsbutton.setAttribute('data-toggle','collapse')
artsbutton.setAttribute('data-target','#collapseExample')
artsbutton.setAttribute('aria-expanded','false')
artsbutton.setAttribute('aria-controls','collapseExample')
artsbutton.innerHTML ="ART SECTION"
artsbutton.setAttribute('onclick','showarts()')
para.appendChild(artsbutton)

var moviesbutton = document.createElement('button')
moviesbutton.setAttribute('type','button')
moviesbutton.setAttribute('class','btn btn-primary')
moviesbutton.setAttribute('data-toggle','collapse')
moviesbutton.setAttribute('data-target','#collapseExample')
moviesbutton.setAttribute('aria-expanded','false')
moviesbutton.setAttribute('aria-controls','collapseExample')
moviesbutton.innerHTML ="MOVIE NEWS"
moviesbutton.setAttribute('onclick','showmovies()')
para.appendChild(moviesbutton)

var fashionbutton = document.createElement('button')
fashionbutton.setAttribute('type','button')
fashionbutton.setAttribute('class','btn btn-primary')
fashionbutton.setAttribute('data-toggle','collapse')
fashionbutton.setAttribute('data-target','#collapseExample')
fashionbutton.setAttribute('aria-expanded','false')
fashionbutton.setAttribute('aria-controls','collapseExample')
fashionbutton.innerHTML ="FASHION NEWS"
fashionbutton.setAttribute('onclick','showstyle()')
para.appendChild(fashionbutton)

var generalbutton = document.createElement('button')
generalbutton.setAttribute('type','button')
generalbutton.setAttribute('class','btn btn-primary')
generalbutton.setAttribute('data-toggle','collapse')
generalbutton.setAttribute('data-target','#collapseExample')
generalbutton.setAttribute('aria-expanded','false')
generalbutton.setAttribute('aria-controls','collapseExample')
generalbutton.innerHTML ="GENERAL BRIEFING"
generalbutton.setAttribute('onclick','showbrief()')
para.appendChild(generalbutton)

var bookbutton = document.createElement('button')
bookbutton.setAttribute('type','button')
bookbutton.setAttribute('class','btn btn-primary')
bookbutton.setAttribute('data-toggle','collapse')
bookbutton.setAttribute('data-target','#collapseExample')
bookbutton.setAttribute('aria-expanded','false')
bookbutton.setAttribute('aria-controls','collapseExample')
bookbutton.innerHTML ="NEWS ON BOOKS"
bookbutton.setAttribute('onclick','showbooks()')
para.appendChild(bookbutton)

var magbutton = document.createElement('button')
magbutton.setAttribute('type','button')
magbutton.setAttribute('class','btn btn-primary')
magbutton.setAttribute('data-toggle','collapse')
magbutton.setAttribute('data-target','#collapseExample')
magbutton.setAttribute('aria-expanded','false')
magbutton.setAttribute('aria-controls','collapseExample')
magbutton.innerHTML ="NEWS ON MAGAZINES"
magbutton.setAttribute('onclick','showmagazine()')
para.appendChild(magbutton)


var businessbutton = document.createElement('button')
businessbutton.setAttribute('type','button')
businessbutton.setAttribute('class','btn btn-primary')
businessbutton.setAttribute('data-toggle','collapse')
businessbutton.setAttribute('data-target','#collapseExample')
businessbutton.setAttribute('aria-expanded','false')
businessbutton.setAttribute('aria-controls','collapseExample')
businessbutton.innerHTML ="BUSINESS NEWS"
businessbutton.setAttribute('onclick','showbusiness()')
para.appendChild(businessbutton)



var div1 = document.createElement('div')
div1.setAttribute('id','collapseExample')
div1.setAttribute('class','collapse')
document.body.append(div1)

var div2 = document.createElement('div')
div2.setAttribute('id','')
div2.setAttribute('class','card card-body')
div1.appendChild(div2)






async function showarts() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 console.log(datajsonmain)

	 //arts inside arts
	 var artsofarts = datajsonmain.filter(function (n){
        return n.section=='arts';
    });
	// console.log(artsofarts)
var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="MUSIC AND OTHER ARTS"
div2.appendChild(lb1)
createcards(artsofarts);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}

async function showmovies() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 console.log(datajsonmain)

	//movies in arts
var movies = datajsonmain.filter(function (n){
	return n.section=='movies';
});	

var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="MOVIE NEWS"
div2.appendChild(lb1)
createcards(movies);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}

async function showstyle() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 

//style in arts
var style = datajsonmain.filter(function (n){
	return n.section=='style';
});

var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="FASHION NEWS"
div2.appendChild(lb1)
createcards(style);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}
async function showbrief() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 

//bref in arts
var brief = datajsonmain.filter(function (n){
	return n.section=='briefing';
});
var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="GENERAL NEWS"
div2.appendChild(lb1)
createcards(brief);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}

async function showbooks() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 

//books in arts
var books = datajsonmain.filter(function (n){
	return n.section=='books';
});
var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="NEWS ON BOOKS"
div2.appendChild(lb1)
createcards(books);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}
async function showmagazine() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 

//magzine in arts
var magazine = datajsonmain.filter(function (n){
	return n.section=='magazine';
});
var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="NEWS ON MAGAZINES"
div2.appendChild(lb1)
createcards(magazine);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}


async function showbusiness() {
	try
	{
       var artsnews = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cuKpT4hD5CRGMoYObM0wAIR72mzWr6In')
      
	  var datajson = await artsnews.json()
	  datajsonmain = datajson.results 
	 

//business in arts
var business = datajsonmain.filter(function (n){
	return n.section=='business';
});
var lb1 = document.createElement('label')
lb1.setAttribute('class','lab1')
lb1.innerHTML="BUSINESS NEWS"
div2.appendChild(lb1)
createcards(business);	 
}
catch (err) {
	console.log('fetch failed', err);
  }
}



//function to create cards

	
	function createcards(datar)
	{

	console.log("hi")
	 console.log(datar)
	  var n=0
	 var column = 3
	var nrows = Math.ceil(datar.length / column)

	console.log(nrows)
        
		for (let i = 0; i < 3; i++) 
		{
			let row = document.createElement('div')
	 		row.setAttribute('class','row')
	 		div2.appendChild(row)
			
		for (let j = 0; j < 3; j++) 
			{
			
				let col = document.createElement('div')
				col.setAttribute('class','col-lg-4')
				

				var card = document.createElement('div')
 			card.setAttribute('class','card')
				
				
	 			col.appendChild(card)

				var cheader = document.createElement('h4')
	 			cheader.classList.add('card-header','text-center')
				cheader.innerHTML = datar[n].title
	 			card.appendChild(cheader)

		var cardBody = document.createElement('div')
	 			cardBody.classList.add('card-body', 'card-bg', 'text-center')
				card.appendChild(cardBody)

				var flag = document.createElement('img')
				flag.src = datar[n].multimedia[0].url
	 			flag.classList.add('card-img-top')
	 			cardBody.appendChild(flag)

				var content = document.createElement('div')
				content.classList.add('h5')
				content.setAttribute('id','ctl')
				content.innerHTML = datar[n].abstract + "\n" + datar[n].byline +"\n" + datar[n].created_date
			

				cardBody.append(content)
	
				
 			var fread= document.createElement('a')
                 fread.setAttribute('type','text')  
	 			
	 			fread.innerHTML="Click for full article"
	 			fread.setAttribute('class','fullread')
	 			fread.setAttribute('href',""+datar[n].short_url)
				 cardBody.append(fread)
				 
				
	 			n++
				
                 row.appendChild(col)
				
			}
	 		div2.appendChild(row)
	 	}
	}
	