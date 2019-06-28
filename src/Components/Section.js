import React from "react";
export default function Section({ title, subtitle, background, id}) {
    const style={
        background: {
            // backgroundImage: 'url(' + require('../images/' + background) + ')', 
            background: background,
            minHeight: '100vh',
            // filter: 'blur(5px)',
            backgroundSize: 'cover',
            borderColor: 'black',
            borderBottomWidth: 'thick'
            
            
        },
        content: {
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
        }

    };

    
    return (
        
        <div className={"section"} style={style.background}>

            <div className="section-content" id={id} style={style.content}>
                <h1>{title}</h1>
                <p style={{color: 'grey'}}>{subtitle}</p>
            </div>
        </div>
        
    );
}