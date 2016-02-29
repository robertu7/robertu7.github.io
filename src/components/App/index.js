import React from 'react';

import Footer from './Footer';

export default ({ location, children }) => (
    <div>
        {children}
        <Footer />
    </div>
);