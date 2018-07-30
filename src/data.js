import { sample } from 'lodash';
import shortid from 'shortid';

const marks = [10, 15, 18, 16, 20, 25, 28, 30, 35, 38, 40, 45, 50];
const names = [
    'abhishek',
    'zoya',
    'rajiv',
    'john',
    'smith',
    'vicky',
    'red',
    'eric',
    'donna',
    'kimmy',
    'jimmy',
    'will',
    'amber',
    'olivia',
    'carol'
];
let data = [];

for (let i = 0; i < 15; i++) {
    data.push({
        name: names[i],
        marks: {
            english: sample(marks),
            maths: sample(marks),
            science: sample(marks)
        },
        rollNo: shortid.generate()
    });
}

export default data;
