export default function SkeletonSlider() {
    return (
        <div className="py-12 px-4 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="h-10 bg-gray-700 w-64 rounded mb-8 animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 bg-gray-700 rounded-lg animate-pulse"></div>
                    <div className="h-64 bg-gray-700 rounded-lg animate-pulse hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}
