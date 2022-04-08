// JavaScript Document

//全局方法
var globalAPI={};

//顶部 绑定、执行的函数、事件
globalAPI.eventTop=function(){
  //首页与其他页的logo不同
  if( $("body").attr("data-page-index") === "" ){//首页
    $(".common_top-logo-2").show();
  }else{//不是首页
    $(".common_top-logo-1").removeClass("hide");
  }

  //点击顶部放大镜按钮 出现搜索框
  $(".common_top-glass").click(function(){
    if( $(".common_top").hasClass("common_top_search") ){//跳转到搜索页面
      console.log("跳转到搜索页");
    }else{//出现搜索框
      globalAPI.topShowSearch();
    }
  });

  //点击顶部差号 或 黑色遮罩 关闭搜索框
  $(".common_top-close,.common_top .public_shade").click(function(){
    globalAPI.topHideSearch();
  });

  //m 点击导航
  $(".common_top-m_btn").click(function(){
    //如果 导航已经展开
    if( $(".common_top").hasClass("common_top_m-openmenu") ){
      $(".common_top").removeClass("common_top_m-openmenu common_top_m-opensearch");
      globalAPI.allowScroll();
    }else{//导航没有展开
      $(".common_top").addClass("common_top_m-openmenu");
      globalAPI.noScroll();
    }
  });

  //m 点击导航里的 搜索选项
  $(".common_top-menu-search").click(function(){
    $(".common_top").addClass("common_top_m-opensearch");
    $(".common_top-search-input input").focus();
  });

  //m 点击放大镜搜索
  $(".common_top_m-glass").click(function(){
    console.log("跳转到搜索页");
  });
};

//底部 绑定、执行的函数、事件
globalAPI.eventFoot=function(){
  //m 点击底部导航切换显示
  $(".common_footer-top-left dl").each(function(){
    var h=$(this).find("dd").length*1-0.1;
    $(this).find("dt").click(function(){
      if( $(this).parent().hasClass("open") ){
        $(this).parent().removeClass("open").removeAttr("style");
      }else{
        $(this).parent().addClass("open").css({"height":h+"rem"});
      }
      $(this).parent().siblings().removeClass("open").removeAttr("style");
    });
  });

  (function(){
  //底部导航 在3,4,5列下 对应不同的样式
  var len=$(".common_footer-top-left>dl").length;
  switch(len){
    case 3:
      $(".common_footer-top-left").addClass("common_footer-top-left_3");
      break;
    case 4:
      $(".common_footer-top-left").addClass("common_footer-top-left_4");
      break;
    case 5:
      $(".common_footer-top-left").addClass("common_footer-top-left_5");
      break;
  }

  //m 底部 添加竖线
  var len=$(".common_footer-btm a").length;
  $(".common_footer-btm a").each(function(index){
    if(index<len-1){//最后一个不加竖线
      $(this).after('<p></p>');
    }
  });

  })();//end of +function
};

//顶部 出现 搜索框
globalAPI.topShowSearch=function(){
  //判断现在的状态是否是 搜索框隐藏 状态
  if( $(".common_top").attr("data-status")!="hide-search" ){
    return;//如果不是则终止
  }
  var divIn=$(".common_top-menu").attr("data-in");
  var divOut=$(".common_top-menu").attr("data-out");
  globalAPI.noScroll();
  //导航逐个消失
  var len=$(".common_top-menu").children().length;
  for(var i=0;i<=len;i++){
    (function(){
      var ii=i;
      setTimeout(function(){
        if(ii<len){
          $(".common_top-menu").children().eq(len-ii-1).removeClass(divIn).addClass(divOut);
          // if(ii==len-1){$(".common_top-search-input").css({"visibility":"visible"});}
        }else if(ii=len){
          $(".common_top-search-input").find("input").focus();//最后搜索框获取焦点
          $(".common_top").attr("data-status","show-search");//动画执行完毕，将状态改为 搜索框显示 状态
        }
      },ii*50);
    })();
  }
  $(".common_top-search").removeClass("hide");//显示搜索框
  $(".common_top-close").removeClass("hide");//显示关闭按钮
  //需要异步来触发css过渡效果
  setTimeout(function (){
    $(".common_top").addClass("common_top_search");
  },0);
};

//顶部 隐藏 搜索框
globalAPI.topHideSearch=function(){
  //判断现在的状态是否是 搜索框显示 状态
  if( $(".common_top").attr("data-status")!="show-search" ){
    return;//如果不是则终止
  }
  var divIn=$(".common_top-menu").attr("data-in");
  var divOut=$(".common_top-menu").attr("data-out");
  globalAPI.allowScroll();
  $(".common_top").removeClass("common_top_search");
  $(".common_top-search").removeClass("public_in").addClass("public_out");
  //动画执行完毕后隐藏元素
  var delay=parseFloat($(".common_top-search").css("transition-duration"))*1000;
  setTimeout(function(){
    $(".common_top-menu").removeClass("hide_impt");//显示导航栏 需要在搜索框隐藏之后再显示
    $(".common_top-search").addClass("hide");
    $(".common_top-close").addClass("hide");//隐藏关闭按钮
    $(".common_top").attr("data-status","hide-search");//动画执行完毕，将状态改为 搜索框隐藏 状态
  },delay);
  //导航逐个显示
  var len=$(".common_top-menu").children().length;
  for(var i=0;i<len;i++){
    (function(){
      var ii=i;
      setTimeout(function(){
        $(".common_top-menu").children().eq(ii).removeClass(divOut).addClass(divIn);
      },ii*50);
    })();
  }
};

//禁止上下页面滑动
globalAPI.noScroll=function(){
  $("body,html").addClass("public_noscroll");
};
//恢复页面滚动
globalAPI.allowScroll=function(){
  $("body,html").removeClass("public_noscroll");
};

//判断当前是否是手机浏览器 返回布尔值  true为是手机浏览器
globalAPI.judegMobileBrowser=function(){
  var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
  var browser = navigator.userAgent.toLowerCase(); 
  for (var i=0; i<mobileAgent.length; i++){ 
    if (browser.indexOf(mobileAgent[i])!=-1){ 
      //alert("当前是手机浏览器");
      return true;
    }
  }
  return false;
};

//判断当前屏幕宽度是否是移动端 分辨率小于 768px true为是手机分辨率
globalAPI.judegMobileWidth=function(){
  if( $(window).width()<768 ){
    return true;
  }
  return false;
};