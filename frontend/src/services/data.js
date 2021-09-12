import axios from "axios";
import { apiURL } from "../constant/config.js"

function errorHandler(reject, error) {
    console.dir(error);
    reject("operation failed");
}

function getRestaurantList(
) {
    return new Promise(function onThen(resolve, reject) {
        axios
            .get(
                `${apiURL}`,
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded", },
                }
            )
            .then(function (response) {
                if (response != null) {
                    return resolve(response.data);
                }
            })
            .catch(function (error) {
                errorHandler(reject, error);
                return null;
            });
    });
}



const dataService = {
    getRestaurantList
};


export default dataService;
