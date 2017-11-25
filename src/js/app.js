import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

tl
	.from( $('.logo__s'), 1, {
	y: -10
	},"-=1")
	.from( $('.logo__y'), 1, {
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1")
	.from( $('.logo__t'), 1, {
		y: -10
	} )
	.from( $('.logo__a'), 1,{
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1")
	.from( $('.logo__h'), 1, {
		y: 10
	},"-=1")
	.from( $('.logo__2a'), 1, {
		rotation: -28,
		transformOrigin: "100% 50%"
	},"-=1")
	.from( $('.logo__2t'), 1, {
		y: 10
	},"-=1")
		.from( $('.logo__3a'), 1, {
		rotation: 28,
		transformOrigin: "100% 50%"
	},"-=1");
