import React from 'react'


class ToggleText extends React.Component {
    constructor (props){
        super(props)
        this.state = { currentText: props.text[0] }
    }
    render() {
        return (
            <span
                style={{ cursor: 'pointer' }}
                onClick={this.toggleText.bind(this)}
            >
                {this.state.currentText}
            </span>
        );
    }
    toggleText (){
        let text = this.props.text;
        let length = text.length;
        let index = text.indexOf(this.state.currentText);

        let nextText = text[index >= length - 1 ? 0 : index + 1];

        this.setState({ currentText: nextText })
    }
}

export default props => (
    <div className="footer vertically_center">
        <span className="footer__link text_uppercase">
            <a href="mailto:robertu0717@gmail.com" target="_blank">EMAIL</a>
        </span>
        <span className="footer__link text_uppercase">
            <a href="https://github.com/RoberMac" target="_blank">GitHub</a>
        </span>
        <span className="footer__link text_uppercase">
            <ToggleText text={ ['Wechat', 'RoberMac'] }/>
        </span>
    </div>
);