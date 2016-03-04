import assign from 'object.assign';

/*************************************
 *           *           *           *
 *           *           *           *
 *     A     *     B     *     C     *
 *           *           *           *
 *           *           *           *
 *************************************
 */
const BANNER_HIEGHT = 73 * 0.77;
const BANNER_WIDTH = 100;
const randomHeight = () => (Math.random() * BANNER_HIEGHT);
const randomWidth = () => (Math.random() * BANNER_WIDTH);
const randomStyle = ({ area }) => {
    let x;
    switch (area) {
        case 'A':
            x = randomWidth() * 1 / 3;
            break;
        case 'B':
            x = randomWidth() * 1 / 3 + BANNER_WIDTH / 3 - 6.5;
            break;
        case 'C':
            x = randomWidth() * 1 / 3 + BANNER_WIDTH * 2 / 3 - 2;
            break;
    }

    let y;
    switch (area) {
        case 'A':
        case 'C':
            y = randomHeight() - 2;
            break;
        case 'B':
            y = randomHeight() - 6.5;
            break;
    }

    let width, height;
    switch (area) {
        case 'A':
        case 'C':
            width = '4vw';
            height = '4vw';
            break;
        case 'B':
            width = '13vw';
            height = '13vw';
            break;
    }

    return {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `translate(${x}vw, ${y}vh)`,
        WebkitTransform: `translate(${x}vw, ${y}vh)`,
        transition: 'all .7s ease-in-out, transform 17s linear',
        WebkitTransition: 'all .7s ease-in-out, transform 17s linear',
        width,
        height
    };
};

export default {
    A: () => randomStyle({ area: 'A' }),
    B: () => randomStyle({ area: 'B' }),
    C: () => randomStyle({ area: 'C' })
};
