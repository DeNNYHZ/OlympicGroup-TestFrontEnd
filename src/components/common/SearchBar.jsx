import { useState, useEffect } from 'react';


export default function SearchBar({ onSearch, isLoading }) {
    const [query, setQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className={`sticky top-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-primary/95 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-8 mt-12'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
                <div className="hidden md:flex text-3xl font-black tracking-tighter text-white">
                    MOVIE<span className="text-accent">DB</span>
                </div>

                <form onSubmit={handleSubmit} className="relative flex-1 max-w-4xl mx-auto group">
                    <div className="relative flex items-center overflow-hidden rounded-full bg-secondary/90 border border-white/10 focus-within:border-accent/50 focus-within:bg-secondary focus-within:ring-1 focus-within:ring-accent/50 transition-all duration-300 shadow-xl shadow-black/30 w-full h-16">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Cari film, series, dan lainnya..."
                            className="w-full h-full bg-transparent text-white placeholder-gray-500 pl-8 pr-32 focus:outline-none text-lg font-medium tracking-wide"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-red-600 hover:from-red-600 hover:to-accent text-white font-bold px-8 py-3 rounded-full transition-all duration-500 text-base disabled:opacity-50 shadow-lg shadow-accent/25 hover:shadow-accent/40 transform hover:scale-105 active:scale-95 z-10"
                        >
                            {isLoading ? '...' : 'Search'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
