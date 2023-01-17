import React, { useState } from 'react';

export const Trick = (props) => {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <div>    
            <div 
                className="image-stack" 
                onClick={() => this.props.onClick()} 
                onMouseEnter={() => setShowDemo(true)} 
                onMouseLeave={() => setShowDemo(false)}
            >
                
                <div className="image-stack__item-level-3-polaroid-frame">
                    <img src={props.polaroid} alt={"polaroid photo of " + props.name} />
                </div>

                <div className="photoFilter image-stack__item-level-2-photo-filter">
                </div>

                <div className="image-stack__item-level-1-trick-still-and-demo">
                    <img src={showDemo ? props.demo : props.thumb} alt={props.name + " trick"} />
                </div>
                
                <span 
                    className="trickLabel image-stack__item-level-4-trick-label" 
                    style={{ fontFamily: 'Impact Label', fontWeight: 'normal', fontSize: '32px'}}
                >
                    {props.name}
                </span>

                <div 
                    className="trickNotes image-stack__item-level-5-note-text" 
                    style={{ fontFamily: 'JMH Typewriter dry Bold', fontWeight: 'normal', fontSize: '14px'}}
                >
                    {props.notes}
                </div>
                <div className="image-stack__item-level-4-note-background">
                    <img src={props.noteBackground} />
                </div>
            </div>
        </div>
    );
    };

    export default Trick;