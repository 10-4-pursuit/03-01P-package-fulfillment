const { nanoid } = require("nanoid");

const Creatures =
[
    {
        id:nanoid(3),
        Name: 'Grootslang',
        Description: 'Grootslang is an Afrikaans word meaning "great snake." ',
        Category: 'Snake',
        Price: '49.00',
    },
    {
        id: nanoid(3),
        Name: 'Impundulu',
        Description: 'The Impundulu or Lightning Bird is a supernatural bird from Pondo, Zulu, and Xhosa folklore.',
        Category: 'Bird',
        Price: '299.99'
    },
    {
        id: nanoid(3),
        Name: 'Adze',
        Description: 'The Adze is a vampire in the legends of the Ewe people of Ghana and Togo',
        Category: 'Vampire',
        Price: '179.99',
    }, 
   
]

export default Creatures