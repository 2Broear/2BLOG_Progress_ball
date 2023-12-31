'use strict';
const progress_ball = {
    dom: {
        elements: [{
            css: document.createElement('STYLE'),
        }],
        initiate: function(){
            const _p = progress_ball,
                  _m = _p.mods.methods,
                  _b = _p.mods.behavior,
                  _s = _p.init?.conf,
                  s_ = _s.static,
                  _c = s_.classs,
                  _c_show = _c.show,
                  _c_wave = _c.wave,
                  _c_wrapper = _c.wrapper,
                  _c_container = _c.container,
                  _e = _s.element,
                  _e_percent = _e.percent.class,
                  _e_middle = _e.middle.class,
                  s_size = s_.size,
                  s_scheme = s_.scheme,
                  color_theme = s_scheme.theme,
                  color_light = s_scheme.light,
                  color_heavy = s_scheme.heavy,
                  css = _p.dom.elements[0].css,
                  scroll_window = _m.dom_validator(_e.sc_window, window);
            css.innerText = `html,body{scroll-behavior:smooth;}.${_c_wrapper}{position:fixed;z-index:9999;right:15px;bottom:0;opacity:0;transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);transition-property:transform,opacity;transition:.5s ease;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;}.${_c_wrapper} .${_c_container}{color:${color_heavy};width:${s_size}px;height:${s_size}px;text-align:center;font-family:"Microsoft YaHei","微软雅黑","Microsoft JhengHei","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,Helvetica,Lucida Grande,Tahoma,sans-serif;position:relative}.${_c_wrapper} .${_c_container} div:hover{background:${color_theme}}.${_c_wrapper} .${_c_container} div{cursor:pointer;font-size:14px;width:72%;height:72%;background:currentColor;border-radius:50%;margin:0 auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:transform .35s ease;display: flex;align-items: center;justify-content: center}.${_c_wrapper} .${_c_container} div,.${_c_wrapper} .${_c_container} .${_e_percent} i{will-change:transform;}.${_c_wrapper} .${_c_container} div em,.${_c_wrapper} .${_c_container} div b,.${_c_wrapper} .${_c_container} div i{color:${color_light};font-family:'icomoon';font-style:normal;margin-top:-2px;position:relative;display:inline-block;user-select:none;-webkit-user-select:none;}.${_c_wrapper} .${_c_container} div [data-icon]:not([data-icon=""]){color:transparent;}.${_c_wrapper} .${_c_container} .${_e_percent}{color:currentColor;width:inherit;height:inherit;background:currentColor;border:2px solid currentColor;overflow:hidden}.${_c_wrapper} .${_c_container} .${_e_percent} b::before{content:attr(data-percent)'%';}.${_c_wrapper} .${_c_container} .${_e_percent} b{line-height:${s_size - 2}px;position:relative;z-index:1;margin:auto;font-size:inherit;}.${_c_wrapper} .${_c_container} .${_e_percent} i{width:100%;height:auto;display:block;transform: translateY(100%);-webkit-transform: translateY(100%);position:inherit;bottom:0;left:0;transition:transform .15s linear;/*background:currentColor;*/}.${_c_wrapper} .${_c_container} .${_e_percent}:hover{background:currentColor!important}.${_c_wrapper} .${_c_container} .${_e_middle}.disabled{cursor:not-allowed;pointer-events:none}.${_c_wrapper} .${_c_container} div em:before,.${_c_wrapper} .${_c_container} .${_e_middle} i:before{content: attr(data-icon);font-size:20px;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);margin-top:-1px;color:initial;}.${_c.switcher} .${_c_wrapper} .${_c_container} .${_e_middle} i:before{content:'${_e.middle.icons.actived}'}.${_c_wrapper} .${_c_container} .${_e_percent} span{display:block;width:100%;min-height:${s_size}px;position:relative;/*overflow:hidden;*/}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:before,.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:after{animation-name:rotate;-webkit-animation-name:rotate;}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:before{top:6px;border-radius:36%;animation-duration:10s;-webkit-animation-duration:10s;}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:after{top:3px;opacity:.5;border-radius:44%;animation-duration:7s;-webkit-animation-duration:7s;}.${_c_wrapper} .${_c_container} .${_e_percent} span:before,.${_c_wrapper} .${_c_container} .${_e_percent} span:after{content:"";width:200%;height:200%;position:absolute;top:0%;left:0%;left:-50%;background:${color_theme};animation-iteration-count:infinite;animation-timing-function:linear}@keyframes rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.${_c_wrapper}.${_c_show}{opacity:1;transform:translate(0px,-25px);-webkit-transform:translate(0px,-25px);}.${_c_wrapper}.${_c_show} .${_e.top.class}{transform:translate(-50%,-225%);-webkit-transform:translate(-50%,-225%);}.${_c_wrapper}.${_c_show} .${_e_middle}{transform:translate(-186%,-186%);-webkit-transform:translate(-186%,-186%);}.${_c_wrapper}.${_c_show} .${_e.bottom.class}{transform:translate(-225%,-50%);-webkit-transform:translate(-225%,-50%);}`;
            document.head.appendChild(css);
            if(!scroll_window.scrollTo){
                scroll_window.scrollTo = function (x, y) {
                    scroll_window.pageXOffset = x;
                    scroll_window.pageYOffset = y;
                }
            }
            let w_ = document.createElement('DIV'),
                c_ = document.createElement('DIV');
            w_.className = _c.wrapper;
            c_.className = _c.container;
                c_.appendChild(_m.dom_binder.apply(_e, [_e.top.class, `<em data-icon="${_e.top.icon}">${_e.top.text}</em>`, ()=>{
                    _b.scroll_click.call(_p, _e.top, ()=>scroll_window.scrollTo(0, 0));
                }]));
                c_.appendChild(_m.dom_binder.apply(_e, [_e.middle.class, `<i data-icon="${_e.middle.icons.default}">${_e.middle.text}</i>`, ()=>{
                    _b.scroll_click.call(_p, _e.middle, ()=>_m.theme_switcher.call(_p));
                }]));
                c_.appendChild(_m.dom_binder.apply(_e, [_e.bottom.class, `<em data-icon="${_e.bottom.icon}">${_e.bottom.text}</em>`, ()=>{
                    _b.scroll_click.call(_p, _e.bottom, ()=>scroll_window.scrollTo(0, 99999));
                }]));
                c_.appendChild(_m.dom_binder.apply(_e, [_e.percent.class, `<b data-percent="${_e.percent.text}"></b><i class="wave"><span></span></i>`]));
            w_.appendChild(c_);
            _e.wrapper = w_;
        },
    },
    mods: {
        methods: {
            dom_binder: function(el_cls, el_child, el_event=false){
                const el = document.createElement('DIV');
                el.classList.add(el_cls);
                el.innerHTML += el_child;
                this[el_cls] = el; //this[0] = el;
                if(el_event && typeof(el_event)==='function') el_event();
                return el;
            },
            dom_validator: (org_el, bak_el=null)=>{
                return !org_el || org_el instanceof HTMLElement===false ? bak_el : org_el;
            },
            theme_switcher: function(){
                const _s = this.init?.conf,
                      sw_target = this.mods.methods.dom_validator(_s.element.sw_target, document.body),
                      sw_classs = _s.static.classs.switcher;
                sw_target.classList.contains(sw_classs) ? sw_target.classList.remove(sw_classs) : sw_target.classList.add(sw_classs);
                console.log('theme switching..', sw_target);
            },
            closure_debouncer: (callback=false, delay=200)=>{
                var timer = null;
                return function(){
                    if(timer) clearTimeout(timer);
                    timer = setTimeout(function(){
                        callback.apply(this, arguments);
                    },delay)
                }
            },
            closure_throttler: (callback=false, delay=200)=>{
                let closure_variable = true;  //default running
                return function(){
                    if(!closure_variable) return;  //now running..
                    closure_variable = false;  //stop running
                    setTimeout(()=>{
                        callback.apply(this, arguments);
                        closure_variable = true;  //reset running
                    }, delay);
                };
            },
        },
        behavior: {
            scroll_click: function(t, f){
                if(!t) return;
                try {
                    if(!f || typeof(f)!=='function') throw new Error('scroll callback invalid');
                    const debounce_smooth = this.init.conf.static.smooth.click,
                          debounce_events = this.mods.methods.closure_debouncer(f, debounce_smooth);
                    t.onclick = ()=>debounce_events();
                } catch (error) {
                    console.log(error)
                }
            },
            scroll_fn: function(event){
                const e = event || window.event,
                    t = e.target || e.srcElement,
                    _s = this.init?.conf,
                    _e = _s.element,
                    validFrame = this.mods.methods.dom_validator(_e.sc_window),
                    scrollFrame = validFrame ? validFrame : document;  // default #document but document.documentElement
                if(t!==scrollFrame) return; // scrollFrame only
                try {
                    if(validFrame) scrollFrame.style.cssText = "scroll-behavior: smooth;";
                    let _c = _s.static.classs,
                        waves = _c.wave,
                        shows = _c.show,
                        childs = _e.percent.children,
                        child = childs[1].firstChild;
                    if(!childs) throw new Error('missing childs!');
                    var scrollTop = validFrame ? scrollFrame.scrollTop : parseInt(document.documentElement.scrollTop) || document.body.scrollTop,
                        frameHeight = validFrame ? scrollFrame.clientHeight : window.innerHeight,
                        docHeight = validFrame ? scrollFrame.scrollHeight : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
                        docPercent = Math.ceil((scrollTop / (docHeight-frameHeight)) * 100);
                    childs[0].dataset.percent = docPercent;
                    childs[1].style.transform = `translateY(${100 - docPercent}%)`;
                    docPercent>0 ? _e.wrapper.classList.add(shows) : _e.wrapper.classList.remove(shows);
                    docPercent<=0 || docPercent>=100 ? child.classList.remove(waves) : child.classList.add(waves);
                } catch (error) {
                    console.log(error);
                }
            },
            scroll_handler: function(delay=200){
                const _m = this.mods;
                return _m.methods.closure_throttler((e)=>{
                    _m.behavior.scroll_fn.call(this, e);
                }, delay);
            },
        }
    },
    __proto__: {
        init: function(user_conf = {}){
            try {
                const PRO = progress_ball,
                      INT = PRO.init;
                // rewrite user-conf.
                let that = this;
                if(Object.getPrototypeOf(that) !== INT.prototype){
                    that = INT.prototype;
                    // throw new Error('"new" generator progress init required.');
                    console.warn('keyword "new" is recommended for initiate, current pointed:', this);
                }
                // const _presets = that._preseter();
                Object.defineProperty(that, '_conf', {
                    // value: _presets._rewriter.apply(that, [user_conf, _presets]),
                    value: that._singleton_conf._rewriter.call(that, user_conf),
                    // enumerable: true,
                });
                user_conf = (INT.conf = that._conf);
                // init dom..
                PRO.dom.initiate();
                // load dom..
                document.body.appendChild(user_conf.element.wrapper);
                // bind/exec dom event..
                const pro_mods = PRO.mods,
                      scroll_window = pro_mods.methods.dom_validator(user_conf.element.sc_window, window);
                scroll_window.addEventListener('scroll', pro_mods.behavior.scroll_handler.call(PRO, user_conf.static.smooth.scroll), false);
                // init done.
                console.log('progress initiated.', PRO);
            } catch (error) {
                console.warn(error)
            }
        },
    }
};

