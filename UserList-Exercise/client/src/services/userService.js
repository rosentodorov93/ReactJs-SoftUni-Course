const baseUrl = 'http://localhost:3030/jsonstore/users'

export const getAll = async() =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    return Object.values(result);
}

export const create = async(data) =>{
    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: data.imageUrl,
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    }
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();

    return result;
}

export const getOne = async (userId) =>{
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();
    console.log(result)
    return result;
}