import {API} from "../../backend"

export const getOrders = () => {
    return fetch(`${API}order/`, {method: "GET"})
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

