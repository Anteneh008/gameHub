import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f954fd47c8c44c47b37e1d6fd0a28b7e"
    }
})