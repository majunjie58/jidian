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

	var Header = __webpack_require__(4);
	var Search = __webpack_require__(7);
	var mHeader = __webpack_require__(10);

	var $navList = $('.gb-vivo-h-nav');

	var HeaderInit = {
	    Init : function () {
	        Header.init();
	    },
	    run : function () {
	        var that = this,
	            ischange = null;

	        $(function () {
	            /**  覆盖之前的mask层 */
	            var $header = $('#vivo-head-wrap'),
	                maskDom = '<i id="gb-mask-layer"></i>';
	            $header.parent().append(maskDom);

	            /**  初始化项目 */
	            that.Init();
	            Search.getKey();
	            self.ismobile && mHeader.Init();
	            $(window).resize(function(){
	                self.ismobile = $(window).width() < 768;
	                (ischange != self.ismobile) && (that.Switch(self.ismobile),ischange = self.ismobile);
	            }).resize();
	        });

	    },
	    /**  处理PC端的浏览器窗口的rezise事件 */
	    /**  每个模块的Recovery方法用于重置模块的一些功能 */
	    Switch : function (v) {

	        if(v){
	            !self.mHeaderInit && mHeader.Init();
	            $navList.css({ visibility : 'hidden'});
	            this.Listtm = setTimeout(function () {
	                $navList.css({ visibility : 'inherit'});
	            },1000);
	            Search.Recovery();
	        }else {
	            clearTimeout(this.Listtm);
	            $navList.css({ visibility : 'inherit'});
	            $navList.show();
	            mHeader.Recovery();
	            Search.init();
	        }
	    }
	};

	module.exports = !(function () {
	    HeaderInit.run();
	}());

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Menu = __webpack_require__(5);
	var Search = __webpack_require__(7);

	var $headDom = $('#vivo-head-wrap'),
	    $stage = $headDom.find('.gb-vivo-head'),
	    $userBtn = $('.nav-t-user'),
	    $userList = $('.v_h_usercenter');

	var listAnt = new TimelineMax({paused: true});
	var isplay = true;

	var Header = {
	    /**  初始化头部功能 */
	    init : function () {
	        var that = this;
	        Menu();
	        Search.SearchPlay();

	        $userBtn.mouseenter(function () {
	            if ($stage.hasClass('openMenu openSearch')) return false;
	            $stage.removeClass('openMenu');
	            setTimeout(function () {
	                var v = $stage.hasClass('openUser');
	                that.UserControl(v);
	            }, 1);
	        });
	        $userBtn.mouseleave(function () {
	            that._userTime = setTimeout(function () {
	                that.UserControl(true);
	            }, 1);
	        });
	        $userList.mouseenter(function () {
	            isplay = false;
	            clearTimeout(that._userTime);
	            that.UserControl(false);
	        });
	        $userList.mouseleave(function () {
	            that.UserControl(true);
	            setTimeout(function () {
	                isplay = true;
	            },100);
	        });
	        listAnt.staggerFrom($userList.find('li'),  .45, {y: -25, autoAlpha: 0, ease: Ease.easeInOut}, 0.1, '+=1');

	    },
	    /**  个人中心动画控制器*/
	    UserControl : function (v) {
	        var that = this;
	        var $mask = $('#gb-mask-layer');
	        if(v){
	            $stage.removeClass('openUser');
	            TweenMax.to($mask, 0.3, {display: 'none',autoAlpha: 0},0.1);
	            TweenMax.to($userList, .1, {autoAlpha: 0});
	            that._tmout = setTimeout(function () {
	                listAnt.seek(0).pause();
	            },400);
	            $(document).off('click');
	        }else {
	            clearTimeout(that._tmout);
	            $stage.addClass('openUser');
	            TweenMax.to($mask, 0.3, {display: 'block', autoAlpha: 1},0.1);
	            TweenMax.to($userList, .3, {autoAlpha: 1, ease: Ease.easeIn});
	            isplay && listAnt.seek(0).timeScale(1.5).play();
	        }
	    }
	};

	module.exports = Header;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);

	/**  初始化下拉菜单功能 */
	var Menu = function(){
	    
	    var $win = $(window),
	        $headBox = $('#vivo-head-wrap'),
	        $series = $headBox.find('.series'),
	        $menu = $headBox.find('.gb-vivo-menu-series'),
	        $list = $menu.find('ul');

	    //菜单位置
	    function menuPosition(){
	        for (var i=0; i < $list.size(); i++){
	            TweenMax.set($list.eq(i), {x: $series.eq(i).offset().left});
	        }
	    }
	    menuPosition();

	    //open animate
	    var lineTl = new TimelineMax({paused: true});
	    var menuOpen = false;
	    self.menuOpen = menuOpen;
	    var menuOver;
	    lineTl.from($menu, .5, {height: 0});

	    $series.each(function(){
	        this.handle = new TimelineMax({paused: true});
	        this.handle
	            .staggerFrom($list.eq($(this).index()).find('li'), .45, {y: -25, autoAlpha: 0, ease: Ease.easeIn}, 0.1, '+=.5')
	            .from($list.eq($(this).index()), .6, {height: 0}, .3);
	        
	        TweenMax.set($menu,{autoAlpha: 1});

	        $(this).hover(function(){
	            var _this = this;
	            menuOpen = true;

	            if(!_this.c && Modernizr.canvas){
	                $(_this).data('wrap') && (_this.c = new Emitter($(_this).data('wrap'), $(_this).data('type')));
	            }
	            $(this).siblings('.series').mouseleave();
	            setTimeout(function(){
	                lineTl.timeScale(1.5).play();
	                _this.handle.timeScale(1.5).play();
	                _this.c && _this.c.play();
	            },20);

	        }, function(){
	            menuOpen = false;
	            var _this = this;
	            var t = setTimeout(function(){
	                if(!menuOpen){
	                    lineTl.timeScale(1.5).reverse();
	                    _this.handle.timeScale(4).reverse();
	                    _this.c && _this.c.stop();
	                }
	                clearTimeout(t);
	            }, 10);

	        });
	        
	    });
	    
	    $menu.hover(function(){
	        menuOpen = true;
	    }, function(){
	        menuOpen = false;
	        $series.mouseleave();
	    });
	    $win.on({
	        resize : menuPosition
	    });
	};

	module.exports =Menu;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(_A){

	    var rand = function(max, min, is_int) {
	        var max = (max || max === 0)?max:1,
	            min = min || 0,
	            gen = min + (max - min)*Math.random();

	        return is_int?Math.round(gen):gen;
	    };

	    var w, w2, h, h2, _contain;

	    var TWO_PI = Math.PI * 2,
	        TO_REDIAN = Math.PI / 180,
	        TO_DEGREE = 180 * Math.PI;


	    var Emitter_config = {
	        circle : {
	            offsetArr : [
	                //x,y,direct,alpha,line-width,r
	                '5,0,1,0.3,2,0.6',
	                '-10,20,-1,0.5,1,0.8',
	                '-15,-10,-1,0.8,2,0.9',
	                '5,-5,1,1,4,1'
	            ],
	            color : '#008cd6'
	        },
	        planet : {
	            size : 50,
	            speed : 0.005,
	            color : '#008cd6'
	        },
	        round : {
	            offsetArr : [
	                //parent, dot : 1 or line : 0, line-width, radius, alpha
	                '1,0,0.4,0.6,0.3,1,0.5',
	                '0,1,0.4,0.6,0.3,1,0.5',
	                '0,0,0.4,0.6,0.3,1,0.5',

	                '1,0,0.5,0.35,0.5,1.05,0.3',
	                '0,1,0.5,0.35,0.5,1.05,0.3',

	                '1,0,0.7,0.2,0.7,0.83,0.65',
	                '0,1,0.7,0.2,0.7,0.83,0.65',

	                '1,0,0.7,0.1,1,1,0.8',
	                '0,1,0.7,0.1,1,1,0.8',
	            ],
	            color : '#008cd6',
	            speed : 0.008
	        }
	    };


	    //圆循环
	    function RoundAnimate(){
	        var round = Emitter_config['round'];
	        this.isplay = false;
	        this.rounds = [];
	        this.box = new createjs.Container();
	        this.handle = null;
	        _contain.addChild(this.box);
	        for(var i=0; i<round.offsetArr.length; i++){
	            this.rounds.push(new Round(i));
	            this.box.addChild(this.rounds[i].ele);
	        }
	    };

	    RoundAnimate.prototype.loop = function(){
	        var rounds = this.rounds;
	        for(var i=0; i<rounds.length; i++){
	            rounds[i].update();
	        }
	        this.handle = requestAnimationFrame(this.loop.bind(this));
	    };

	    RoundAnimate.prototype.play = function(){
	        !this.isplay && (this.loop(), this.isplay=true);
	    };

	    RoundAnimate.prototype.stop = function(){
	        this.handle && this.isplay && (cancelAnimationFrame(this.handle), this.handle=null, this.isplay=false);
	    };

	    function Round(i){
	        var round = Emitter_config['round'];
	        var roundArr = round.offsetArr[i].split(',');
	        this.color = round.color;
	        this.speed = round.speed + rand(0.008, 0.006);
	        this.isParent = !!parseInt(roundArr[0]);
	        this.isDot = !!parseInt(roundArr[1]);
	        this.width = parseFloat(roundArr[2]) * 6;
	        this.radius = parseFloat(roundArr[3]) * h2/2;
	        this.alpha = parseFloat(roundArr[4]);
	        this.x = h2 * parseFloat(roundArr[5]);
	        this.y = h2 * parseFloat(roundArr[6]);
	        this.angle = rand(1, -1) * TWO_PI;
	        this.direct = this.angle > TWO_PI/2 ? -1 : 1;
	        this.vector = this.isParent ? new Vector(this.x, this.y, 0, 0) : new Vector(this.x, this.y, this.radius, this.angle);

	        this.draw();
	    };

	    Round.prototype.draw = function(){
	        this.ele = new createjs.Shape();
	        var radius;
	        if(!this.isDot){
	            radius = this.isParent ? this.radius : this.radius * rand(0.15, 0.08);
	            this.ele.graphics.s(this.color).ss(this.width).dc(this.vector.x, this.vector.y, radius);
	        }else{
	            radius = 6;
	            this.ele.graphics.f(this.color).dc(this.vector.x, this.vector.y, radius);
	        }
	        this.ele.alpha = this.alpha;
	        this.ele.x = this.vector.x;
	        this.ele.y = this.vector.y;
	        this.ele.regX = this.vector.x;
	        this.ele.regY = this.vector.y;
	    };

	    Round.prototype.update = function(){
	        var vel = this.vector;
	        vel.setAngle(this.speed * this.direct + vel.getAngle());
	        this.ele.x = vel.x;
	        this.ele.y = vel.y;
	    };



	    //连接
	    function PlanetAnimate(){
	        var planet = Emitter_config['planet'];
	        this.planets = [];
	        this.connector = new createjs.Container();
	        this.box = new createjs.Container();
	        this.handle = null;
	        this.isplay = false;
	        _contain.addChild(this.connector, this.box);
	        for(var i=0; i<planet.size; i++){
	            this.planets.push(new Planet(planet));
	            this.box.addChild(this.planets[i].ele);
	        }
	    };

	    PlanetAnimate.prototype.drawLine = function(v1, v2, color){
	        var line = new createjs.Shape();
	        line.graphics.ss(4 * v2.alpha).s('#008cd6').mt(v1.x, v1.y).lt(v2.x, v2.y);
	        line.alpha = v2.alpha;
	        this.connector.addChild(line);
	    };

	    PlanetAnimate.prototype.loop = function(){
	        var planets = this.planets;
	        for(var i=0; i<planets.length; i++){
	            planets[i].update();
	        }

	        this.connector.removeAllChildren();
	        for(var i=0; i<planets.length; i++){
	            var planetA = planets[i];
	            for(var s=0; s<planets.length; s++){
	                var planetB = planets[s];
	                var distance = planetB.vector.getDistance(planetA.vector);
	                if(planetA != planetB && distance<h*0.3){
	                    this.drawLine(planetA.vector, planetB.vector);
	                }
	            }
	        }
	        this.handle = requestAnimationFrame(this.loop.bind(this));
	    };

	    PlanetAnimate.prototype.play = function(){
	        !this.isplay && (this.loop(), this.isplay=true);
	    };

	    PlanetAnimate.prototype.stop = function(){
	        this.handle && this.isplay && (cancelAnimationFrame(this.handle), this.handle=null, this.isplay=false);
	    };


	    function Planet(planet){
	        this.planet = planet;
	        this.x = rand(h2*1.2, h2);
	        this.y = rand(h2*0.6, h2*0.3);
	        this.length = rand(h2*0.4, h2*0.2);
	        this.angle = rand(1, -1) * TWO_PI;
	        this.alpha = rand(1, 0.1);
	        this.direct = this.angle > TWO_PI/2 ? -1 : 1;
	        this.speed = this.planet.speed + rand(0.008, 0.001);

	        this.vector = new Vector(this.x, this.y, this.length, this.angle * this.direct, this.alpha);
	        this.draw();
	    };

	    Planet.prototype.draw = function(){
	        this.ele = new createjs.Shape();
	        this.ele.graphics.f(this.planet.color).dc(this.vector.x, this.vector.y, 6);
	        this.ele.x = this.vector.x;
	        this.ele.alpha = this.vector.alpha;
	        this.ele.y = this.vector.y;
	        this.ele.regX = this.vector.x;
	        this.ele.regY = this.vector.y;
	    };

	    Planet.prototype.update = function(){
	        var vel = this.vector;
	        vel.setAngle(this.speed * this.direct + vel.getAngle());
	        this.ele.x = vel.x;
	        this.ele.y = vel.y;
	    };


	    function Vector(x, y, length, angle, alpha){
	        this.startX = x;
	        this.startY = y;
	        this.alpha = alpha;
	        this.angle = angle;

	        this.setX = function(x){
	            tihs.startX = x;
	        };

	        this.setY = function(y){
	            this.startY = y;
	        };

	        this.getAngle = function(){
	            return this.angle;
	        };

	        this.setAngle = function(angle){
	            this.angle = angle;
	            this.x = this.startX + Math.cos(this.angle) * this.length;
	            this.y = this.startY + Math.sin(this.angle) * this.length;
	        };

	        this.getLength = function(){
	            return this.length;
	        };

	        this.setLength = function(length){
	            this.length = length;
	            this.x = Math.cos(this.angle) * this.length;
	            this.Y = Math.sin(this.angle) * this.length;
	        };

	        this.getDistance = function(v2){
	            var dx = v2.x - this.x,
	                dy = v2.y - this.y;

	            return Math.sqrt(dx * dx + dy * dy);
	        };

	        this.setLength(length);
	        this.setAngle(angle);

	    };


	    //圆
	    function CircleAnimate(){
	        var circle = Emitter_config['circle'];
	        this.circles = [];
	        this.isplay = false;

	        this.box = new createjs.Container();
	        this.handle = null;
	        _contain.addChild(this.box);
	        for(var i=0; i<circle.offsetArr.length; i++){
	            this.circles.push(new Circle(i, circle));
	            this.box.addChild(this.circles[i].ele);
	        }
	    };

	    CircleAnimate.prototype.loop = function(){
	        var circles = this.circles;
	        for(var i=0; i<circles.length; i++){
	            circles[i].update();
	        }

	        this.handle = requestAnimationFrame(this.loop.bind(this));
	    };

	    CircleAnimate.prototype.play = function(){
	        !this.isplay && (this.loop(), this.isplay=true);
	    };

	    CircleAnimate.prototype.stop = function(){
	        this.handle && this.isplay && (cancelAnimationFrame(this.handle), this.handle=null, this.isplay=false);
	    };

	    function Circle(i, circle){
	        var circleArr = circle.offsetArr[i].split(',');
	        var xx = circleArr[0];
	        var yy = circleArr[1];

	        this.playend = false;
	        this.index = i;
	        this.direct = circleArr[2];
	        this.ele = new createjs.Container();
	        this.ele.alpha = circleArr[3];
	        this.x = h + xx*this.direct;
	        this.y = h/2 + yy*this.direct;
	        this.ele.x = this.xcache = this.x;
	        this.ele.y = this.ycache = this.y;
	        this.r = h * 0.7 * circleArr[5];
	        this.color = circle.color;
	        this.angle = rand(Math.PI*2, 0);
	        this.width = circleArr[4];
	        this.dotWidth = this.width *  (this.width > 3 ? 1.5 : 2);
	        this.box = new createjs.Container();
	        this.box.x = this.x;
	        this.box.y = this.y;
	        this.box.regX = this.x;
	        this.box.regY = this.y;
	        this.duration = this.r/w*10;
	        this.block = 0;


	        this.ele.addChild(this.box);
	        this.draw();
	    };

	    Circle.prototype.draw = function(){
	        var line = new createjs.Shape();
	        line.graphics.s(this.color).ss(this.width).dc(this.x, this.y, this.r);

	        this.dot = new createjs.Shape();
	        this.dx = this.x + this.r * Math.cos(this.angle);
	        this.dy = this.y + this.r * Math.sin(this.angle);
	        this.dot.graphics.f(this.color).dc(this.dx, this.dy, this.dotWidth);
	        this.box.addChild(line, this.dot);

	    };

	    Circle.prototype.update = function(){
	        var anl = TWO_PI / this.duration * this.direct;
	        this.box.rotation = this.box.rotation + anl;
	        this.block += rand(Math.PI*0.01, Math.PI*0.001);
	        this.box.x = this.box.x + Math.sin(this.block*this.direct) * 0.2;
	        this.box.y = this.box.y + Math.cos(this.block*this.direct) * 0.2;
	    };




	    //发射器
	    _A.Emitter = function(wrap, type){
	        this.type = type || 'circle';
	        this.wrap = document.getElementById(wrap);
	        this._canvas = document.createElement('canvas');
	        this.wrap.appendChild(this._canvas);

	        _contain = null;
	        this.init();
	    };

	    Emitter.prototype.init = function(){

	        this._stage = new createjs.Stage(this._canvas);
	        _contain = this.container = new createjs.Container();
	        this.ant = null;
	        this._stage.addChild(_contain);
	        this.resize(), this.create(this.type);

	        this.containx = this.container.x = h;
	        this.container.alpha = 0;
	        this._canvas.width = w*2, this._canvas.height = h*2,
	        _A.addEventListener('resize', this.resize.bind(this));

	        createjs.Ticker.setFPS(30);
	        createjs.Ticker.addEventListener('tick', this._stage);
	    };

	    Emitter.prototype.create = function(){
	        switch(this.type){
	            case 'round':
	                this.ant = new RoundAnimate();
	                break;
	            case 'planet':
	                this.ant = new PlanetAnimate();
	                break;
	            default:
	                this.ant = new CircleAnimate();
	                break;
	        }
	    };

	    Emitter.prototype.in = function(cb){
	        var cb = cb || function(){};
	        TweenMax.killTweensOf(this.container);
	        TweenMax.to(this.container, .8, {x: this.containx-h, alpha: 1, delay: 0.02, ease: Ease.easeIn, onComplete: cb});
	    };

	    Emitter.prototype.out = function(cb){
	        var cb = cb || function(){};
	        TweenMax.killTweensOf(this.container);
	        TweenMax.to(this.container, .5, {x: this.containx+h, alpha: 0, delay: 0.02, ease: Back.easeInOut, onComplete: cb});
	    };

	    Emitter.prototype.play = function(){
	        this.ant && this.ant.play();
	        this.ant && this.in();
	    };

	    Emitter.prototype.stop = function(){
	        var _this = this;
	        this.ant && this.out(function(){
	            _this.ant.stop();
	        });
	    };

	    Emitter.prototype.resize = function(){
	        var getBound = this.wrap.getBoundingClientRect();
	        w = getBound.width, h = getBound.height;
	        w2 = w*2, h2 = h*2;
	        this._canvas.style.width = w+'px', this._canvas.style.height = h+'px';
	    };





	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];

	    for(var x = 0; x < vendors.length && !_A.requestAnimationFrame; ++x) {
	        _A.requestAnimationFrame = _A[vendors[x]+'RequestAnimationFrame'];
	        _A.cancelAnimationFrame = _A[vendors[x]+'CancelAnimationFrame'] || _A[vendors[x]+'CancelRequestAnimationFrame'];
	    }

	    if (!_A.requestAnimationFrame) {
	        _A.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = _A.setTimeout(function() { callback(currTime + timeToCall); },
	                timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }

	    if (!_A.cancelAnimationFrame) {
	        _A.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	    }

	}(window);








