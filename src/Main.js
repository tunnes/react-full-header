import React from 'react';

// Package of type definitions:
// https://reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';

import { headerDefault, headerContainer, videoStyle } from './Style';

const defaultProps = {
    bgColor: '#ccc',
    fontColor: '#000',
    font: 'sans-serif',
    bgImage: '',
};

const FullHeader = ({ title, subtitle, bgColor, fontColor, font, bgImage, video }) => {
    const headerStyle = {
        ...headerDefault,
        backgroundColor: bgColor,
        color: fontColor,
        fontFamily: font,
        backgroundImage: `url(${bgImage})`,
    };
    const component = (
        <header style={headerStyle}>
            <div style={headerContainer}>
                {title && <h1>{title}</h1>}
                {subtitle && <h2>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} autoPlay muted loop src={video} />}
        </header>
    );
    return component;
};
const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string,
    font: PropTypes.string,
    bgImage: PropTypes.string,
    video: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
