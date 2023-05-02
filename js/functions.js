import { petInput, ownerInput, phoneInput, dateInput, timeInput, symptomsInput, form, btnSubmit } from "./variables.js";
import UI from "./classes/UI.js";
import Register from "./classes/Register.js";

let edit = false;

const ui = new UI();
const register = new Register();

// Main Object
const patientObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    time: '',
    symptoms: ''
}

export function fillObject(e) {
    patientObj[e.target.name] = e.target.value.trim();
}

// Working in the form
export function validateForm(e) {
    e.preventDefault();
    
    if(Object.values(patientObj).some(el => el === '')) {
        ui.showAlert('Todos los campos son obligatorios', 'error');
        return;
    }
    if(edit) {
        register.editRegister({...patientObj});
        ui.showAlert('Cambios Guardados!');
        btnSubmit.textContent = 'Crear Cita';
        edit = false
    } else {
        // Adding ID
        patientObj.id = Date.now();
        register.addRegister({...patientObj}); // Saving client
        ui.showAlert('Cita Registrada!');
    }
    ui.printHTML(register);
    resetObject();
    form.reset();
}

export function editRegister(register) {
    const { pet, owner, phone, date, time, symptoms, id } = register;
    
    // Fill the inputs
    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    timeInput.value = time;
    symptomsInput.value = symptoms;

    // Fill the object
    patientObj.pet = pet; 
    patientObj.owner = owner; 
    patientObj.phone = phone; 
    patientObj.date = date; 
    patientObj.time = time; 
    patientObj.symptoms = symptoms;
    patientObj.id = id; 
    
    btnSubmit.textContent = 'Guardar Cambios';
    edit = true;
}

export function deleteRegister(id) {
    if(confirm('¿Are you sure?')) {
        register.deleteRegister(id);
        ui.printHTML(register);
    }
}

function resetObject() {
    patientObj.pet = ''; 
    patientObj.owner = ''; 
    patientObj.phone = ''; 
    patientObj.date = ''; 
    patientObj.time = ''; 
    patientObj.symptoms = '';
}