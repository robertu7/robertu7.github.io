import React from 'react';
import classNames from 'classnames';

// Components
import Icon from 'components/Utils/Icon';
import Media from './Media';

export default class FullWidthMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mediaType: 'image' };
        this.toggleMediaType = this.toggleMediaType.bind(this);
    }
    toggleMediaType() {
        this.setState({ mediaType: this.state.mediaType === 'image' ? 'video' : 'image' });
    }
    render() {
        const { src, vid, desc } = this.props;
        const { mediaType } = this.state;
        const descriptionClass = classNames({
            section__fullwidth__description: true,
            text_uppercase: src.indexOf('PodPicker') >= 0,
        });
        return (
            <div className="section__fullwidth animate--general">
                {vid && (
                    <button
                        className="section__fullwidth__btn"
                        type="button"
                        onClick={this.toggleMediaType}
                    >
                        <Icon name={mediaType === 'image' ? 'video' : 'image'} />
                    </button>
                )}
                <Media type={mediaType} {...this.props} />
                <span className={descriptionClass}>{desc}</span>
            </div>
        );
    }
}
