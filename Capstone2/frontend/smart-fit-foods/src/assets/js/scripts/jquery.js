jQuery(document).ready(function () {
  jQuery(".btn-menu").on('click', function () {
    jQuery(".modal-menu").css('animation', 'downtop 0.5s ease-in-out forwards')
    jQuery(".modal-menu").css('display', 'block')
    jQuery(".overlay").css('display', 'block');
  });

  jQuery(".input-baidang").on('click', function () {
    jQuery(".modal-baidang").css('animation', 'downtop 0.5s ease-in-out forwards')
    jQuery(".modal-baidang").css('display', 'block')
    jQuery(".overlay").css('display', 'block');
  });

  jQuery(".overlay").on('click', function () {
    jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(".modal-baidang").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(".modal-congthuc").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(this).css('display', 'none');
  });
  jQuery(".cls").on('click', function () {
    jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(".modal-baidang").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(".modal-congthuc").css('animation', 'topdown 0.5s ease-in-out forwards')
    jQuery(".overlay").css('display', 'none');
  });

  jQuery('.btn-food').on('click', function () {
    jQuery('.btn-food').removeClass('active');
    jQuery(this).addClass('active');
  });

  jQuery('.carousel-food').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 2,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var items = jQuery(".containers .list-menu ul li");
  var numItems = items.length;
  var perPage = 5;

  items.slice(perPage).hide();

  jQuery("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    cssStyle: "light-theme",

    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;

      items.hide()
        .slice(showFrom, showTo).show();
    }
  });

  jQuery(".avatar").click(function () {
    jQuery(".profile").toggle();
    jQuery(".profile").css('animation', 'show 0.5s ease-in-out forwards')
  });
  // Show more content

});
jQuery(".show-more").click(function () {
  if (jQuery(".text").hasClass("show-more-height")) {
    jQuery(this).text("(Show Less)");
  } else {
    jQuery(this).text("(Show More)");
  }

  jQuery(".text").toggleClass("show-more-height");
});
jQuery('.text').each(function () {
  let textHeight = jQuery(this).height();
  if (textHeight >= 70) {
    jQuery('.show-more').css('display', 'block');
  } else {
    jQuery('.show-more').css('display', 'none');
  }
});
jQuery('.fa-ellipsis').click(function () {
  jQuery('ul.setting-sub').slideToggle();
});
// HInh anh
jQuery('.file-upload').change(function () {
  var file = jQuery(this)[0].files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    jQuery('.profile-pic').attr('src', e.target.result);
  }
  reader.readAsDataURL(file);
});


// Show more commnet cua trang blog
jQuery(".item-blog").slice(0, 3).show();
if (jQuery('.item-blog').length > 3) {
  jQuery(".loadMore2").css("display", "block");
  jQuery(".loadMore2").on('click', function (e) {
    jQuery(this).css("display", "none");
    jQuery(".item-blog:hidden").slice(0, 3).slideDown();
    if (jQuery(".item-blog:hidden").length == 0) {
      jQuery("#load").fadeOut('slow');
    }

    // Hide comment
    jQuery(".loadHide2").css("display", "block");
    jQuery(".loadHide2").on('click', function (e) {
      jQuery(this).css("display", "none");
      jQuery(".loadMore2").css("display", "block");
      jQuery(".item-blog:visible").slice(3, jQuery('.item-blog').length).slideUp();
      if (jQuery(".item-blog:visible").length == 0) {
        jQuery("#hide").fadeOut('slow');
      }

    });
  });
}

// Rate star
jQuery('#stars li').on('mouseover', function () {
  var onStar = parseInt(jQuery(this).data('value'), 10);
  jQuery(this).parent().children('li.star').each(function (e) {
    if (e < onStar) {
      jQuery(this).addClass('hover');
    } else {
      jQuery(this).removeClass('hover');
    }
  });
}).on('mouseout', function () {
  jQuery(this).parent().children('li.star').each(function (e) {
    jQuery(this).removeClass('hover');
  });
});
jQuery('#stars li').on('click', function () {
  var onStar = parseInt(jQuery(this).data('value'), 10);
  var stars = jQuery(this).parent().children('li.star');
  for (i = 0; i < stars.length; i++) {
    jQuery(stars[i]).removeClass('selected');
  }
  for (i = 0; i < onStar; i++) {
    jQuery(stars[i]).addClass('selected');
  }
});
//list recipe
// Hover video
jQuery(".image-video").hover(function () {
  jQuery(".video").css({ 'transform': 'scale(1)' });
  jQuery(".link-video i").css({ 'transform': 'scale(1)' });
}, function () {
  jQuery(".link-video i").css({ 'transform': 'scale(0)' });
  jQuery(".video").css({ 'transform': 'scale(0)' });
});
// Showmore comment cua list-mon an
jQuery(".item").slice(0, 3).show();
if (jQuery('.item').length > 3) {
  jQuery(".loadMore").css("display", "block");
  jQuery(".loadMore").on('click', function (e) {
    jQuery(this).css("display", "none");
    jQuery(".item:hidden").slice(0, 3).slideDown();
    if (jQuery(".item:hidden").length == 0) {
      jQuery("#load").fadeOut('slow');
    }

    // Hide comment
    jQuery(".loadHide").css("display", "block");
    jQuery(".loadHide").on('click', function (e) {
      jQuery(this).css("display", "none");
      jQuery(".loadMore").css("display", "block");
      jQuery(".item:visible").slice(3, jQuery('.item').length).slideUp();
      if (jQuery(".item:visible").length == 0) {
        jQuery("#hide").fadeOut('slow');
      }

    });
  });
}


jQuery(window).on("scroll", function () {
  if (jQuery(window).scrollTop() > 50) {
    jQuery(".navbar").addClass("active-header");
  } else {
    jQuery(".navbar").removeClass("active-header");
  }
});

jQuery('.avatar-header').click(function () {
  jQuery('.drop-down-menu').slideToggle();
});

jQuery('#file-upload').change(function () {
  var files = jQuery(this)[0].files;
  for (var i in files) {
    if (files[i].type.match('image.*')) {
      var reader = new FileReader();
      reader.onload = function (e) {
        jQuery('#preview').append('<img src="' + e.target.result + '"/>');
      };
      reader.readAsDataURL(files[i]);
    } else {
      alert("Không hỗ trợ định dạng này");
    }
  }
  // Chat bot
  jQuery(".icon-chatbot").on('click', function () {
    if (jQuery(".chatbot-container").css('opacity') === '0') {
      jQuery('.chatbot-container').css('animation', 'show 0.5s ease-in-out forwards');
    } else {
      jQuery('.chatbot-container').css({ animation: 'hide 0.5s ease-in-out forwards' });
    }
  });
  // Close Chat bot
  jQuery(".close-chat").on('click', function () {
    jQuery('.chatbot-container').css({ animation: 'hide 0.5s ease-in-out forwards' });
  });
  jQuery('.avatar').click(function () {
    jQuery('.drop-down-menu').slideToggle();
  });

  
});
