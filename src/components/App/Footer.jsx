import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router';

import Icon from 'components/Utils/Icon';

export default ({ location: { pathname } }) => {
    const isWorks = /works/i.test(pathname);
    const to = {
        pathname: isWorks ? '/about' : '/works',
        query: { name: isWorks ? 'techStacks' : 'Oneline' }
    };
    const logoClass = classNames({
        'footer__logo animate--faster': true,
        'footer__logo--back': !isWorks,
        'footer__logo--forward': isWorks
    });
    return (
        <div className="footer vertically_center">
            <Link to={to}>
                <span className={logoClass} role="button" title={`Go to ${to.pathname}`}>
                    <Icon name="logo" />
                </span>
            </Link>
        </div>
    );
};