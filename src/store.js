export const initialStore = () => ({
    contacts: [
         {
            id: 1,
            name: 'Erik',
            email: "erik@algo.com",
            phone: '557383921',
            address:'CDMX'
        },
        {
            id: 2,
            name:'Otto',
            email:'o_schuessler@algo.com',
            phone:'3065438812',
            address:'Regina, SK'
        },
        {
            id: 3,
            name: 'Takuma',
            email: 'tacotimer@algo.com',
            phone:'2389309',
            address:'Oita, JP'
        },
        {
            id: 4,
            name: 'Adelqui',
            email: 'adxion@algo.com',
            phone: '57849302',
            address: 'Lima, PE'
        }
    ]
});

export default function storeReducer(store, action) {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                ...store,
                contacts: [...store.contacts, action.payload]
            };

        case 'DELETE_CONTACT':
            return {
                ...store,
                contacts: store.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };

        default:
            return store; 
    }
}

