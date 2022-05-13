/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "script/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Footer = __webpack_require__(1);
	var mFooter = __webpack_require__(3);


	var FooterInit = {
	    Init : function () {
	        Footer.init();
	    },
	    run : function () {
	        var that = this,
	            ischange = null;

	        $(function () {

	            /**  初始化项目 */
	            that.Init();
	            self.ismobile && mFooter.init();
	            $(window).resize(function(){
	                self.ismobile = $(window).width() < 768;
	                (ischange != self.ismobile) &&  (that.Switch(self.ismobile),ischange = self.ismobile);
	            }).resize();
	        });

	    },
	    /**  处理PC端的浏览器窗口的rezise事件 */
	    /**  每个模块的Recovery方法用于重置模块的一些功能 */
	    Switch : function (v) {
	        if(v){
	            !self.mFooterInit && mFooter.init();
	        }else {
	            mFooter.Recovery();
	        }
	    }
	};

	module.exports = !(function () {
	    FooterInit.run();
	}());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $followBox = $('.gb-foot-copyright'),
	    $followList = $followBox.find('.follow-list'),
	    $followDom = $followList.find('li'),
	    $followBtn = $followBox.find('.follow_btn'),
	    $langBtn = $followBox.find('.lang_btn'),
	    $langList = $followBox.find('.lang-list'),
	    $langDom = $langList.find('li');

	var $wechatBtn = $('.wechat-follow'),
	    $aliBtn = $('.ali-follow'),
	    $follow_box = $('.vivo-follow-toast');

	var _reverse = __webpack_require__(2);

	var Foot = {
	    /**  初始化脚部功能 */
	    init : function () {
	        var that = this;

	        that.followAnt = new TimelineMax({paused: true});
	        that.followAnt.staggerFrom(_reverse($followDom), 0.1, { y : 50, autoAlpha: 0, ease: Ease.easeOut }, 0.02, '-=0.01');
	        that.langAnt = new TimelineMax({paused: true});
	        that.langAnt.staggerFrom(_reverse($langDom), 0.1, { y : 50, autoAlpha: 0, ease: Ease.easeOut }, 0.02, '-=0.01');

	        $wechatBtn.mouseenter(function () {
	            if(self.ismobile) return false;
	            $follow_box.removeClass('openAli').addClass('openWechat');
	            TweenMax.to($follow_box, 0.2, { autoAlpha: 1, ease: Ease.easeOut });
	        });
	        $wechatBtn.mouseleave(function () {
	            TweenMax.to($follow_box, 0.1, { autoAlpha: 0, ease: Ease.easeOut });
	        });
	        $aliBtn.mouseenter(function () {
	            if(self.ismobile) return false;
	            $follow_box.removeClass('openWechat').addClass('openAli');
	            TweenMax.to($follow_box, 0.2, { autoAlpha: 1, ease: Ease.easeOut });
	        });
	        $aliBtn.mouseleave(function () {
	            TweenMax.to($follow_box, 0.1, { autoAlpha: 0, ease: Ease.easeOut });
	        });

	        $followBtn.mouseenter(function () {
	            that.FollowAntControl(false);
	        });
	        $followBtn.mouseleave(function () {
	            that.FollowAntControl(true);
	        });
	        $followList.mouseleave(function () {
	            that.FollowAntControl(true);
	        });

	        $langBtn.mouseenter(function () {
	            that.LangAntControl(false);
	        });
	        $langBtn.mouseleave(function () {
	            that.LangAntControl(true);
	        });
	        $langList.mouseleave(function () {
	            that.LangAntControl(true);
	        });

	        that.FollowAntControl(true);
	        that.LangAntControl(true);
	    },
	    /**  关注vivo动画控制器*/
	    FollowAntControl : function (v) {
	        var that = this;
	        if(v){
	            TweenMax.to($followList, 0.2, { autoAlpha: 0, ease: Ease.easeOut ,  onComplete: function () {
	                $followList.hide();
	                $follow_box.removeClass('openAli openWechat');
	            }});
	            that.followAnt.reverse();
	        }else {
	            TweenMax.to($followList, 0.2, { display: 'block', autoAlpha: 1, ease: Ease.easeOut });
	            that.followAnt.play();
	        }
	    },
	    /**  语言选择动画控制器*/
	    LangAntControl : function (v) {
	        var that = this;
	        if(v){
	            TweenMax.to($langList, 0.2, { autoAlpha: 0, ease: Ease.easeOut ,  onComplete: function () {
	                $langList.hide();
	            }});
	            that.langAnt.reverse();
	        }else {
	            TweenMax.to($langList, 0.2, { display: 'block', autoAlpha: 1, ease: Ease.easeOut });
	            that.langAnt.play();
	        }
	    }
	    
	};

	module.exports = Foot;







