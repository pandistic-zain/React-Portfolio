import axios from "axios";

const BaseSpringBootAPI = "http://localhost:8080/letsconnect";
class FeedbackServices{
    getAllFeedbacks(){
        return axios.get(`${BaseSpringBootAPI}`)
    }
    postFeedback(feedback){
        return axios.post(`${BaseSpringBootAPI}`, feedback)
    }
}
export default new FeedbackServices();