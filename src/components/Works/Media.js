import React from 'react';
import classNames from 'classnames';
import ClassList from 'classlist';

export default class Media extends React.Component {
    constructor (props){
        super(props)
        this.state = { done: false, error: false }
        this.handleLoadDone = this.handleLoadDone.bind(this)
        this.handleLoadError = this.handleLoadError.bind(this)
        this.handleCursorChange = this.handleCursorChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getBound = this.getBound.bind(this)
    }
    handleLoadDone() {
        this.setState({ done: true, error: false })
    }
    handleLoadError() {
        this.setState({ done: false, error: true })
    }
    handleCursorChange(e) {
        const { count, index } = this.props;
        switch (this.getBound(e)) {
            case 'left':
                this.imgClassList.remove('cursor--next', 'cursor--zoomOut')

                if (index - 1 < 0) return;
                
                this.imgClassList.add('cursor--pre')
                break;
            case 'right':
                this.imgClassList.remove('cursor--pre', 'cursor--zoomOut')

                if (index + 1 >= count) return;

                this.imgClassList.add('cursor--next')
                break;
            case 'center':
                this.imgClassList
                .remove('cursor--pre', 'cursor--next')
                .add('cursor--zoomOut')
                break;
        }
    }
    handleClick(e) {
        const { count, index, onChange } = this.props;
        switch (this.getBound(e)) {
            case 'left':
                index - 1 >= 0 && onChange(index - 1)
                break;
            case 'right':
                index + 1 < count && onChange(index + 1)
                break;
            case 'center':
                onChange(-1)
                break;
        }
    }
    getBound(e) {
        const WIDTH = this.refs.media.offsetWidth;
        const BOUND = {
            preCursorBound: WIDTH * 2 / 5,
            nextCursorBound: WIDTH * 3 / 5
        };
        const X = e.clientX;

        if (X < BOUND.preCursorBound) {
            return 'left';
        } else if (X > BOUND.nextCursorBound) {
            return 'right';
        } else {
            return 'center';
        }
    }
    componentDidMount() {
        const elem = this.refs.media;

        this.imgClassList = new ClassList(elem);

        elem.addEventListener('mousemove', this.handleCursorChange)
    }
    componentWillUnmount() {
        const elem = this.refs.media;

        elem.removeEventListener('mousemove', this.handleCursorChange)
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
            <div className="section__fullwidth__media vertically_center" onClick={this.handleClick} ref="media">
                <div className={spinClass}></div>
                {type === 'image'
                    ? <img 
                        style={mediaStyle}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        src={src}
                    />
                    : <video 
                        style={mediaStyle}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        src={src}
                    />
                }
            </div>
        );
    }
};