/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var searchUrlConfig = {
	    getKeyWords : 'search/ajax/recWords', /** 获取关键词 */
	    getAssciate : 'search_json.json', /** 获取联想结果 */
	    globalSearch : 'search' /** 全局搜索的路由 */
	};

	!(function (_A) {
	    _A.setSearchUrl = function (key,url) {
	        if(searchUrlConfig[key]){
	            searchUrlConfig[key] = url.toString();
	        }else {
	            console.error('is errror');
	        };
	    }
	})(window);


	function urlJoin(v) {
	    var val = v == '' ? false : v;
	    var host = location.host;
	    var query = '/' + searchUrlConfig.globalSearch + '?query=' + val;
	    var url = (host+query);
	    val && window.open(url);
	}

	var $box = $('#vivo-head-wrap .gb-vivo-head'),
	    $title = $box.find('.nav-gb'),
	    $searchBox = $box.find('.v_h_search'),
	    $searchOpen = $box.find('.nav-t-search'),
	    $searchClose = $searchBox.find('.search-close'),
	    $searchResults = $searchBox.find('.results'),
	    $input = $searchBox.find('input'),
	    $contentBox = $searchBox.find('.search-content'),
	    $link = $contentBox.find('.link'),
	    $userBtn = $('.nav-t-user'),
	    $msearchBox = $('.gb-vivo-s-nav'),
	    $mresults = $msearchBox.find('.results'),
	    $mmenulist = $msearchBox.find('li');

	var SearchBuild = __webpack_require__(8);
	var SearchKeyEvent = __webpack_require__(9);

	var searchkeyevent = new SearchKeyEvent({
	    wrap: '#vivo-head-wrap .v_h_search',
	    input: '.search-top input',
	    list: '.search-content',
	});

	var Search = {
	    getKey : function () {
	        $.get(searchUrlConfig.getKeyWords, function (data) {
	            data.keyWord && $input.attr("value", data.keyWord);
	        });
	    },
	    /**  初始化搜索模块 */
	    init : function () {
	        var that = this;
	        var UserControl = __webpack_require__(4).UserControl;

	        var searchAnimate = new TimelineMax({paused: true});
	        var linkAnimate = new TimelineMax({paused: true});
	        linkAnimate.staggerFrom($link.children(), .45, {y: -25, autoAlpha: 0, ease: Ease.easeInOut}, 0.1, '+=.3');

	        searchAnimate.from($searchBox, .7, {autoAlpha: 0}, 0)
	            .to($searchOpen.parent(), .5, {right: '8%', width : '3%'}, 0.2)
	            .from($searchClose, .3, {scale : 0,  rotation : -180}, 0.2)
	            .to($userBtn, .1, {autoAlpha: 0}, 0)
	            .from($input, .2, {x: 40, autoAlpha: 0}, .6);

	        var size = $title.size();
	        for (var i= size; i>=0; i--){
	            searchAnimate.add(TweenMax.to($title.eq(i).find('a'), .2, {scale: 0}), (size-i)*0.04);
	        }
	        $mresults.hide();

	        var $mask = $('#gb-mask-layer');
	        TweenMax.set($searchBox, {display: 'block'});
	        TweenMax.set($mask, {display: 'none', autoAlpha: 0});
	        that.play = false;

	        var $bnSwitch = $('#vivo-high-switch');

	        function doc(e) {
	            if(!$box.hasClass('openSearch')) return false;
	            e = window.event || e;
	            var obj = $(e.srcElement || e.target);
	            if(!$(obj).is($input) && !$(obj).parents('dl').is($link) && !$(obj).parent().is($bnSwitch) && !$(obj).is($searchOpen) && !$(obj).parents('section').is($searchResults)){
	                that.close();
	            }
	        }

	        /**  搜索动画效果处理 */
	        $searchOpen.mouseleave(function () {
	            $searchOpen.removeClass('leave');
	        });

	        $searchOpen.click(function(){
	            $searchOpen.addClass('leave');
	            searchkeyevent.unenbleWheel();
	            if ($box.hasClass('openSearch')){
	                urlJoin($input.val());
	                return false;
	            }else {
	                var u = $box.find('.vivo-head').hasClass('openUser');
	                u && UserControl(u);
	                that.play = true;
	                // $input.val('');
	                searchAnimate.timeScale(1.5).play();
	                TweenMax.set($contentBox, {display: 'block'});
	                TweenMax.to($contentBox, .3, {autoAlpha: 1, ease: Ease.easeIn}, 0.4);
	                TweenMax.to($mask, .2, {display: 'block', autoAlpha: 1}, 0);
	                linkAnimate.seek(0).timeScale(1.5).play();
	                setTimeout(function(){
	                    $box.addClass('openSearch');
	                    $input.focus();
	                    $(document).on('click', function (e) {
	                        $box.hasClass('openSearch') && doc(e);
	                    });
	                },500);
	            }
	        });

	        $searchClose.click(function(){
	            $searchOpen.removeClass('leave');
	            searchkeyevent.enbleWheel();
	            $(document).off('click');
	            searchAnimate.timeScale(1.5).reverse();
	            TweenMax.to($contentBox, 0.3, {autoAlpha: 0, onComplete : function () {
	                TweenMax.set($contentBox,{display: 'none'});
	                that.SearchControl(false);
	            }});
	            TweenMax.to($mask, .2, {display: 'none',autoAlpha: 0}, 0);
	            that.play = false;
	            $(document).off('click');
	            $box.removeClass('openSearch Searching');
	            $mresults.hide();
	        });

	    },
	    /**  搜索框功能 */
	    SearchPlay : function () {
	        var that = this;

	        function associate() {
	            $input.keyup(function (e) {
	                var cantpush = e.which == '37' || e.which == '38' || e.which == '39';
	                if(cantpush) return false;
	                var value = $(this).val();
	                var val = value.replace(/(^\s+)|(\s+$)/g,"") ? value.replace(/\s/g,"") : value;
	                var isglobal = val.indexOf(' ') > -1;
	                if(e.which == '13' ||  e.which == '108'){
	                    !isglobal && urlJoin(val);
	                }else if(e.which != '40'){
	                    if(val == ''){
	                        that.SearchControl(false, self.ismobile);
	                    }else {
	                        !isglobal ? getAssciate(val) : that.SearchControl(false, self.ismobile);
	                    }

	                }
	            });
	        }

	        function getAssciate(v) {
	            if(!v) return false;
	            $.get(searchUrlConfig.getAssciate, {
	                query : v
	            }, function (data) {
	                var html = SearchBuild.ContentBuild(data.result);
	                html && that.SearchControl(html, self.ismobile);
	            });
	        }

	        $input.on({
	            'compositionstart' : function (e) {
	                $input.off('keyup');
	            },
	            'compositionend' : function (e) {
	                getAssciate($(this).val());
	                associate();
	            }
	        });

	        associate();

	    },
	    /**  搜索结果控制器*/
	    SearchControl : function (html, mb) {
	        if(html){
	            if(mb){
	                $mmenulist.hide();
	                $mresults.empty().html(html).show();
	            }else {
	                $link.hide();
	                $box.addClass('Searching');
	                $searchResults.empty().html(html).show();
	                var contentkeyevent = new SearchKeyEvent({
	                    wrap: '#vivo-head-wrap .v_h_search',
	                    input: '.search-top input',
	                    list: '.search-content .results',
	                });
	            }
	        }else {
	            if(mb){
	                $mresults.empty().html(html).hide();
	                $mmenulist.show();
	                $input.val('');
	            }else {
	                $searchResults.empty().html(html).hide();
	                $link.show();
	            }
	        }
	    },
	    MobileFun : function () {
	        var that = this;

	        that.Recovery();
	    },
	    open : function () {
	        $searchOpen.click();
	    },
	    close : function () {
	        $searchClose.click();
	    },
	    Recovery :function () {
	        var that = this;
	        that.SearchControl(false, self.ismobile);
	        $searchClose.click();
	        $searchOpen.off('click');
	        $searchClose.off('click');
	        $(document).off('click');
	    }
	};

	module.exports = Search;


