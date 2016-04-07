import React from 'react';

// Components
import Transition from 'components/Utils/Transition';
import SubSection from 'components/Utils/SubSection';
import FullWidthMedia from './FullWidthMedia';
class WorkSubSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fullWidthMedia: { src: '', vid: '', desc: '', index: 0 } };
        this.handleFullWidthMediaChange = this.handleFullWidthMediaChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleFullWidthMediaChange(index) {
        const { name, screenshots, vids } = this.props;

        const newFullWidthMedia = {
            src: (
                index < 0 || index >= screenshots.length
                    ? ''
                : `/src/images/screenshots/large/${name}_${index}.jpg`
            ),
            desc: screenshots[index],
            vid: vids[index],
            index,
        };

        this.setState({ fullWidthMedia: newFullWidthMedia });
    }
    handleKeyDown(e) {
        const { name, screenshots } = this.props;
        const count = screenshots.length;
        const { fullWidthMedia: { index } } = this.state;

        if (window.location.href.indexOf(name) < 0) return;

        switch (e.keyCode) {
            case 27: // Esc
                this.handleFullWidthMediaChange(-1);
                break;
            case 37: // Left Arrow
                index - 1 >= 0 && this.handleFullWidthMediaChange(index - 1);
                break;
            case 39: // Right Arrow
                index + 1 < count && this.handleFullWidthMediaChange(index + 1);
                break;
            default:
                break;
        }
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
                        onClick={() => this.handleFullWidthMediaChange(index)}
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
