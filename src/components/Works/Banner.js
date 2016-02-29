import React from 'react';
import classNames from 'classnames';

// Components
import Icon from 'components/Utils/Icon';
import Transition from 'components/Utils/Transition';
const Description = ({ description, website, repository }) => (
    <div className="work__banner__description animate--general">
        <p>{description}</p>
        <a href={website} target="_blank">
            <span className="work__banner__link-btn work__banner__link-btn--red animate--faster"></span>
        </a>
        <a href={repository} target="_blank">
            <span className="work__banner__link-btn work__banner__link-btn--blue animate--faster"></span>
        </a>
    </div>
);

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = { btnActive: false, descriptionActive: false }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.active) {
            this.setState({ btnActive: true })
            setTimeout(() => this.setState({ descriptionActive: true }), 700)
        } else {
            this.setState({ descriptionActive: false })
            setTimeout(() => this.setState({ btnActive: false }), 700)
        }
    }
    render() {
        const { btnActive, descriptionActive } = this.state;
        const { name, onChange } = this.props;
        const bannerClass = classNames({
            'work__banner vertically_center animate--general': true,
            'work__banner--active': btnActive
        });
        const btnClass = classNames({
            'work__banner__logo animate--general': true,
            [`work__banner__logo--${name}`]: true
        });

        return (
            <div className={bannerClass}>
                <button className={btnClass} onClick={onChange} type="button">
                    <Icon name={name} className="animate--general" />
                </button>
                <Transition>
                    {descriptionActive && <Description {...this.props} />}
                </Transition>
            </div>
        );
    }
}