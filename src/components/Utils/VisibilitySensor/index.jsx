import React from 'react';
import debounce from 'lodash.debounce';

// https://github.com/joshwnj/react-visibility-sensor
export default class VisibilitySensor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isVisible: null }
        this.check = this.check.bind(this)
    }
    // Check if the element is within the visible viewport
    check() {
        const { partialVisibility, onChange } = this.props;
        const rect = this.refs.sensor.getBoundingClientRect();
        const containmentRect = {
            top: 0,
            left: 0,
            bottom: window.innerHeight || document.documentElement.clientHeight,
            right: window.innerWidth || document.documentElement.clientWidth
        };
        const visibilityRect = {
            top: rect.top >= containmentRect.top,
            left: rect.left >= containmentRect.left,
            bottom: rect.bottom <= containmentRect.bottom,
            right: rect.right <= containmentRect.right
        };

        let isVisible;
        if (!partialVisibility) {
            isVisible = (
                visibilityRect.top &&
                visibilityRect.left &&
                visibilityRect.bottom &&
                visibilityRect.right
            );            
        } else {
            const partialVertical =
                (rect.top >= containmentRect.top && rect.top <= containmentRect.bottom)
             || (rect.bottom >= containmentRect.top && rect.bottom <= containmentRect.bottom);

            const partialHorizontal =
                (rect.left >= containmentRect.left && rect.left <= containmentRect.right)
             || (rect.right >= containmentRect.left && rect.right <= containmentRect.right);

            isVisible = partialVertical && partialHorizontal;
        }

        // notify the parent when the value changes
        if (this.state.isVisible !== isVisible) {
            this.setState({ isVisible });
            onChange(isVisible);
        }

        return this.state;
    }
    componentDidMount() {
        this.debounceCheck = debounce(this.check, 300)
        window.addEventListener('scroll', this.debounceCheck)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.debounceCheck)
    }
    render() {
        return (
            <div ref="sensor">{this.props.children}</div>
        );
    }
}

VisibilitySensor.propTypes = {
    partialVisibility: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
};