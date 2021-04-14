import axios from "axios";

const instance = axios.create({
    baseURL: "https://5fe21e077a94870017682132.mockapi.io/api/testtask/"
})

export const clinicAPI = {
    async getDoctorsData(limit: number, currentPage: number) {
        const res = await instance.get(`doctors?page=${currentPage}&limit=${limit}`)
        return res.data
    }
}
