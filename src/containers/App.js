import React from 'react'
import { connect } from 'react-redux'

import { toggleBanner, toggleDemo, demoZoom } from '../actions'
import { Works } from '../components/Works'
import { Footer } from '../components/Footer'


class App extends React.Component {
    toggleActive (id, isBannerActive, isDemoActive){
        const dispatch = this.props.dispatch;

        let [bannerTimeout, demoTimeout] = isDemoActive ? [700, 0] : [0, 700];

        setTimeout(() =>{
            dispatch(toggleBanner( id, !isBannerActive ))
        }, bannerTimeout)

        setTimeout(() =>{
            dispatch(toggleDemo( id, !isDemoActive ))
        }, demoTimeout)

        // Update URL
        // via http://lea.verou.me/2011/05/change-url-hash-without-page-jump/#comment-990138307
        let elem = document.getElementById(id);
        elem.removeAttribute('id');
        window.location.hash = id;
        elem.setAttribute('id', id);
    }
    render() {
        const { dispatch, works } = this.props

        return (
            <div>
                <Works
                    works={works}
                    onToggleActive={
                        (id, isBannerActive, isDemoActive) => 
                        this.toggleActive.bind(this)(id, isBannerActive, isDemoActive) 
                    }
                    onDemoZoom={ (id, src, description) => dispatch(demoZoom(id, src, description)) }
                />
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        works: state
    }
}

export default connect(mapStateToProps)(App)