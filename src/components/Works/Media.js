import React from 'react';
import classNames from 'classnames';

export default class Media extends React.Component {
    constructor (props){
        super(props)
        this.state = { done: false, error: false }
        this.handleLoadDone = this.handleLoadDone.bind(this)
        this.handleLoadError = this.handleLoadError.bind(this)
    }
    handleLoadDone() {
        this.setState({ done: true, error: false })
    }
    handleLoadError() {
        this.setState({ done: false, error: true })
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.src !== nextProps.src) {
            this.setState({ done: false, error: false })
            return true;
        } else {
            return false;
        }
    }
    render() {
        const { done, error } = this.state;
        const { type, src } = this.props;
        const spinClass = classNames({
            'spin': true,
            'spin--done': done,
            'spin--error': error
        });
        const mediaStyle = {
            display: error ? 'none' : 'initial'
        };
        return (
            <div className="media vertically_center">
                <div className={spinClass}></div>
                {type === 'image'
                    ? <img 
                        style={mediaStyle}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        onClick={this.props.onChange.bind(null, -1)}
                        src={src}
                    />
                    : <video 
                        style={mediaStyle}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        onClick={this.props.onChange.bind(null, -1)}
                        src={src}
                    />
                }
            </div>
        );
    }
};
