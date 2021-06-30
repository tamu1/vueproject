import axios from 'axios'
const firstMixin = { 
    data()
    {
        return {
            users: [
                {
                    id: 1,
                    name: 'tamana',
                    username: 'tamanas',
                    email: 'tamu@gmil.com',
                    phone: '8989889',
                    company: {
                        name:"softobiz"
                    }
                },
                {
                    id: 2,
                    name: 'sizuka',
                    username: 'sizu',
                    email: 'sizzu@gmil.com',
                    phone: '678797644',
                    company: {
                        name:"softobiz"
                    }
                },
                {
                    id: 3,
                    name: 'shinchin',
                    username: 'shini',
                    email: 'sinu@gmil.com',
                    phone: '8840234',
                    company: {
                        name: "softobiz"
                    }
                }

            ]
        }
    },
    methods: {
        fetchUsers()
        {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response =>
                {
                    if(response)
                    {
                        this.users = response.data
                        console.log(response);
                                            
                    }
                    
                 })
        
                 },
        alertHello()
        {
            alert("hello");
        }
    }
}
export default firstMixin;



