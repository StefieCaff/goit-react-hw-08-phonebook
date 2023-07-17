const searchFunction = (contacts, search) => {
    if (!Array.isArray(contacts) || contacts.length === 0 || !search) {
        return [];
    };
    
    const searchInput = search.toLowerCase().trim();

    return contacts.filter(contact => {
        const contactName =
            contact.name ? contact.name.toLowerCase().trim() : '';
        const contactNumber =
            contact.number ? contact.number.trim() : '';
        
        return (
            contactName.includes(searchInput) || contactNumber.includes(searchInput)
        ); 
    });
};

export default searchFunction;