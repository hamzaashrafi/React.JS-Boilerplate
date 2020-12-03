import { message } from 'antd';

export const toast = (type, msg, duration = 1.5) => {
    if (type === "error") {
        message.error(msg, [duration]);
    } else if (type === "success") {
        message.success(msg);
    } else {
        message.info(msg);
    }
};
