var header = document.getElementsByTagName('header')[0];
var paths = document.getElementsByTagName('path');

zenscroll.setup(350, 194.719);

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.id = "headerScrolled";
    for (var path of paths) {
      path.classList.add('fillBlue');
    }
  }else {
    header.id = "";
    for (var path of paths) {
      path.classList.remove('fillBlue');
    }
  }
});

var dropDownMenu = document.getElementById('dropDownMenu');
var dropDownIcon = document.querySelector('#dropDownButton i');
var dropDownItems = document.querySelectorAll('#dropDownList a');
var dropDownOpen = false;

function toggleDropDown(on) {
  if (on) {
    dropDownMenu.style.height = '300px';
    dropDownIcon.className = 'icon-close'
    dropDownOpen = true;
  }else {
    dropDownMenu.style.height = '0px';
    dropDownIcon.className = 'icon-menu'
    dropDownOpen = false;
  }
}

for (var item of dropDownItems) {
  item.addEventListener('click', function(e) {
    toggleDropDown(false);
  });
}

document.getElementById('dropDownGetStarted').addEventListener('click', function() {
  toggleDropDown(false);
});

document.getElementById('dropDownButton').addEventListener('click', function() {
  if (!dropDownOpen) {
    toggleDropDown(true);
  }else {
    toggleDropDown(false);
  }
});

if (!!window.location.hash) {
  var section = window.location.hash.slice(1);
  document.body.scrollIntoView(true);
  zenscroll.toY(zenscroll.getTopOf(document.getElementById(section)) - 194.719);
}
