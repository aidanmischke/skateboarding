import React, { useState } from 'react';

export const Trick = (props) => {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <div>    
            <div className="image-stack" onClick={() => this.props.onClick()} onMouseEnter={() => setShowDemo(true)} onMouseLeave={() => setShowDemo(false)}>
                
                <div className="image-stack__item image-stack__item-level-3">
                    <img style={{width: '95%', display: 'inline'}} src={props.polaroid} alt={"polaroid photo of " + props.name} />
                </div>

                <div className="photoFilter image-stack__item image-stack__item-level-2">
                </div>

                <div className="image-stack__item image-stack__item-level-1">
                    <img style={{margin: '12.5% 8% 13% 13%', width: '71%', display: 'inline'}} src={showDemo ? props.demo : props.thumb} alt={props.name + " trick"} />
                </div>
                
                <span className="trickTitle image-stack__item image-stack__item-level-4" style={{ fontFamily: 'Impact Label', fontWeight: 'normal', fontSize: '32px'}}>
                    {props.name}
                </span>

                <div className="trickNotes image-stack__item image-stack__item-level-2-A" style={{ fontFamily: 'JMH Typewriter dry Bold', fontWeight: 'normal', fontSize: '16px'}}>
                    {props.notes}
                </div>
                <div className="image-stack__item image-stack__item-level-1-A">
                    <img className="noteBackground" src={props.noteBackground} style={{ height: props.noteBackgroundHeight + '%'}}/>
                </div>
            </div>
        </div>
    );
    };

    export default Trick;