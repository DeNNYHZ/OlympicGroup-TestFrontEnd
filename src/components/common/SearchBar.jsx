import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

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
        <div className={`sticky top-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-primary/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
                {/* Brand / Logo Area - Optional but adds to 'Premium' feel */}
                <div className="hidden md:flex text-2xl font-black tracking-tighter text-white">
                    MOVIE<span className="text-accent">DB</span>
                </div>

                <form onSubmit={handleSubmit} className="relative flex-1 max-w-2xl mx-auto group">
                    <div className="relative overflow-hidden rounded-full bg-secondary border border-white/10 group-focus-within:border-accent/50 transition-colors duration-300">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What do you want to watch?"
                            className="w-full bg-transparent text-white placeholder-gray-500 px-12 py-3 focus:outline-none text-base font-medium"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-1 top-1 bottom-1 bg-white hover:bg-gray-200 text-black font-bold px-6 rounded-full transition-colors text-sm disabled:opacity-50"
                        >
                            {isLoading ? '...' : 'Search'}
                        </button>
                    </div>
                </form>

                {/* Placeholder for User Profile or other actions */}
                <div className="hidden md:block w-8 h-8 rounded bg-gradient-to-br from-accent to-purple-600"></div>
            </div>
        </div>
    );
}
