function Contact(contact) {
    this.contacts = {
        items: [{name: 'євген', phone: +380993121739, email: 'eugene@gmail.com'}],
    };

    this.findContact = function (name) {
        return this.contacts.items.find((contact) => contact.name === name);
    };

    this.createContact = function () {
        const name = prompt("Введіть ім\'я").toLowerCase().trim();
        const phone = +prompt("Введіть номер телефону");
        const email = prompt("Введіть емейл").toLowerCase().trim();

        this.contacts.items.push({name, phone, email});
    }
}

const contact = new Contact();

contact.createContact();

contact.findContact();