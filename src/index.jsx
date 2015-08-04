'use strict';

var ResizeMixin = {
    resize() {
        this.forceUpdate();
    },
    componentDidMount() {
        window.addEventListener('resize', this.resize);
    },
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }
};

module.exports = {
    Layout: require('./layout/Layout'),
    ResizeMixin: ResizeMixin,
    Center: require('./layout/Center'),
    CenterHorizontal: require('./layout/CenterHorizontal'),
    CenterVertical: require('./layout/CenterVertical'),
    Spacer: require('./layout/Spacer'),
};