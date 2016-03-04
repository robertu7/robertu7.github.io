import React from 'react';
import assign from 'object.assign';

// Helpers
import { techStacks } from './about.json';

// Components
import Section from 'components/Utils/Section';
import AboutBanner from './AboutBanner';
import AboutSubSection from './AboutSubSection';
const TechStacks = Section(
    class extends React.Component {
        constructor(props) {
            super(props)
            this.state = { stacks: { index: -1, data: props._stacks } }
            this.handleStacksChange = this.handleStacksChange.bind(this)
        }
        handleStacksChange(index) {
            const { works, _stacks } = this.props;
            const activeStacks = works[index]['stacks'];

            const newStacksData = _stacks.map(i => {
                return activeStacks.indexOf(i.name) >= 0 ? assign({}, i, { active: true }) : i
            });
            this.setState({ stacks: { index, data: newStacksData } })
        }
        render() {
            return (
                <div>
                    <AboutBanner
                        heading="Technology Stacks"
                        {...this.props}
                        {...this.state}
                    />
                    <AboutSubSection
                        onStacksChange={this.handleStacksChange}
                        {...this.props}
                        {...this.state}
                    />
                </div>
            );
        }
    }
);

// Export
export default props => (
    <TechStacks location={props.location} sectionName="techStacks" {...techStacks} />
);
