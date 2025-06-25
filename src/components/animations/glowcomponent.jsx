import { useEffect, useState } from 'react';

const Glowcomponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]"
            style={{
                transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
                transitionTimingFunction: 'ease-in-out'
            }}
        >
            <div className="w-full h-full rounded-full bg-pink-300 opacity-100 blur-3xl" >
                <div className="w-full h-full rounded-full bg-pink-400 opacity-100 blur-3xl">
                    <div className="w-full h-full rounded-full bg-pink-300 opacity-100 blur-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Glowcomponent;
