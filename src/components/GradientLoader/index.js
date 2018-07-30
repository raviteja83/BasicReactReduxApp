import React from 'react';

import './gradient-loader.css';

export const GradientLoader = () => {
    return (
        <div className="gradient-loader">
            <div className="animated-background">
                <div className="background-masker first-end" />
                <div className="background-masker second-line" />
                <div className="background-masker second-end" />
                <div className="background-masker third-line" />
                <div className="background-masker third-end" />
            </div>
        </div>
    );
};

export default GradientLoader;
