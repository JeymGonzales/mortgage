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
                console.log('not valid');
            } else {
                console.log('valid');
            }
        }

        let nextQuestion = function() {
            curr.classList.remove('showQuestion');
            curr.classList.add('hideQuestion');
            let next = this.getAttribute('data-to');
            console.log('next: '+next);
            document.getElementById(next).classList.remove('hideQuestion');
            document.getElementById(next).classList.add('showQuestion');
        }

        if (fields.length > 0) {
            console.log('with fields');
            for(let i = 0; i<fields.length;i++) {
                if(fields[i].value != '') {
                    if(fields[i].getAttribute('name') === 'email') {
                        validateEmail(fields[i].value)
                    } else {
                        nextQuestion.bind(this)();
                    }
                } 
            }            
        } else {
            console.log('no fields');
            nextQuestion.bind(this)();
        }



    }

    previous() {
        let curr =  this.parentNode.parentNode;
        let back = this.getAttribute('data-from');
        console.log('back: '+back);
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