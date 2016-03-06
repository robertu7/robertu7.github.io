import React from 'react';
import classNames from 'classnames';

// Components
import Transition from 'components/Utils/Transition';
import SubSection from 'components/Utils/SubSection';
import Media from './Media';
const Large = props => {
    const { src, description } = props;
    const descriptionClass = classNames({
        'section__fullwidth__description': true,
        'text_uppercase': src.indexOf('PodPicker') >= 0
    });
    return (
        <div className="section__fullwidth animate--general">
            <Media type="image" {...props} />
            <span className={descriptionClass}>{description}</span>
        </div>
    );
};
class WorkSubSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { largeSrc: '', largeIndex: 0, largeDescription: '' }
        this.handleLargeSrcChange = this.handleLargeSrcChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleLargeSrcChange(index) {
        const { name, screenshots } = this.props;
        const largeSrc = (
            index < 0 || index >= screenshots.length
                ? ''
            : `/src/images/screenshots/large/${name}_${index}.jpg`
        );

        this.setState({ largeSrc, largeIndex: index, largeDescription: screenshots[index] })
    }
    handleKeyDown (e){
        const { name, screenshots } = this.props;
        const count = screenshots.length;
        const { largeIndex: index } = this.state;

        if (window.location.href.indexOf(name) < 0) return;

        switch (e.keyCode) {
            case 27: // Esc
                this.handleLargeSrcChange(-1)
                break;
            case 37: // Left Arrow
                index - 1 >= 0 && this.handleLargeSrcChange(index - 1)
                break;
            case 39: // Right Arrow
                index + 1 < count && this.handleLargeSrcChange(index + 1)
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
        const { largeSrc, largeIndex, largeDescription } = this.state;
        const { name, screenshots } = this.props;
        return (
            <div>
                <div className="subsection overflow--x animate--general">
                {screenshots.map((item, index) => (
                    <img
                        key={index}
                        className="subsection__item cursor--zoomIn"
                        src={`/src/images/screenshots/thumb/${name}_${index}.jpg`}
                        onClick={this.handleLargeSrcChange.bind(this, index)}
                        title={screenshots[index]}
                    />
                ))}
                </div>
                <Transition>
                {largeSrc && (
                    <Large
                        count={screenshots.length}
                        index={largeIndex}
                        src={largeSrc}
                        description={largeDescription}
                        onChange={this.handleLargeSrcChange}
                    />
                )}
                </Transition>
            </div>
        );
    }
}

// Export
export default SubSection(WorkSubSection);