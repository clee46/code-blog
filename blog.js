var blog = {};
blog.library = [];

blog.createAll = function() {
  this.rawData.sort(function (a, b) {
    if (a.publishedOn > b.publishedOn) {return -1;}
    if (a.publishedOn < b.publishedOn) {return 1;}
    return 0;
  });
  for (var i = 0; i < this.rawData.length; i++) {
    var temp = new Article(this.rawData[i]);
    this.library.push(temp);
    temp.toHTML();
    temp.tagsDropDown();
  }
};
blog.truncateArticles = function() {
  $('article .postBody p:not(:first-child)').hide();  // hides all posts
  $('main').on('click', '.read-on', function(event) {
   event.preventDefault();
  $(this).siblings('.postBody').find('p:not(:first-child)').toggle();
 });
};

$(document).ready(function() {
  blog.createAll();
  $('#post').remove();    // remove the original article template
  blog.truncateArticles();

  $( ".cross" ).hide();
  $( ".menu" ).hide();

  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  // event handler for hamburger menu
  $('.menu > ul > li > a').click(function(event){
  		event.preventDefault();//stop browser to take action for clicked anchor

  		//get displaying tab content jQuery selector
  		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

  		//find actived navigation and remove 'active' css
  		var actived_nav = $('.nav-tabs > li.active');
  		actived_nav.removeClass('active');

  		//add 'active' css into clicked navigation
  		$(this).parents('li').addClass('active');

  		//hide displaying tab content
  		$(active_tab_selector).removeClass('active');
  		$(active_tab_selector).addClass('hide');

  		//show target tab content
  		var target_tab_selector = $(this).attr('href');
  		$(target_tab_selector).removeClass('hide');
  		$(target_tab_selector).addClass('active');
      $( ".menu" ).hide();
  });

  // event handler for tab menu
  $('.nav-tabs > li > a').click(function(event){
  		event.preventDefault();//stop browser to take action for clicked anchor

  		//get displaying tab content jQuery selector
  		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

  		//find actived navigation and remove 'active' css
  		var actived_nav = $('.nav-tabs > li.active');
  		actived_nav.removeClass('active');

  		//add 'active' css into clicked navigation
  		$(this).parents('li').addClass('active');

  		//hide displaying tab content
  		$(active_tab_selector).removeClass('active');
  		$(active_tab_selector).addClass('hide');

  		//show target tab content
  		var target_tab_selector = $(this).attr('href');
  		$(target_tab_selector).removeClass('hide');
  		$(target_tab_selector).addClass('active');
  });
  // event handler for category filter menu
  $('select[id="category"]').change(function(){
    $('#author').find('option:first').attr('selected', 'selected'); // reset other menu
    $('main').find('article').show();
    if ($(this).val() !== 'none'){
      $('.postCategory:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
  // event handler for author filter menu
  $('select[id="author"]').change(function(){
    $('#category').find('option:first').attr('selected', 'selected'); // reset other menu
    $('main').find('article').show();
    if ($(this).val() !== 'none'){
      $("article:not(:contains(" + $(this).val() + "))").hide();
    }
  });
});
