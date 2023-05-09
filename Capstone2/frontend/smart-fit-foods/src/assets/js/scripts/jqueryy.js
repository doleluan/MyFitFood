
window.onload=function () {
  document.querySelector(".btn-menu").addEventListener("click", function() {
    document.querySelector(".modal-menu").style.animation = "downtop 0.5s ease-in-out forwards";
    document.querySelector(".modal-menu").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    console.log("vao lon")
  });
  document.querySelector(".input-baidang").addEventListener("click", function() {
    document.querySelector(".modal-baidang").style.animation = "downtop 0.5s ease-in-out forwards";
    document.querySelector(".modal-baidang").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
  });
  document.querySelector(".overlay").addEventListener("click", function() {
    document.querySelector(".modal-menu").style.animation = "topdown 0.5s ease-in-out forwards";
    document.querySelector(".modal-baidang").style.animation = "topdown 0.5s ease-in-out forwards";
    document.querySelector(".modal-congthuc").style.animation = "topdown 0.5s ease-in-out forwards";
    this.style.display = "none";
  });
  const btnFoodList = document.querySelectorAll('.btn-food');
  btnFoodList.forEach(function(btnFood) {
    btnFood.addEventListener("click", function() {
      btnFoodList.forEach(function(btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  const carouselFood = document.querySelector('.carousel-food');
  new SlickCarousel(carouselFood, {
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
  const items = document.querySelectorAll(".containers .list-menu ul li");
  const numItems = items.length;
  const perPage = 5;

  items.forEach((item, index) => {
    if (index >= perPage) {
      item.style.display = "none";
    }
  });
  const paginationContainer = document.querySelector("#pagination-container");
  paginationContainer.pagination({
    items: numItems,
    itemsOnPage: perPage,
    cssStyle: "light-theme",
    onPageClick: function (pageNumber) {
      const showFrom = perPage * (pageNumber - 1);
      const showTo = showFrom + perPage;

      items.forEach((item, index) => {
        if (index < showFrom || index >= showTo) {
          item.style.display = "none";
        } else {
          item.style.display = "";
        }
      });
    }
  });
  const itemBlogElements = document.querySelectorAll(".item-blog");
  itemBlogElements.forEach(function (element, index) {
    if (index >= 3) {
      element.style.display = "none";
    }
  });

  if (itemBlogElements.length > 3) {
    document.querySelector(".loadMore2").style.display = "block";

    document.querySelector(".loadMore2").addEventListener("click", function (e) {
      this.style.display = "none";

      const hiddenItems = document.querySelectorAll(".item-blog:hidden");
      hiddenItems.forEach(function (item, index) {
        if (index < 3) {
          item.style.display = "block";
        }
      });

      if (document.querySelectorAll(".item-blog:hidden").length === 0) {
        document.querySelector("#load").style.display = "none";
      }

      // Hide comment
      document.querySelector(".loadHide2").style.display = "block";
      document.querySelector(".loadHide2").addEventListener("click", function (e) {
        this.style.display = "none";
        document.querySelector(".loadMore2").style.display = "block";

        const visibleItems = document.querySelectorAll(".item-blog:visible");
        visibleItems.forEach(function (item, index) {
          if (index >= 3) {
            item.style.display = "none";
          }
        });

        if (document.querySelectorAll(".item-blog:visible").length === 0) {
          document.querySelector("#hide").style.display = "none";
        }
      });
    });
  };
  const starElements = document.querySelectorAll('#stars li');

  starElements.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      const onStar = parseInt(this.getAttribute('data-value'), 10);
      const stars = this.parentNode.querySelectorAll('li.star');

      stars.forEach(function (star, index) {
        if (index < onStar) {
          star.classList.add('hover');
        } else {
          star.classList.remove('hover');
        }
      });
    });

    element.addEventListener('mouseout', function () {
      const stars = this.parentNode.querySelectorAll('li.star');
      stars.forEach(function (star) {
        star.classList.remove('hover');
      });
    });

    element.addEventListener('click', function () {
      const onStar = parseInt(this.getAttribute('data-value'), 10);
      const stars = this.parentNode.querySelectorAll('li.star');

      stars.forEach(function (star, index) {
        star.classList.remove('selected');
      });

      for (let i = 0; i < onStar; i++) {
        stars[i].classList.add('selected');
      }
    });
  });
  const imageVideoElement = document.querySelector(".image-video");
  const videoElement = document.querySelector(".video");
  const linkVideoIconElement = document.querySelector(".link-video i");

  imageVideoElement.addEventListener("mouseenter", function () {
    videoElement.style.transform = "scale(1)";
    linkVideoIconElement.style.transform = "scale(1)";
  });

  imageVideoElement.addEventListener("mouseleave", function () {
    linkVideoIconElement.style.transform = "scale(0)";
    videoElement.style.transform = "scale(0)";
  });
  const itemss = document.querySelectorAll(".item");

  itemss.forEach((item, index) => {
    if (index < 3) {
      item.style.display = "block";
    }
  });

  if (itemss.length > 3) {
    const loadMoreButton = document.querySelector(".loadMore");
    loadMoreButton.style.display = "block";

    loadMoreButton.addEventListener("click", function () {
      this.style.display = "none";
      const hiddenItems = document.querySelectorAll(".item:hidden");
      hiddenItems.forEach((item, index) => {
        if (index < 3) {
          item.style.display = "block";
        }
      });
      if (document.querySelectorAll(".item:hidden").length === 0) {
        document.querySelector("#load").style.display = "none";
      }

      const loadHideButton = document.querySelector(".loadHide");
      loadHideButton.style.display = "block";

      loadHideButton.addEventListener("click", function () {
        this.style.display = "none";
        loadMoreButton.style.display = "block";
        const visibleItems = document.querySelectorAll(".item:visible");
        visibleItems.forEach((item, index) => {
          if (index >= 3) {
            item.style.display = "none";
          }
        });
        if (document.querySelectorAll(".item:visible").length === 0) {
          document.querySelector("#hide").style.display = "none";
        }
      });
    });
  }

  window.addEventListener("scroll", function () {
    if (window.scrollTop > 50) {
      document.querySelector(".navbar").classList.add("active-header");
    } else {
      document.querySelector(".navbar").classList.remove("active-header");
    }
  });

  document.querySelector(".avatar-header").addEventListener("click", function () {
    document.querySelector(".drop-down-menu").classList.toggle("slideToggle");
  });

  document.querySelector("#file-upload").addEventListener("change", function () {
    const files = this.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const image = document.createElement("img");
          image.src = e.target.result;
          document.querySelector("#preview").appendChild(image);
        };
        reader.readAsDataURL(files[i]);
      } else {
        alert("Không hỗ trợ định dạng này");
      }
    }
  });
  document.querySelector('.icon-chatbot').addEventListener('click', function() {
    var chatbotContainer = document.querySelector('.chatbot-container');
    if (getComputedStyle(chatbotContainer).opacity === '0') {
      chatbotContainer.style.animation = 'show 0.5s ease-in-out forwards';
    } else {
      chatbotContainer.style.animation = 'hide 0.5s ease-in-out forwards';
    }
  });
// Đóng Chat bot
  document.querySelector('.close-chat').addEventListener('click', function() {
    document.querySelector('.chatbot-container').style.animation = 'hide 0.5s ease-in-out forwards';
  });


};

