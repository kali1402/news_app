import axios from 'axios';

export const getUsers = async () => {
    try {
        const users = await axios.get('http://10.0.0.2:4000/users');
        return users.data;
    } catch (err) {
        throw err;
    }
};