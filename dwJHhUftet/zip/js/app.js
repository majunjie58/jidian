(()=>{let e=$(window).height();function t(){var t=$(window).width();t<1e3?(t=t/750,$("[transform]").css({transform:`scale(${t})`})):$("[transform]").css({transform:"none"})}function n(){$(".image-lazy").each(function(){!function(t){if(!t.getBoundingClientRect)return!1;t=t.getBoundingClientRect();return t.top<2*e}(this)||$(this).removeClass("image-lazy")})}function i(){$("[fade-in]").each(function(){var t=a(this);t&&!$(this).hasClass("faded")?$(this).addClass("faded"):!t&&$(this).hasClass("faded")&&$(this).removeClass("faded")})}function s(){$("[fade-in-mid]").each(function(){var t=function(t){if(!t.getBoundingClientRect)return!1;var n=t.getBoundingClientRect(),t=$(t).height();return n.top+t/2<e}(this),n=a(this);t&&!$(this).hasClass("faded")?$(this).addClass("faded"):!n&&$(this).hasClass("faded")&&$(this).removeClass("faded")})}function a(t){return!!t.getBoundingClientRect&&t.getBoundingClientRect().top<e}t(),s(),i(),n(),$(window).resize(function(){e=$(window).height(),t()});let o=function(t,n){let e=!0,i=null;return function(){if(clearTimeout(i),!e)return!1;e=!1,setTimeout(()=>{t(),e=!0},n),i=setTimeout(()=>{t()},n)}}(()=>{s(),i(),n()},300);$(window).scroll(function(){o()})})();