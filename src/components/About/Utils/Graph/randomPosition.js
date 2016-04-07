/**
 *************************************
 *           *           *           *
 *           *           *           *
 *     A     *     B     *     C     *
 *           *           *           *
 *           *           *           *
 *************************************
 */
export default ({ area, HEIGHT = 73 * 0.77, WIDTH = 100 }) => {
    const randomHeight = () => (Math.random() * HEIGHT);
    const randomWidth = () => (Math.random() * WIDTH);

    let x;
    switch (area) {
        case 'A':
            x = randomWidth() * 1 / 3;
            break;
        case 'B':
            x = randomWidth() * 1 / 3 + WIDTH / 3 - 6.5;
            break;
        case 'C':
            x = randomWidth() * 1 / 3 + WIDTH * 2 / 3 - 2;
            break;
        case 'ABC':
            x = randomWidth() - 2;
            break;
        default:
            break;
    }

    let y;
    switch (area) {
        case 'A':
        case 'C':
        case 'ABC':
            y = randomHeight() - 2;
            break;
        case 'B':
            y = randomHeight() - 6.5;
            break;
        default:
            break;
    }

    return {
        WebkitTransform: `translate(${x}vw, ${y}vh)`,
        transform: `translate(${x}vw, ${y}vh)`,
    };
};
