import { toast } from "react-toastify";

export const success = (res) => {
    const msg = res.data.message;
    switch (res.status) {
        case 200:
            toast.success(msg);
            break;

        case 201:
            toast.success(msg);
            break;

        default:
    }
};

export const error = (err) => {
    const msg = err.response.data.message;
    switch (err.response.status) {
        case 401:
            toast.error(msg);
            break;

        case 403:
        case 404:
            toast.error(msg);
            break;

        case 422:
            if (Object.keys(err.response.data.errors).length !== null) {
                const errCount = Object.keys(err.response.data.errors).length;
                const errValue = Object.values(err.response.data.errors);
                for (let i = 0; i < errCount; i += 1) {
                    toast.error(errValue[i][0]);
                }
            }
            break;

        case 500:
        case 503:
            toast.error(msg);
            break;

        default:
    }
};
