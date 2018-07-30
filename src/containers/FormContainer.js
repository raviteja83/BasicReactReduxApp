import React, { Component } from 'react';
import cn from 'classnames';

class FormContainer extends Component {
    state = {
        firstName: '',
        lastName: '',
        className: '',
        percentage: '',
        yearOfPassing: '',
        errors: {
            firstName: '',
            lastName: '',
            className: '',
            percentage: '',
            yearOfPassing: ''
        },
        disabled: true
    };

    handleNameChange = e => {
        const { name, value } = e.target;

        this.setState(
            ({ errors }) => ({
                [name]: value,
                errors: {
                    ...errors,
                    [name]: value
                        ? /^[a-zA-z]+$/.test(value)
                            ? ''
                            : 'only [a-zZ-A] characters are supported'
                        : 'Please enter a value'
                }
            }),
            this.validateFields
        );
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(
            ({ errors }) => ({
                [name]: value,
                errors: {
                    ...errors,
                    [name]: value ? '' : 'Please enter a value'
                }
            }),
            this.validateFields
        );
    };

    validateFields = () => {
        /*eslint-disable no-unused-vars*/
        const { errors, disabled, ...rest } = this.state;

        const hasErrors = Object.keys(errors).some(key => !!errors[key]);
        const areAllFilled = Object.keys(rest).every(key => !!rest[key]);

        this.setState({
            disabled: !areAllFilled || hasErrors
        });
    };

    render() {
        const {
            firstName,
            lastName,
            yearOfPassing,
            className,
            percentage,
            errors,
            disabled
        } = this.state;

        return (
            <div className="form-container">
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        className={cn('form-control', {
                            'has-error': !!errors.firstName
                        })}
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={this.handleNameChange}
                        maxLength={20}
                    />
                    {errors.firstName && (
                        <div className="help-block">{errors.firstName}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        className={cn('form-control', {
                            'has-error': !!errors.lastName
                        })}
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={this.handleNameChange}
                        maxLength={20}
                    />
                    {errors.lastName && (
                        <div className="help-block">{errors.lastName}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Class</label>
                    <input
                        className={cn('form-control', {
                            'has-error': !!errors.className
                        })}
                        name="className"
                        type="text"
                        value={className}
                        onChange={this.handleChange}
                    />
                    {errors.className && (
                        <div className="help-block">{errors.className}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Year of Passing</label>
                    <input
                        className={cn('form-control', {
                            'has-error': !!errors.yearOfPassing
                        })}
                        name="yearOfPassing"
                        type="number"
                        min={1995}
                        max={2017}
                        value={yearOfPassing}
                        onChange={this.handleChange}
                    />
                    {errors.yearOfPassing && (
                        <div className="help-block">{errors.yearOfPassing}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Percentage</label>
                    <input
                        className={cn('form-control', {
                            'has-error': !!errors.percentage
                        })}
                        name="percentage"
                        type="number"
                        min={0}
                        max={100}
                        value={percentage}
                        onChange={this.handleChange}
                    />
                    {errors.percentage && (
                        <div className="help-block">{errors.percentage}</div>
                    )}
                </div>
                <button
                    className="btn btn-primary form-submit"
                    disabled={disabled}
                >
                    Submit
                </button>
            </div>
        );
    }
}

FormContainer.propTypes = {};

export default FormContainer;
