import React from 'react'
import './Footer.css'
import source from '../../Images/sourcecode.png'


class Footer extends React.Component {
    render() {
        return (
            <div className='rowFooter'>
                <button className='button' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                    <img src={source} className='buttonIcon'/>
                    <div className='sourceCode'>
                        Source Code
                    </div>
                </button>
                <div className='copyRight'>
                    &copy;	2019
                </div>
            </div>
        )
    }
}
export default Footer