import axios from "axios";

const BaseSpringBootAPI = "http://localhost:8080/download-cv";
class CVServices{
    getCV() {
        return axios.get(`${BaseSpringBootAPI}`, {
            responseType: 'blob', // Important for downloading files
        });
    }
}
export default new CVServices();