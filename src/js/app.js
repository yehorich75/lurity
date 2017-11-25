import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

tl
	.from( $('.logo__s'), 2, {
	y: -10
	},"-=1.5")
	.from( $('.logo__y'), 2, {
	y: -10
	},"-=1.5")
	.from( $('.logo__t'), 2, {
		y: -20
	} )
	.from( $('.logo__a'), 2,{
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__h'), 2, {
		y: 10
	},"-=1.5")
	.from( $('.logo__2a'), 2, {
		rotation: -28,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__2t'), 2, {
		y: 10
	},"-=1.5")
		.from( $('.logo__3a'), 2, {
		rotation: 28,
		transformOrigin: "100% 50%"
	},"-=1.5");
