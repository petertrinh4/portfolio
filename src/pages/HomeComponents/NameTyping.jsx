import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const NameTyping = () => {
    const [showCursor, setShowCursor] = useState(true);

    return (
        <div className="flex items-center justify-center h-screen bg-base-100">
            <h1 className="text-4xl sm:text-6xl font-bold text-primary text-center">
                <Typewriter
                    words={['Peter Trinh', 'UCF student', 'Aspiring Software Engineer']}
                    loop={100} // Typing runs once
                    cursor={showCursor}
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={100}
                    delaySpeed={2000}
                    onLoopDone={() => setShowCursor(false)} // Hide cursor when loop is done
                />
            </h1>
        </div>
    );
};

export default NameTyping;


