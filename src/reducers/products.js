let initState = [
    {
        id: 1,
        name: 'Ip 7 Plus',
        image: '',
        description: 'Very expensive',
        price: 500,
        inventory: 10,
        rating: 3

    },
    {
        id: 2,
        name: 'Ip 6 Plus',
        image: '',
        description: 'Very less expensive',
        price: 450,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Ip 8 Plus',
        image: '',
        description: 'Very more expensive',
        price: 700,
        inventory: 20,
        rating: 5
    },
    {
        id: 4,
        name: 'Ip X Plus',
        image: '',
        description: 'Best expensive',
        price: 900,
        inventory: 50,
        rating: 4
    }
];

const products = (state = initState, action) =>  {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;