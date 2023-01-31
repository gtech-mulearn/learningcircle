import React from 'react';

function Bold(props) {
    return (
        <>
            {props.text.split("<b>").map((part) => (
                <>{part.split("b>").map((text) => (
                    <>{
                        text.includes('</') ?
                            (<b>{text.replace('</', '')}</b>) : (<>{text}</>)
                    }</>))
                }</>))
            }
        </>
    );
}

export default Bold;
