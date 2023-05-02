import { form, results, btnSubmit, titleRight } from "../variables.js";
import { editRegister, deleteRegister } from "../functions.js";

class UI {

    showAlert(message, type) {
        
        const alert = document.createElement('DIV');
        alert.textContent = message;
        alert.classList.add('text-center', 'alert', 'd-block', 'col-12');
        if(type) {
            alert.classList.add('alert-danger');
            form.insertBefore(alert, document.querySelector('.referencia'));
        } else {
            alert.classList.add('alert-success');
            document.querySelector('#alert-ok').insertBefore(alert, document.querySelector('.alert-child'));
        }
        btnSubmit.disabled = true;
        setTimeout(() => {
            alert.remove();
            btnSubmit.disabled = false;
        }, 2500);
    }

    printHTML({register}) {
        this.clearHTML()

        register.forEach( client => {
            const { pet, owner, phone, date, time, symptoms, id } = client;
            
            const registerDiv = document.createElement('div');
            registerDiv.classList.add('cita', 'p-3');
            registerDiv.dataset.id = id;

            // Scripting
            const petText = document.createElement('h2');
            petText.classList.add('card-title', 'font-weight-bolder');
            petText.innerHTML = `${pet}`;

            const ownerText = document.createElement('p');
            ownerText.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${owner}`;

            const phoneText = document.createElement('p');
            phoneText.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${phone}`;

            const dateText = document.createElement('p');
            dateText.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${date}`;

            const timeText = document.createElement('p');
            timeText.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${time}`;

            const symptomsText = document.createElement('p');
            symptomsText.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${symptoms}`;

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            deleteBtn.onclick = () => deleteRegister(id);

            // Edit button 
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-info');
            editBtn.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            editBtn.onclick = () => editRegister(client);

            registerDiv.appendChild(petText);
            registerDiv.appendChild(ownerText);
            registerDiv.appendChild(phoneText);
            registerDiv.appendChild(dateText);
            registerDiv.appendChild(timeText);
            registerDiv.appendChild(symptomsText);
            registerDiv.appendChild(deleteBtn);
            registerDiv.appendChild(editBtn);

            results.appendChild(registerDiv);
            if(!results.length) {
                titleRight.textContent = 'Administra tus citas'
            } else {
                titleRight.textContent = 'Administra tus citas';
            }
        })
    }

    clearHTML() {
        while(results.firstChild) {
            results.removeChild(results.firstChild);
        }
    }
}

export default UI;