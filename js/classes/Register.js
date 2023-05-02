

class Register {
    constructor() {
        this.register = JSON.parse(localStorage.getItem('date')) || [];
    }

    addRegister(client) {
        this.register = [...this.register, client]
        localStorage.setItem('date', JSON.stringify(this.register));
    }

    editRegister(client) {
        this.register = this.register.map( date => date.id === client.id ? client : date );
        localStorage.setItem('date', JSON.stringify(this.register));
    }

    deleteRegister(id) {
        this.register = this.register.filter( date => date.id !== id );
        localStorage.setItem('date', JSON.stringify(this.register));
    }
}

export default Register;