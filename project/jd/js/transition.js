;(function(w){
	var transitionEventName={
		transition: 'transitionend',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
		OTransition: 'oTransitionEnd'
	}
	var transition={
		end:'',
		isSupport:false
	}
	for(key in transitionEventName){
		if(document.body.style[key]!==undefined){
			transition.end=transitionEventName[key];
			transition.isSupport=true;
			break;
		}
	}
	w.kuazhu=w.kuazhu||{};
	w.kuazhu.transition=transition;
})(window);