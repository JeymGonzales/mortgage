export class RandomGenerator {

	init() {
		// console.log('hi im random');
	}

    static randomInteger() {
        // console.log('test');    	
        return Math.ceil(Math.random() * 100);
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}