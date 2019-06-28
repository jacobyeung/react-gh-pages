import React from 'react';

const styles = {
    height: '100vh',
    backgroundImage: `url(require('../Images/jacobyeung.jpg'))`,
    backgroundSize: 'cover',
    alignItems: 'center',
}

class Background extends React.Component {
    render() {


        return (
            <div id='homepage' style={styles}>
                <em>Hi, I'm</em> <br/>
                <h1>
                    — Jacob Yeung —
                </h1>
            </div>
        )
    }
}

export default Background;