/***/ },
/* 8 */
/***/ function(module, exports) {

	function ContentBuildFun(table, arr, total) {
	    var html = '<dl><dt>'+table+'（<span>'+total+'</span>）</dt>';
	    for(var i=0; i< arr.length; i++){
	        html += '<dd><a href="'+arr[i].url+'">'+arr[i].name+'</a></dd>';
	    }
	    html += '</dl>';
	    return html;
	}


	/**  生成搜索结果的HTML*/
	var SearchBuild = {
	    LinkBuild : function (data) {
	        var html ='<dt><a href="#">全局搜索</a></dt>';
	        for(var i=0; i<data.length; i++){
	            html += '<dd><a href="'+data[i].linkUrl+'">'+data[i].word+'</a></dd>';
	        }
	        return html;
	    },
	    ContentBuild : function (data) {
	        var html = '';
	        for (var i in data){
	            var table = data[i].name;
	            var value = data[i].value;
	            var total = data[i].number;
	            html += ContentBuildFun(table,value,total);
	        }
	        return html;
	    }
	};

	module.exports = SearchBuild;

/***/ },
/* 9 */
/***/ function(module, exports) {

	function SearchKeyEvent (opt) {
	  this.$searchWrap = $(opt.wrap);
	  this.$searchInput = this.$searchWrap.find(opt.input);
	  this.$searchlist = this.$searchWrap.find(opt.list).children('dl');
	  this.special = opt.special || null; //className
	  this.mutil = this.check_mutil();
	  this.limitHeight = 0;


	  //add event
	  this.check_elements(opt.list);
	  this.addkey_press();
	};

	SearchKeyEvent.prototype.addkey_press = function (){
	  var _this = this;
	    if(_this.$searchlist.children('dd').size() < 1){
	        return false;
	    }
	  $(document).on({
	    keyup : function (evt){
	      if (!_this.isvisible()) return false;
	      var keyname = getKeyName(evt);
	      var islastElement = _this.islast();
	      var isfirstElement = _this.isfirst();


	      if (keyname == 'up' && !isfirstElement) {
	        var $firstElement = _this.$searchlist.eq(0).children('dd');
	        if($firstElement.first().hasClass('current')){
	          $firstElement.first().removeClass('current');
	          _this.$searchInput.focus();
	        }else{
	          var $currentElement = _this.$searchlist.children('.current');
	          if($currentElement.index() === _this.$searchlist.children('dt').index() + 1) {
	            var curIndex = $currentElement.parent().index();

	              var tmpindex = _this.check_elements(curIndex, 'up');

	              console.log(tmpindex);
	            $currentElement.removeClass('current');
	              if(!tmpindex && tmpindex !== 0){
	                  _this.$searchInput.focus();
	                  return false;
	              }
	            _this.$searchlist.eq(tmpindex).children('dd').last().addClass('current');
	            return false;
	          }
	          $currentElement.prev('dd').addClass('current').siblings().removeClass('current');
	        }
	      }



	      if (keyname == 'down' && !islastElement) {
	        if(isfirstElement){
	          _this.$searchlist.children('dd').first().addClass('current');
	          _this.$searchInput.blur();
	        }else{
	          var $currentElement = _this.$searchlist.children('.current');
	          if($currentElement.index() === $currentElement.parent().children().last().index()) {
	            var curIndex = $currentElement.parent().index();
	            var tmpindex = _this.check_elements(curIndex);
	              if(!tmpindex) return false;
	            $currentElement.removeClass('current');
	            _this.$searchlist.eq(tmpindex).children('dd').first().addClass('current');
	            return false;
	          }
	          $currentElement.next('dd').addClass('current').siblings().removeClass('current');
	        }
	      }


	      if (keyname == 'enter') {
	        if(!isfirstElement) {
	          var alink = _this.$searchlist.find('.current a').attr('href');
	          location.href = alink;
	        }
	      }


	      evt.preventDefault();
	    }
	  });
	};

	SearchKeyEvent.prototype.check_mutil = function (){
	  return this.$searchlist.size() > 1 ? true : false;
	};

	SearchKeyEvent.prototype.isvisible = function (){
	  return this.$searchlist.first().is(':visible');
	};

	SearchKeyEvent.prototype.isfirst = function (){
	  return this.$searchlist.children().hasClass('current') ? false : true;
	};

	SearchKeyEvent.prototype.islast = function (){
	  return this.$searchlist.last().children().last().hasClass('current') ? true : false;
	};

	SearchKeyEvent.prototype.check_elements = function (ind, type){
	  if(type === 'up'){
	    while (ind--) {
	      if(this.$searchlist.eq(ind).children('dd').size() > 0){
	        return ind;
	      }
	      if(ind == 0){
	          return false;
	      }
	    }
	  }else{
	    while (++ind) {
	      if(this.$searchlist.eq(ind).children('dd').size() > 0){
	        return ind;
	      }
	        if(ind >= this.$searchlist.size()){
	            return false;
	        }

	    }
	  }

	};



	SearchKeyEvent.prototype.enbleWheel = function() {
	  $(window).scrollTop(this.limitHeight);
	  $('html').removeClass('limit-content');
	  $('#vivo-head-wrap').next().css({marginTop: ''});
	};

	SearchKeyEvent.prototype.unenbleWheel = function() {
	  this.limitHeight = $(window).scrollTop();
	  $('html').addClass('limit-content');
	  $('#vivo-head-wrap').next().css({marginTop: -this.limitHeight});
	};


	//获取键名
	function getKeyName (evt) {
	  switch (evt.which) {
	    case 38:
	      return 'up'
	      break;
	    case 40:
	      return 'down'
	      break;
	    case 13:
	      return 'enter'
	      break;
	    default:
	      // console.log(evt.which);
	      break;

	  };
	};

	module.exports = SearchKeyEvent;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Search = __webpack_require__(7);

	var $stage =  $('#vivo-head-wrap .gb-vivo-head'),
	    $searchBox = $('.v_h_search'),
	    $searchInput = $searchBox.find('.search-top input'),
	    $navList = $stage.find('.gb-vivo-h-nav'),
	    $searchList = $stage.find('.gb-vivo-s-nav'),
	    $navDom = $navList.find('.nav-gb'),
	    $searchDom = $searchList.find('.nav-gb'),
	    $searchBtn = $stage.find('.menu-search'),
	    $contentBox = $stage.find('.search-content'),
	    $listBtn  = $stage.find('.gb-vivo-h-menu');

	var m_search = new TimelineMax({paused: true});
	m_search.add(TweenMax.to($searchBox, 0.01, { display : 'block', autoAlpha: 1}))
	    .add(TweenMax.to($searchInput, 0.1, { scale: 1, autoAlpha : 1}));
	TweenMax.set($contentBox,{display: 'none'});

	var isOpen = false;
	var isSearch = false;

	var MobileHeader = {
	    /**  初始化移动端头部功能 */
	    Init : function () {
	        self.mHeaderInit = true;
	        var that = this;
	        !$navList[0].nav_ant && ($navList[0].nav_ant = new TimelineMax({paused: true}));
	        $navList[0].nav_ant.staggerFrom($navDom, 0.2, { scale: 1.1, x : -20, y : -20, autoAlpha: 0, ease: Ease.easeOut  }, 0.05);

	        !$searchList[0].sea_ant && ($searchList[0].sea_ant = new TimelineMax({paused: true}));
	        $searchList[0].sea_ant.staggerFrom($searchDom, 0.2, { scale: 1.1, x : -20, y : -20, autoAlpha: 0, ease: Ease.easeOut }, 0.05, '+=.4');

	        var Header = __webpack_require__(4);
	        $listBtn.click(function () {
	            var v = $stage.hasClass('openMenu');
	            !v && Header.UserControl(!v);
	            that.MenuControl(v);
	        });
	        $searchBtn.click(function (e) {
	            e.preventDefault();
	            if ($stage.hasClass('openSearch')) return false;
	            var v = $stage.hasClass('openSearch');
	            isSearch = true;
	            that.SearchControl(v);
	        });
	    },
	    /**  菜单动画控制器*/
	    MenuControl : function (v) {
	        var $mask = $('#gb-mask-layer');
	        if(v){
	            isOpen = false;
	            $navList[0].nav_ant.timeScale(2.5).reverse();
	            $searchList[0].sea_ant.timeScale(2.5).reverse();
	            m_search.timeScale(2.5).reverse();
	            $stage.removeClass('openMenu openSearch');
	            $stage.removeClass('openUser');
	            Search.SearchControl(false, true);
	            TweenMax.to($mask, 0.3, {autoAlpha: 0, display: 'none'},0.1);
	        }else {
	            isOpen = true;
	            $stage.addClass('openMenu');
	            $navList[0].nav_ant.timeScale(1).play();
	            TweenMax.to($mask, 0.3, {autoAlpha: 1, display: 'block',},0.1);
	        }
	    },
	    /**  搜索动画控制器*/
	    SearchControl : function (v) {
	        if(!v){
	            $stage.addClass('openSearch');
	            $navList[0].nav_ant.timeScale(2.5).reverse();
	            $searchList[0].sea_ant.timeScale(1).play();
	            m_search.timeScale(0.5).play();
	        }
	    },
	    Recovery: function () {
	        var $mask = $('#gb-mask-layer');
	        $searchInput.val('');
	        $navDom.attr('style','');
	        $searchBox.attr('style','');
	        $searchInput.attr('style','');
	        $stage.removeClass('openMenu openSearch openUser');
	        TweenMax.to($mask, 0.3, {autoAlpha: 0, display: 'none'},0.1);
	    }
	};


	module.exports = MobileHeader;


/***/ }
/******/ ]);