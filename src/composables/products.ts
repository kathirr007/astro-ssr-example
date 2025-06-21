import axios from "axios";

const baseUrl = 'https://dummyjson.com'

export function useProducts() {
    const getAll = async () => {
        const { data } = await axios.get<any[]>(
            `${baseUrl}/products`,);
        return data;
    }

    const getOne = async (id: string) => {
        const { data } = await axios.get<any[]>(
            `${baseUrl}/products/${id}`,);
        return data;
    }

    return {
        getAll,
        getOne
    }
}
