import { fillObject, validateForm } from '../functions.js';
import { petInput, ownerInput, phoneInput, dateInput, timeInput, symptomsInput ,form } from '../variables.js'
import UI from './UI.js';
import Register from './Register.js';

const ui = new UI();
const register = new Register();

class App {
    constructor() {
        this.initApp()
    }

    initApp() {
        document.addEventListener('DOMContentLoaded', () => {
            ui.printHTML(register);
        })

        eventListeners();
        function eventListeners() {
            petInput.addEventListener('change', fillObject)
            ownerInput.addEventListener('change', fillObject)
            phoneInput.addEventListener('change', fillObject)
            dateInput.addEventListener('change', fillObject)
            timeInput.addEventListener('change', fillObject)
            symptomsInput.addEventListener('change', fillObject)
            form.addEventListener('submit', validateForm)
        }
        
    }
}

export default App;