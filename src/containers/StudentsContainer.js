import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StudentsTable from '../components/StudentsTable';
import GradientLoader from '../components/GradientLoader';

import {
    selectStudentsLoading,
    selectStudents,
    selectStudentsError
} from '../selectors/students.selector';

const StudentsContainer = ({ loading, data }) => (
    <div className="students-container">
        {loading ? <GradientLoader /> : <StudentsTable data={data} />}
    </div>
);

StudentsContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
    loading: selectStudentsLoading(),
    data: selectStudents(),
    error: selectStudentsError()
});

export default connect(mapStateToProps)(StudentsContainer);
