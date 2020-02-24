console.log('Module-3 Formative 1');

$(document).ready(function(){

  // accessing key from json file
  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;


  //reading users choice
	document.getElementById('submit').addEventListener('click', function(){
	endPoint = document.getElementById('endpoints').value;
  country= document.getElementById('countries').value;

	  console.log(endPoint, country);

	  displayData(endPoint, country);
  });

      function displayData(ep, count){
      if (count === 'us') {
      var url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`;
    } else if (count === 'canada')   {
       var url =  `http://newsapi.org/v2/top-headlines?country=ca&apiKey=${myKey}`;
     } else if (count === 'au') {
        var url =  `http://newsapi.org/v2/top-headlines?country=au&apiKey=${myKey}`;
      }
  //console.log(ep, count, url);

  $.ajax({
        url:  `http://newsapi.org/v2/top-headlines?country=${count}&apiKey=${myKey}`,
    		type :'GET',
    		data :'json',
    		success:function(data){
    			//console.log(data);
          // console.log(data.photos[0].img_src);

          var i;
          for (i = 0; i < data.articles.length; i++) {
          for (i = 0; i < data.articles.length; i++) {

            document.getElementById('result').innerHTML +=
            // for (j = 0; j < data.articles[i].source.id.length; j++) {
            '<div class="card mx-auto m-2 p-3 col col-sm-6 col-md-3 col-lg-3 mx-3" style="width: 18rem;">' +
            '<img src="' +  data.articles[i].urlToImage + '" class="card-img-top" alt="pic">' +
            '<div class="card-body text-center text-primary">' +
              '<h5 class="card-title">Article Title: ' + data.articles[i].title + '</h5>' +
              '<p class="card-text"><b>Published at</b>: ' + data.articles[i].publishedAt + '</p>' +
              '<p class="card-text"><b>ID</b>: ' + data.articles[i].source.id + '</p>' +
              '<p class="card-text"><b>Name</b>: ' + data.articles[i].source.name + '</p>' +
              '<p class="card-text"><b>Author</b>: ' + data.articles[i].author + '</p>' +
              '<p class="card-text"><b>Description</b>: ' + data.articles[i].description + '</p>' +
              '<p class="card-text"><b>Content</b>: ' + data.articles[i].content + '</p>' +
              '<a href="#" class="btn btn-primary">Go somewhere</a>' +
            '</div>' +
          '</div>';
            }
          }

        },
        error:function(){
    		console.log('error');
    		}

    	});//ajax




};  //Function data ends here

  $('#about').click(function(){
    $('.selects').hide();
    document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML +=
    '<div class="row mt-5 text-center">' +
      '<div class="col col-sm-6 col-md-6 col-lg-6">' +
        '<h5 class="mt-3 ml-3">Vandana Trivedi</h5><br>' +
        '<h6 class="text-justify font-italic font-weight-normal ml-5">Hello, my name is Vandana Trivedi And I am a Web Developer & UX Designer. Basically build websites using HTML, CSS, Jquery, Bootstrap, Javascript, AJAX and JSON & of course PHP.</h6>' +
      '</div>' +

      '<div class="col col-sm-6 col-md-6 col-lg-6">' +
        '<figure class="figure">' +
          '<img src="images/v.jpg" class="rounded-circle w-50 border border-warning" alt="dp">' +
          '<figcaption class="figure-caption font-weight-bolder mx-auto w-25 mt-2"><marquee>Technology Lover</marquee></figcaption>' +
          '<div class="mx-auto">' +
          '</div>' +
        '</figure>' +
      '</div>' +
    '</div>';

  });   // About ends

  $('#news').click(function(){
    document.getElementById('result').innerHTML = '';
    $('.selects').show();
  });  // News tab hide/show ends here

});  //Ends Document.ready function
