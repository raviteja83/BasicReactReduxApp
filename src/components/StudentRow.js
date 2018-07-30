import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectStudentStatus,
    selectStudentTotal
} from '../selectors/students.selector';

const StudentRow = ({ row: { name, rollNo }, total, status }) => (
    <tr className={`students-table__row students-table__row--${status}`}>
        <td className="students-table__column text-transform-capitalise">
            {name}
        </td>
        <td className="students-table__column">{rollNo}</td>
        <td className="students-table__column">{total}</td>
        <td className="students-table__column text-transform-capitalise">
            {status}
        </td>
    </tr>
);

StudentRow.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rollNo: PropTypes.string.isRequired,
        marks: PropTypes.shape({
            english: PropTypes.number.isRequired,
            maths: PropTypes.number.isRequired,
            science: PropTypes.number.isRequired
        }).isRequired
    }).isRequired,
    total: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
    status: selectStudentStatus(),
    total: selectStudentTotal()
});

export default connect(mapStateToProps)(StudentRow);
