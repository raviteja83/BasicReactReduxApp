import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { getStatus, getTotal } from '../util';

export const selectLocalState = () => state => state.students;

export const selectStudentsLoading = () =>
    createSelector(selectLocalState(), state => state.loading);

export const selectStudentsError = () =>
    createSelector(selectLocalState(), state => state.error);

export const selectStudents = () =>
    createSelector(selectLocalState(), state =>
        orderBy(state.data, ['name'], ['asc'])
    );

export const selectStudentStatus = () =>
    createSelector(
        selectToppers(),
        (_, { row: { marks, rollNo } }) => ({ marks, rollNo }),
        (toppers, { marks, rollNo }) => {
            let status = getStatus(marks);
            if (toppers.includes(rollNo)) {
                return 'topper';
            }
            return status;
        }
    );

export const selectStudentTotal = () =>
    createSelector(
        (_, props) => props.row.marks,
        marks => {
            return getTotal(marks);
        }
    );

export const selectToppers = () =>
    createSelector(selectStudents(), students => {
        let totals = students.map(({ rollNo, marks }) => ({
            rollNo,
            total: getTotal(marks)
        }));

        totals = orderBy(totals, ['total'], ['desc']);
        const { rollNo, total: maxTotal } = totals[0];
        const toppers = [rollNo];
        let i = 1;
        while (totals[i].total === maxTotal && i < totals.length) {
            toppers.push(totals[i].total);
            i++;
        }

        return toppers;
    });