Object.defineProperties(progress_ball.init.prototype, {
    _singleton_conf: {
        value: function(){
            let private_presets = {
                    static: {
                        size: 50,
                        smooth: {scroll: 200,click: 200,},
                        scheme: {theme: '#eb6844',light: 'whitesmoke',heavy: '#4a4a4a',},
                        classs: {wrapper: 'progress_widget',container: 'progress_ball',switcher: 'progress_switcher',show: 'pull_up',wave: 'wave_up',},
                    },
                    element: {
                        wrapper: null,
                        sc_window: null,
                        sw_target: null,
                        top: {class: 'top',text: '顶',icon: '',},
                        middle: {class: 'middle',text: '',icons: {default: '☀️',actived: '🌙',}},
                        bottom: {class: 'bottom',text: '底',icon: '',},
                        percent: {class: 'percent',text: '0',},
                    },
                };
            return {
                // private_preset: private_presets,
                public_default: Object.create(null),
                _rewriter: function fn(conf=this.public_default, opts=private_presets) {
                    if(opts &&typeof opts === "object"){
                        for(const [key, val] of Object.entries(opts)){
                            conf[key] ||= val;  // back-write (mark non-existent property)
                            // this._rewriter.apply(this, [opts[key], val]);
                            fn.apply(this, [conf[key], val]);  // recursion-loop (use fn insted for recursion-func)
                            // arguments.callee.apply(this, [conf[key], val]);
                        }
                    }
                    private_presets = null;  // clear closure recycle-quotes
                    return conf;
                },
            }
        }(),
        configurable: false,
    },
});
