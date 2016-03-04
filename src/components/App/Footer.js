import React from 'react'
import { Link } from 'react-router';

import Icon from 'components/Utils/Icon';

export default ({ location: { pathname } }) => {
    const isWorks = /works/i.test(pathname);
    const to = {
        pathname: isWorks ? '/about' : '/works',
        query: { name: isWorks ? 'techStacks' : 'Oneline' }
    };
    return (
        <div className="footer vertically_center">
            <Link to={to}>
                <span className="footer__logo" role="button">
                    <Icon name="logo" />
                </span>
            </Link>
        </div>
    );
};