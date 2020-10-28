const FONT_FAMILY = {
    primary: [
        'Lora',
        'Merriweather',
        'Lora',
        'Georgia',
        "PT Serif",
        "Palatino Linotype",
        "Book Antiqua",
        'Palatino',
        'serif'
    ].join(','),
    secondary: [
        'Rubik',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
};

const template = theme => ({
    '*': {
        margin: 0,
        padding: 0,
        border: 0,
        outline: 'none',
        fontSize: '100%',
        background: 'transparent',
        boxSizing: 'border-box',
        touchAction: 'manipulation',
    },

    'html, body': {
        width: '100%',
    },

    body: {
        fontSize: '13px',
        color: '#000',
        fontFamily: FONT_FAMILY.secondary,
        backgroundColor: '#fff',
        fontWeight: 'normal',
        fontStyle: 'normal',
        position: 'relative',
        overflowX: 'hidden',
    },

    'img, embed, object, video': {
        maxWidth: '100%',
        height: 'auto',
    },

    ul: {
        listStyleType: 'none',
    },

    h1: {
        fontSize: '40px',
    },

    h2: {
        fontSize: '34px',
    },

    h3: {
        fontSize: '25px',
    },

    h4: {
        fontSize: '17px',
    },

    h5: {
        fontSize: '15px',
    },

    h6: {
        fontSize: '13px',
    },

    a: {
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
    },

    hr: {
        boxSizing: 'content-box',
        height: '1px',
        overflow: 'visible',
        background: '#eee',
        width: '100%',
        margin: '25px 0',
    },
});

export default template;

