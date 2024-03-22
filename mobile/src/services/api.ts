import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3333' comando para ver o ip "ipconfig" Endereço IPv4
    baseURL: 'http://10.132.66.95:3333'
})

export { api };