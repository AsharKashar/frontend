import EndPoints from "./EndPoints";
import axios from "axios";
const ApiManager = {

    getInfo: async () => {
        const url = process.env.REACT_APP_BASE_URL+ EndPoints.getInfo;
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    loginUser: async (email, password) => {
        const url = process.env.REACT_APP_BASE_URL + EndPoints.login;
        const loginData = {
            email: email,
            password: password,
        };
        try {
            const response = await axios.post(url, loginData);
            return response.data;
        } catch (error) {
            let response = error.response.data;
            return response
        }

    },

    getProfile: async (authToken) => {

        const url = process.env.REACT_APP_BASE_URL + EndPoints.getProfile;
        try {
            const response = await axios.get(`${url}?token=[${authToken}]`)
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }        
    },


    getAuther: async (authToken) => {

        const url = process.env.REACT_APP_BASE_URL + EndPoints.getAuthor;
        try {
            const response = await axios.get(`${url}?token=[${authToken}]`)
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },


    getQuote: async (authToken,authorId) => {

        const url = process.env.REACT_APP_BASE_URL + EndPoints.getQuote;
        try {
            const response = await axios.get(`${url}?token=[${authToken}]&authorId=[${authorId}]`)
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }        
    },


    logoutUser: async (authToken) => {
        const url = process.env.REACT_APP_BASE_URL + EndPoints.logout;
        try {
            const response = await axios.delete(`${url}?token=[${authToken}]`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },







};

export default ApiManager;