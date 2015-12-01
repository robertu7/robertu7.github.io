import React from 'react';


export default class Media extends React.Component {
    constructor (props){
        super(props)
        this.state = { loadState: 'loading' }
    }
    render() {
        return (
            <div className="media vertically_center">
                <div className={`spinner spinner--${this.state.loadState}`}></div>
                {this.props.type === 'image'
                    ? <img 
                        style={{ display: this.state.loadState === 'loadFail' ? 'none' : 'initial' }}
                        onLoad={this.setLoadState.bind(this, 'loaded')}
                        onError={this.setLoadState.bind(this, 'loadFail')}
                        src={this.props.src}
                    />
                    : <video 
                        style={{ display: this.state.loadState === 'loadFail' ? 'none' : 'initial' }}
                        onLoad={this.setLoadState.bind(this, 'loaded')}
                        onError={this.setLoadState.bind(this, 'loadFail')}
                        src={this.props.src}
                    />
                }
            </div>
        );
    }
    setLoadState (state){
        this.setState({ loadState: state })
    }
}
Media.propTypes = {
    type: React.PropTypes.oneOf(['image', 'video']),
    src : React.PropTypes.string.isRequired
}
