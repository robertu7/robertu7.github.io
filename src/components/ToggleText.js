import React from 'react'


export default class ToggleText extends React.Component {
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