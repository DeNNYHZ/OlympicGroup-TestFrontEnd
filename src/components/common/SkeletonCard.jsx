export default function SkeletonCard() {
    return (
        <div className="bg-secondary p-4 rounded-lg shadow-md animate-pulse h-full">
            <div className="bg-gray-700 h-64 md:h-[400px] rounded-md mb-4 w-full"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
    );
}