/***/ },
/* 2 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeReverse = arrayProto.reverse;

	/**
	 * Reverses `array` so that the first element becomes the last, the second
	 * element becomes the second to last, and so on.
	 *
	 * **Note:** This method mutates `array` and is based on
	 * [`Array#reverse`](https://mdn.io/Array/reverse).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = [1, 2, 3];
	 *
	 * _.reverse(array);
	 * // => [3, 2, 1]
	 *
	 * console.log(array);
	 * // => [3, 2, 1]
	 */
	function reverse(array) {
	  return array == null ? array : nativeReverse.call(array);
	}

	module.exports = reverse;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var $foot = $('#vivo-foot-wrap'),
	    $list = $foot.find('.gb-foot-directory ul.directory-list'),
	    $li = $list.find('li'),
	    $btn = $li.find('.f-d-title');


	var $footCopy = $(".gb-foot-copyright"),
	    $followBtn = $footCopy.find('.follow_btn'),
	    $langBtn = $footCopy.find('.lang_btn'),
	    $QRCodeBtn = $footCopy.find('.follow'),
	    $mToast = $('#vivo-m-toast');
	    $closeBtn = $mToast.find('.closeIcon')

	var isOpen = false;

	var mFootList = {
	    /**  初始化移动端脚部功能 */
	    init : function(){
	        self.mFooterInit = true;
	        var that = this;
	        $btn.each(function(){
	            !this.ant && (this.ant = new TimelineMax({paused: true}));
	            this.ant.add(TweenMax.from($(this).parent(), .3, {height: '32px'}, 0));
	            $(this).click(function(){
	                var v = $(this).hasClass('open');
	                var i = $(this).parent().index();
	                that.FooterControl(v,i);
	            })
	        });
	        that.Qrcode();
	        that.CloseQRCode();
	    },
	    /**  脚部动画控制器*/
	    FooterControl : function(v,i){
	        var Dom = $li.eq(i).find('.f-d-title');
	        if(!v){
	            Dom.addClass('open');
	            Dom[0].ant.play();
	        }else {
	            Dom.removeClass('open');
	            Dom[0].ant.reverse();
	        }
	    },
	    Qrcode : function () {
	        var _this = this;
	        $QRCodeBtn.eq(1).click(function () {
	            if ($mToast.hasClass('openQRCode')) return false;
	            if (self.ismobile) {
	                var v = $mToast.hasClass('openQRCode');
	                _this.QrControl(v);
	            }
	        });
	    },
	    QrControl: function (v) {
	        if(v){
	            isOpen = false;
	            $mToast.removeClass('openQRCode');
	            TweenMax.to($mToast, 0.4, {autoAlpha: 0},0.1);
	        }else {
	            isOpen = true;
	            $mToast.addClass('openQRCode');
	            TweenMax.to($mToast, 0.4, {autoAlpha: 1},0.1);
	        }
	    },
	    CloseQRCode:function () {
	        var _this = this;
	        $closeBtn.click(function(){
	            var v = $mToast.hasClass('openQRCode');
	            _this.QrControl(v);
	        });
	    },
	    Recovery : function () {
	        $li.find('open') && $btn.each(function(){
	            $(this).hasClass('open') && $(this).click();
	        });
	        this.QrControl(true);
	    }
	};

	module.exports = mFootList;

/***/ }
/******/ ]);