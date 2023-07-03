const searchFunction = (contacts, search) => {
    // eslint-disable-next-line array-callback-return
    return contacts.filter( contact => {
        const contactName = contact.name.toLowerCase();
        const searchName = search.toLowerCase();
        const contactNumber = contact.phone.trim();
        const searchNumber = search.trim();
        if (contactName.includes(searchName)) {
            return contactName.includes(searchName);
        } else if (contactNumber.includes(searchNumber)) {
            return contactNumber.includes(searchNumber);
        };
    });
};

export default searchFunction;