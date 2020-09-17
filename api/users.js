import axios from 'axios';
import * as Device from 'expo-device';
const domain = Device.isDevice ? 'localhost' : '10.0.2.2';
// 사용자 정보 조회
export const getUsers = async () => {
    const res = await axios.get(`http://${domain}:4000/users`);
    return res.data;
};