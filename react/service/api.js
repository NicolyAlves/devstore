import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})
export default class Api {
    async listar () {
        let r = await api.get(`/produto`);
        return r.data;
    }

    async inserir () {

        return r.data;
    }

    async alterar (){

        return r.data;
    }

    async remover(){

        return r.data;
    }

}