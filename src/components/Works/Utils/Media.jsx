import React from 'react';
import classNames from 'classnames';
import ClassList from 'classlist';
import assign from 'object.assign';

export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = { done: false, error: false };
        this.handleLoadDone = this.handleLoadDone.bind(this);
        this.handleLoadError = this.handleLoadError.bind(this);
        this.handleCursorChange = this.handleCursorChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getBound = this.getBound.bind(this);
    }
    componentDidMount() {
        const elem = this.refs.media;

        this.imgClassList = new ClassList(elem);

        elem.addEventListener('mousemove', this.handleCursorChange);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.src !== nextProps.src || this.props.type !== nextProps.type) {
            this.setState({ done: false, error: false });
            return true;
        }
        return false;
    }
    componentWillUnmount() {
        const elem = this.refs.media;

        elem.removeEventListener('mousemove', this.handleCursorChange);
    }
    getBound(e) {
        const WIDTH = this.refs.media.offsetWidth;
        const BOUND = {
            preCursorBound: WIDTH * 2 / 5,
            nextCursorBound: WIDTH * 3 / 5,
        };
        const X = e.clientX;

        if (X < BOUND.preCursorBound) {
            return 'left';
        } else if (X > BOUND.nextCursorBound) {
            return 'right';
        }
        return 'center';
    }
    handleLoadDone() {
        this.setState({ done: true, error: false });
    }
    handleLoadError() {
        this.setState({ done: false, error: true });
    }
    handleCursorChange(e) {
        const { count, index } = this.props;
        switch (this.getBound(e)) {
            case 'left':
                this.imgClassList.remove('cursor--next', 'cursor--zoomOut');

                if (index - 1 < 0) return;

                this.imgClassList.add('cursor--pre');
                break;
            case 'right':
                this.imgClassList.remove('cursor--pre', 'cursor--zoomOut');

                if (index + 1 >= count) return;

                this.imgClassList.add('cursor--next');
                break;
            case 'center':
                this.imgClassList
                .remove('cursor--pre', 'cursor--next')
                .add('cursor--zoomOut');
                break;
            default:
                break;
        }
    }
    handleClick(e) {
        const { count, index, onChange } = this.props;
        switch (this.getBound(e)) {
            case 'left':
                index - 1 >= 0 && onChange(index - 1);
                break;
            case 'right':
                index + 1 < count && onChange(index + 1);
                break;
            case 'center':
                onChange(-1);
                break;
            default:
                break;
        }
    }
    render() {
        const { done, error } = this.state;
        const { type, src, vid } = this.props;
        const spinClass = classNames({
            spin: true,
            'spin--done': done,
            'spin--error': error,
        });
        const mediaStyle = {
            display: error ? 'none' : 'initial',
        };
        const videoStyle = {
            width: '70%',
            height: '70%',
        };
        return (
            <div
                className="section__fullwidth__media vertically_center"
                onClick={this.handleClick}
                ref="media"
            >
                <div className={spinClass}></div>
                {type === 'image'
                    ? <img
                        style={mediaStyle}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        src={src}
                    />
                    : <iframe
                        src={`https://player.vimeo.com/video/${vid}`}
                        style={assign({}, mediaStyle, videoStyle)}
                        onLoad={this.handleLoadDone}
                        onError={this.handleLoadError}
                        frameBorder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowFullScreen
                    />
                }
            </div>
        );
    }
}

Media.propTypes = {
    type: React.PropTypes.oneOf(['image', 'video']).isRequired,
    src: React.PropTypes.string.isRequired,
    vid: React.PropTypes.string,
    count: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired,
};
