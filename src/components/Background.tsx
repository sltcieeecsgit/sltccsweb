
import Aurora from './Aurora';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-gray-950 pointer-events-none">
            {/* Dark overlay base for better text visibility if needed */}
            <div className="absolute inset-0 bg-black/20"></div>

            <Aurora
                colorStops={["#cd7f00", "#FAA41A", "#F2C94C"]}
                blend={0.7}
                amplitude={1.2}
                speed={0.8}
            />
        </div>
    );
}
