import React from 'react';

// Components
import Icon from 'components/Utils/Icon';
import Transition from 'components/Utils/Transition';

export default class PaginationArrow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(step) {
        const { index, onChange } = this.props;

        onChange(index + step)
    }
    render() {
        const { index, count } = this.props;
        return (
            <div>
                <Transition>
                    {index > 0 && (
                        <button
                            className="work__demo--zoom__arrow work__demo--zoom__arrow--left tips"
                            onClick={this.handleClick.bind(this, -1)}
                            type="button"
                        >
                            <Icon name="leftArrow" />
                        </button>
                    )}
                </Transition>
                <Transition>
                    {index + 1 < count && (
                        <button
                            className="work__demo--zoom__arrow work__demo--zoom__arrow--right tips"
                            onClick={this.handleClick.bind(this, 1)}
                            type="button"
                        >
                            <Icon name="rightArrow" />
                        </button>
                    )}
                </Transition>
            </div>
        );
    }
}