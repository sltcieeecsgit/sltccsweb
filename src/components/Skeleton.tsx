interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-white/5 rounded-lg ${className}`}
            style={{
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                backgroundSize: '200% 100%',
                animation: 'skeleton-loading 1.5s infinite linear'
            }}
        />
    );
}
