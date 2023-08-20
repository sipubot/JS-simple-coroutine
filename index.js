
var SIPUCOroutine = (function (SIPUCOroutine, $, undefined) {
	"use strict";
	//main struct
	SIPUCOroutine.DATA = {};
    
	let MainT = [];
	let EndMain = {};
    let LowT = [];
    let EndLow = {};
    let Looper = setInterval(function (){
        //
        if (MainT.length == 0 && EndMain.length == 0) {
            while(LowT.length > 0) {
                let _ = LowT.pop();
                EndLow[_] = new Date().getTime();
            }
        }
        while(MainT.length > 0) {
            let _ = MainT.pop();
            EndMain[_] = new Date().getTime();
        }
    }, 100);

    let Cheker = function () {
        for (const [key, value] of Object.entries(EndMain)) {
            //console.log(`${key}: ${value}`);
            let now = new Date().getTime();
            if (value - now > 360000) {
                //thread Fail
                delete EndMain[key];
            }
        };
    };

	SIPUCOroutine.run = function () {
	};
	return SIPUCOroutine;
})(window.SIPUCOroutine || {}, jQuery);
SIPUCOroutine.run();