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
            name:'Otto',
            email:'o_schuessler@algo.com',
            phone:'3065438812',
            address:'Regina, SK'
        },
        {
            name: 'Takuma',
            email: 'tacotimer@algo.com',
            phone:'2389309',
            address:'Oita, JP'
        },
        {
            name: 'Adelqui',
            email: 'adxion@algo.com',
            phone: '57849302',
            address: 'Lima, PE'
        }
    ]
});

export default function storeReducer(store, action) {
    switch (action.type) {

        default:
            return store; 
    }
}