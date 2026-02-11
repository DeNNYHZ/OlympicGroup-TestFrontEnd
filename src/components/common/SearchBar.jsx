import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, isLoading }) {
    const [query, setQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-8'}`}>
            <div className="max-w-4xl mx-auto px-4">
                <form onSubmit={handleSubmit} className="relative group">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for movies, series..."
                        className="w-full bg-secondary/80 text-light placeholder-gray-400 rounded-full py-3 md:py-4 pl-14 md:pl-16 pr-32 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-secondary transition-all shadow-lg border border-transparent focus:border-accent/30 text-base md:text-lg"
                    />
                    <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 md:w-6 md:h-6 group-focus-within:text-accent transition-colors" />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-red-600 text-white font-semibold py-1.5 md:py-2 px-4 md:px-6 rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
                    >
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </form>
            </div>
        </div>
    );
}
