const _ = require('lodash');

export class Question {

	constructor() {
        this.next = document.querySelectorAll('.js-next');
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
                console.log('not valid')
            } 
        }

        for(let i = 0; i<fields.length;i++) {
            if(fields[i].value != '') {
                if(fields[i].getAttribute('name') === 'email') {
                    validateEmail(fields[i].value)
                } else {
                    curr.classList.add('hideQuestion');
                    let next = this.getAttribute('data-to')
                    document.getElementById(next).classList.add('showQuestion');
                }
            } 
        }
    }

    bindClick() {
        for(let i = 0; i<this.next.length; i++) {
            this.next[i].addEventListener('click', this.validate);
        }
    }


}