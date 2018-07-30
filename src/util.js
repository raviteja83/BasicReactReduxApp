import { values } from 'lodash';

export const getTotal = marks => {
    return values(marks).reduce((sum, value) => sum + value, 0);
};

export const getStatus = marks => {
    let status = 'pass';
    for (let key in marks) {
        if (marks[key] < 20) {
            status = 'fail';
            break;
        }
    }
    return status;
};
