
var dictionary = {
    'home-link': {
        'ar': 'الرئيسية',
        'en': 'Home',
    },
    'about-link': {
        'ar': 'من نحن',
        'en': 'About Us',
    },
    'services-link': {
        'ar': 'خدامتنا',
        'en': 'Our Sevices',
    },
    'vision-link': {
        'ar': 'روؤيتنا',
        'en': 'Our Vision',
    }

};
var langs = ['ar', 'en'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
current_lang_index = ++current_lang_index % 3;
current_lang = langs[current_lang_index];

var currentDir = document.getElementById("body").style.direction;
   if (currentDir == '') {
       document.getElementById("body").style.direction = "ltr";
       document.getElementById("body").style.textAlign = "left";
       currentDir = 'rtl'
       translate();
    } else {
        document.getElementById("body").style.direction = "rtl";
        document.getElementById("body").style.textAlign = "right";
        translate();
        current_lang_index = ++current_lang_index % 3;
        current_lang = langs[current_lang_index];
   }
translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang]);
    });
}

translate();


function changeDirLTR() {
}

function changeDirRTL() {
    document.getElementById("body").style.direction = "rtl";
}