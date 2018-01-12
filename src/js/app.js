import '../css/main.scss';
import { RandomGenerator } from './random-generator';
import { Question } from './question';

class App {

   constructor() {
       this.components = [];
   }

   register(component) {
       this.components.push(component);
   }

   init() {
       this.components.forEach(component => {
           component.init();
       });
   }

}

const app = new App();

app.register(new Question);
app.register(new RandomGenerator);

// console.log(app)


document.addEventListener('DOMContentLoaded', app.init.bind(app));