import React, {useState, useEffect} from 'react';
import Iframe from 'react-iframe'

const HomePageSecond = (props) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    // salm is inviting you to a meeting.
    //
    //     Join the meeting:
    //     https://meet.jit.si/aaa
    //
    //         To join by phone instead, tap this: +1.512.402.2718,,885926198#
    //
    //     Looking for a different dial-in number?
    //     See meeting dial-in numbers: https://meet.jit.si/static/dialInInfo.html?room=aaa
    //
    //
    //     If also dialing-in through a room phone, join without connecting to audio: https://meet.jit.si/aaa#config.startSilent=true

    return (
        <div className="min-h-100vh">
            <Iframe
                // url="http://www.youtube.com/embed/xDMP3i36naA"
                url="https://meet.jit.si/aaa#config.startSilent=true"
                    width="100%"
                    height="900px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allow="geolocation; microphone; camera"
            />

        </div>
    );
};

export default HomePageSecond;