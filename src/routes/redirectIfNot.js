import works from 'components/Works/works.json';
import about from 'components/About/about.json';

export default {
    Works: (nextState, replaceState) => {
        if (nextState.location.pathname === '/') {
            replaceState({
                pathname: '/works',
                query: { name: 'Oneline' },
            });
        }
    },
    ValidWork: (nextState, replaceState) => {
        const workName = nextState.location.query.name;
        const vaildWorks = works.map(i => i.info.name);

        if (vaildWorks.indexOf(workName) < 0) {
            __DEV__ && console.error(`Warning: "${workName}" is't valid work`);
            replaceState({
                pathname: '/works',
                query: { name: 'Oneline' },
            });
        }
    },
    ValidAbout: (nextState, replaceState) => {
        const aboutName = nextState.location.query.name;
        const vaildAbout = about.map(i => i.name);

        if (vaildAbout.indexOf(aboutName) < 0) {
            __DEV__ && console.error(`Warning: "${aboutName}" is't valid about`);
            replaceState({
                pathname: '/about',
                query: { name: 'techStacks' },
            });
        }
    },
};
