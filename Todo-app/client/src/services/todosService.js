const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async ()=>{
    const data = await fetch(`${baseUrl}/todos`);
    const todos = await data.json();

    return Object.values(todos);
}