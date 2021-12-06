$(document).ready(function() {
  let categoryWall = $('.category-wall');
  const textShow = categoryWall.attr('data-show');
  const textHide = categoryWall.attr('data-hide');

  setTimeout(function(){
  	  categoryWall.each(function(i, element){
		  $(categoryWall[i]).on('click', 'a.btn.btn-primary.btn-block', function() {
		    if ($(this).hasClass("collapsed")) {
		      $(this).text(textHide);
		    } else {
		      $(this).text(textShow);
		    }
		  });

		  if (Number($(categoryWall[i]).attr('data-height')) === 1) {
		    setEqualHeight($(categoryWall[i]).find(".product-layout"));
		    setEqualHeight($(categoryWall[i]).find(".panel"));
		    setEqualHeight($(categoryWall[i]).find(".panel-heading"));
		    setEqualHeight($(categoryWall[i]).find(".panel-body"));
		    setEqualHeight($(categoryWall[i]).find(".panel-footer"));
		  }  	
	  });
  }, 300);

  function setEqualHeight(columns) {
    let block = 0;
    columns.each(function() {
      height = $(this).outerHeight();
      if(height > block) {
        block = height;
      }
    });
    columns.css("min-height", block);
  }
});