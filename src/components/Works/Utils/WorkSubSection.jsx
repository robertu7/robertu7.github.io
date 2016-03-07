import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import Icon from 'components/Utils/Icon';
import SubSection from 'components/Utils/SubSection';
import Media from './Media';
class FullWidthMedia extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mediaType: 'image' }
        this.toggleMediaType = this.toggleMediaType.bind(this)
    }
    toggleMediaType() {
        this.setState({ mediaType: this.state.mediaType === 'image' ? 'video' : 'image' })
    }
    render() {
        const { src, vid, desc } = this.props;
        const { mediaType } = this.state;
        const descriptionClass = classNames({
            'section__fullwidth__description': true,
            'text_uppercase': src.indexOf('PodPicker') >= 0
        });
        return (
            <div className="section__fullwidth animate--general">
                {vid && (
                    <button
                        className="section__fullwidth__btn"
                        type="button"
                        onClick={this.toggleMediaType}
                    >
                        <Icon name={mediaType == 'image' ? 'video' : 'image'} />
                    </button>
                )}
                <Media type={mediaType} {...this.props} />
                <span className={descriptionClass}>{desc}</span>
            </div>
        );
    }
}
class WorkSubSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { fullWidthMedia: { src: '', vid: '', desc: '', index: 0 } }
        this.handleFullWidthMediaChange = this.handleFullWidthMediaChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleFullWidthMediaChange(index) {
        console.log(this.props)
        const { name, screenshots, vids } = this.props;

        const newFullWidthMedia = {
            src: (
                index < 0 || index >= screenshots.length
                    ? ''
                : `/src/images/screenshots/large/${name}_${index}.jpg`
            ),
            desc: screenshots[index],
            vid: vids[index],
            index
        };

        this.setState({ fullWidthMedia: newFullWidthMedia })
    }
    handleKeyDown (e){
        const { name, screenshots } = this.props;
        const count = screenshots.length;
        const { fullWidthMedia: { index } } = this.state;

        if (window.location.href.indexOf(name) < 0) return;

        switch (e.keyCode) {
            case 27: // Esc
                this.handleFullWidthMediaChange(-1)
                break;
            case 37: // Left Arrow
                index - 1 >= 0 && this.handleFullWidthMediaChange(index - 1)
                break;
            case 39: // Right Arrow
                index + 1 < count && this.handleFullWidthMediaChange(index + 1)
                break;
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    render() {
        const { fullWidthMedia } = this.state;
        const { name, screenshots } = this.props;
        return (
            <div>
                <div className="subsection overflow--x animate--general">
                {screenshots.map((item, index) => (
                    <img
                        key={index}
                        className="subsection__item cursor--zoomIn"
                        src={`/src/images/screenshots/thumb/${name}_${index}.jpg`}
                        onClick={this.handleFullWidthMediaChange.bind(this, index)}
                        title={screenshots[index]}
                    />
                ))}
                </div>
                <Transition>
                {fullWidthMedia.src && (
                    <FullWidthMedia
                        count={screenshots.length}
                        onChange={this.handleFullWidthMediaChange}
                        {...fullWidthMedia}
                    />
                )}
                </Transition>
            </div>
        );
    }
}

// Export
export default SubSection(WorkSubSection);