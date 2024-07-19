$(".tilt-effect").tilt({
  maxTilt: 4,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 500,
  transition: true,
});
$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  autoHeight: false,
  autoHeightClass: "owl-height",
});
$(".main-img-box").each(function () {
  $(this)
     .on("mouseenter", function () {
        if ($(this).data("title")) {
           $(".my-port_portfolio_titles").html(
              $(this).data("title") +
              '<span class="work__cat">' +
              $(this).data("category") +
              "</span>"
           );
           $(".my-port_portfolio_titles").addClass("visible");
        }
        $(document).on("mousemove", function (e) {
           $(".my-port_portfolio_titles").css({
              left: e.clientX - 10,
              top: e.clientY + 25,
           });
        });
     })
     .on("mouseleave", function () {
        $(".my-port_portfolio_titles").removeClass("visible");
     });
});
var navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".mobile-nav ul li");
window.onscroll = function () {
  if (window.pageYOffset > 80) {
     navbar.classList.add("stickyadd");
  } else {
     navbar.classList.remove("stickyadd");
  }
  var current = "";
  sections.forEach((section) => {
     const sectionTop = section.offsetTop;
     if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
     }
  });
  navLi.forEach((li) => {
     li.classList.remove("active");
     if (li.classList.contains(current)) {
        li.classList.add("active");
     }
  });
};
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
$(window).on("load", function () {
  var $container = $(".work-filter");
  var $filter = $("#menu-filter");
  $container.isotope({
     filter: "*",
     layoutMode: "masonry",
     animationOptions: {
        duration: 750,
        easing: "linear"
     },
  });
  $filter.find("a").on("click", function () {
     var selector = $(this).attr("data-filter");
     $filter.find("a").removeClass("active");
     $(this).addClass("active");
     $container.isotope({
        filter: selector,
        animationOptions: {
           animationDuration: 750,
           easing: "linear",
           queue: false,
        },
     });
     return false;
  });
});
var myCursor = $(".mouse-cursor");
if (myCursor.length) {
  if ($("body")) {
     const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
     let n,
        i = 0,
        o = !1;
     (window.onmousemove = function (s) {
        o ||
           (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
           (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
           (n = s.clientY),
           (i = s.clientX);
     }),
     $("body").on("mouseenter", "a, .cursor-pointer", function () {
           e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
           ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
           (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
  }
}
$(".img-zoom").magnificPopup({
  type: "image",
  closeOnContentClick: true,
  mainClass: "mfp-fade",
  gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1]
  },
});
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
     navigator.userAgent
  ) ?
  true :
  false;
var preloader = $("#preloader");
if (!isMobile) {
  setTimeout(function () {
     preloader.addClass("preloaded");
  }, 800);
  setTimeout(function () {
     preloader.remove();
  }, 2000);
} else {
  preloader.remove();
}
new WOW().init();

function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

function toggleModaltwo(modalIDtwo) {
  document.getElementById(modalIDtwo).classList.toggle("hidden");
  document.getElementById(modalIDtwo + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalIDtwo).classList.toggle("flex");
  document.getElementById(modalIDtwo + "-backdrop").classList.toggle("flex");
}

function toggleModalthree(modalIDthree) {
  document.getElementById(modalIDthree).classList.toggle("hidden");
  document
     .getElementById(modalIDthree + "-backdrop")
     .classList.toggle("hidden");
  document.getElementById(modalIDthree).classList.toggle("flex");
  document.getElementById(modalIDthree + "-backdrop").classList.toggle("flex");
}

function toggleModalfour(modalIDfour) {
  document.getElementById(modalIDfour).classList.toggle("hidden");
  document.getElementById(modalIDfour + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalIDfour).classList.toggle("flex");
  document.getElementById(modalIDfour + "-backdrop").classList.toggle("flex");
}

function toggleModalblog(modalIDblog) {
  document.getElementById(modalIDblog).classList.toggle("hidden");
  document.getElementById(modalIDblog + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalIDblog).classList.toggle("flex");
  document.getElementById(modalIDblog + "-backdrop").classList.toggle("flex");
}

function toggleModalblogtwo(modalIDblogtwo) {
  document.getElementById(modalIDblogtwo).classList.toggle("hidden");
  document
     .getElementById(modalIDblogtwo + "-backdrop")
     .classList.toggle("hidden");
  document.getElementById(modalIDblogtwo).classList.toggle("flex");
  document
     .getElementById(modalIDblogtwo + "-backdrop")
     .classList.toggle("flex");
}

function toggleModalblogthree(modalIDblogthree) {
  document.getElementById(modalIDblogthree).classList.toggle("hidden");
  document
     .getElementById(modalIDblogthree + "-backdrop")
     .classList.toggle("hidden");
  document.getElementById(modalIDblogthree).classList.toggle("flex");
  document
     .getElementById(modalIDblogthree + "-backdrop")
     .classList.toggle("flex");
}

//
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.nav-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(event) {
     const targetPane = document.querySelector(event.target.getAttribute('data-bs-target'));
     tabs.forEach(tab => tab.classList.remove('active'));
     tabPanes.forEach(pane => pane.classList.remove('active', 'show'));

     // Add 'active' class to the clicked tab and corresponding tab pane
     event.target.classList.add('active');
     targetPane.classList.add('active', 'show');
  }

  // Attach click event listeners to all tab buttons
  tabs.forEach(tab => {
     tab.addEventListener('click', switchTab);
  });
});
// Download PDF
document.getElementById('downloadBtn').addEventListener('click', function () {
  const pdfUrl = 'path/to/your/file.pdf';

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'rizwan.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//email

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  // Basic regex patterns for validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^[+]?[0-9]{10,15}$/;
  // Clear previous error messages
  document.getElementById('phoneError').textContent = '';

  // Validate phone number
  if (!phonePattern.test(phone)) {
     document.getElementById('phoneError').textContent = 'Please enter a valid phone number. It should be between 10 to 15 digits.';
     return;
  }

  var data = {
    from_name: name,
     email: email,
     phone: phone,
     subject: subject,
     message: message
  };

  emailjs.send('service_ui3gsvt', 'template_lddfizq', data, 'S6-RWipWrGal5a7Fq')
     .then(function (response) {
        document.getElementById("modal-id-success").classList.remove("hidden");
        document.getElementById("modal-id-success-backdrop").classList.remove("hidden");
     }, function (error) {
        document.getElementById("modal-id-fail").classList.remove("hidden");
        document.getElementById("modal-id-fail-backdrop").classList.remove("hidden");
     });
});

function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle('hidden');
  document.getElementById(modalID + '-backdrop').classList.toggle('hidden');
}
