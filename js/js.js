             

    $('.wrapper-menu').on('click', function () {
                    $('.wrapper-menu').toggleClass('open'); 
                     $('.menuicon').toggleClass('active');
                });
        $('.overlaymenu').on('click', function () {
                    $('.wrapper-menu').toggleClass('open'); 
                     $('.menuicon').toggleClass('active');
                });
                $('.menuicon ul li a').on('click', function () {
                    $('.wrapper-menu').removeClass('open'); 
                     $('.menuicon').removeClass('active');
                });

    var swiper2 = new Swiper('.swiper-container-2', {
       slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide:1,
        loop: true,
        loopFillGroupWithBlank: true,
      observer: true,
  observeParents: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
    });




function openTabBox(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabmainbox");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabmenu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

// ปลาหมุน
  $('.loadingspin').show();
  setTimeout(function(){ $('.loadingspin').hide(); }, 1000);
// ปลาหมุน


 if($('#sportstab').css('display') == 'block' || $('#casinostab').css('display') == 'block' || $('#slotstab').css('display') == 'block' || $('#homegamestab').css('display') == 'block' || $('#fishstab').css('display') == 'block'){
  $('.sidegamebar').removeClass("hide");
  $('.containmain').removeClass("othertabs");
}
else{
  $('.sidegamebar').addClass("hide");
  $('.containmain').addClass("othertabs");
}
 if($('#sportstab').css('display') == 'block'){
  $('.tabmenu.sport').addClass("active");
 }
}



$(".loginbtn").on('click', function () {
    $('.loginmodaldiv').show();
     $('.registermodaldiv').hide();
});

$('.closepopup, .overlaymodal').on('click', function () {
        $('.loginmodaldiv').hide();
});

$(".registerbtn").on('click', function () {
    $('.registermodaldiv').show();
     $('.loginmodaldiv').hide();
});

$('.closepopup, .overlaymodal').on('click', function () {
        $('.registermodaldiv').hide();
});
$('.closepopup, .overlaymodal').on('click', function () {
        $('.contentmodaldiv').hide();
});




function openPopupTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("contentmodaldiv");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("popupbtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" ac", "");
  }


  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " ac";

  

}




// Copy---------------------------------------------------------
$(document).ready(function(){
  $(".copybtn").click(function(event){
    var $tempElement = $("<input>");
    $("body").append($tempElement);
    $tempElement.val($(this).closest(".copybtn").find("span").text()).select();
    document.execCommand("Copy");
    $tempElement.remove();

  });
});
function copylink(){
  $(".myAlert-top").show();
  setTimeout(function(){
    $(".myAlert-top").hide(); 
  }, 1500);
}



$(".copylink").click(function(event){
   var copyText = document.getElementById("friendlink");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  });


// Copy---------------------------------------------------------






