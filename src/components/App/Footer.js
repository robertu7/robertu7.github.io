import React from 'react'

import Icon from 'components/Utils/Icon';
import Transition from 'components/Utils/Transition';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showContact: false }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ showContact: !this.state.showContact })
    }
    render() {
        return (
            <div className="footer vertically_center">
                <Transition>
                    {!this.state.showContact && (
                        <button className="footer__logo" type="button" onClick={this.handleClick}>
                            <Icon name="logo" />
                        </button>
                    )}
                    {this.state.showContact && (
                        <div>
                            <span className="footer__link text_uppercase">
                                <a href="mailto:robertu0717@gmail.com" target="_blank">EMAIL</a>
                            </span>
                            <span className="footer__link text_uppercase">
                                <a href="https://github.com/RoberMac" target="_blank">GitHub</a>
                            </span>
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}