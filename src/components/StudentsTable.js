import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentRow from './StudentRow';

class StudentsTable extends Component {
    render() {
        const { data } = this.props;

        return (
            <table className="students-table">
                <thead className="students-table__header">
                    <tr>
                        <th className="students-table__column">Student</th>
                        <th className="students-table__column">Roll No</th>
                        <th className="students-table__column">Total</th>
                        <th className="students-table__column">Status</th>
                    </tr>
                </thead>
                <tbody className="students-table__body">
                    {data.map(student => (
                        <StudentRow key={student.rollNo} row={student} />
                    ))}
                </tbody>
            </table>
        );
    }
}

StudentsTable.propTypes = {
    data: PropTypes.array.isRequired
};

export default StudentsTable;
