import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Links from './Links';

const NameTyping = () => {
    const [showCursor, setShowCursor] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-transparent text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-primary">
                <Typewriter
                    words={['PETER TRINH', 'UCF STUDENT']}
                    loop={100}
                    cursor={showCursor}
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={150}
                    delaySpeed={4000}
                    onLoopDone={() => setShowCursor(false)}
                />
            </h1>
            <Links />
        </div>
    );
};
export default NameTyping;



