const _ = require('lodash');

export class Question {

	constructor() {
        this.next = document.querySelectorAll('.js-next');
        this.back = document.querySelectorAll('.js-back');
	}

	init() {
        if(!this.next) {
            return false;
        } 
        
        this.bindClick();
	}

    validate() {
        let curr =  this.parentNode.parentNode;
        let fields = curr.querySelectorAll('input');

        let validateEmail = function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let test = re.test(email.toLowerCase());

            if(!test) {
                return false;
            } else {
                return true;
            }
        }

        let nextQuestion = function() {
            curr.classList.remove('showQuestion');
            curr.classList.add('hideQuestion');
            let next = this.getAttribute('data-to');
            document.getElementById(next).classList.remove('hideQuestion');
            document.getElementById(next).classList.add('showQuestion');
        }

        if (fields.length > 0) {
            let input = [];
            for(let i = 0; i<fields.length;i++) {
                if(fields[i].value != '') {
                    input.push(true);
                    if(fields[i].getAttribute('type') === 'email') {
                        if(validateEmail(fields[i].value) == true) {
                            input.push(true);
                        } else {
                            input.push(false);
                        }
                    }
                } else {
                    input.push(false);
                }
            }

            // check array for false
            if (!input.includes(false)) {
                nextQuestion.bind(this)();
            }           
        } else {
            nextQuestion.bind(this)();
        }



    }

    previous() {
        let curr =  this.parentNode.parentNode;
        let back = this.getAttribute('data-from');
        curr.classList.remove('showQuestion');
        curr.classList.add('hideQuestion');
        document.getElementById(back).classList.remove('hideQuestion');
        document.getElementById(back).classList.add('showQuestion');
    }

    bindClick() {
        for(let i = 0; i<this.next.length; i++) {
            this.next[i].addEventListener('click', this.validate);
            this.back[i].addEventListener('click', this.previous);
        }
    }


}