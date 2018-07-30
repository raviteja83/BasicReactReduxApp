import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { noop } from 'lodash';
import { connect } from 'react-redux';

import StudentsContainer from './containers/StudentsContainer';
import FormContainer from './containers/FormContainer';

import { getStudents } from './actions/student.actions';

import 'react-tabs/style/react-tabs.css';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.getStudents();
    }

    render() {
        return (
            <div className="App">
                <Tabs defaultIndex={0} onSelect={noop}>
                    <TabList>
                        <Tab>Student Dashboard</Tab>
                        <Tab>Admission Form </Tab>
                    </TabList>

                    <TabPanel>
                        <StudentsContainer />
                    </TabPanel>
                    <TabPanel>
                        <FormContainer />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

App.propTypes = {
    getStudents: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    getStudents
};

export default connect(
    null,
    mapDispatchToProps
)(App);
