import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import LazyImage from '../../common/LazyImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './SeriesSlider.css';

export default function SeriesSlider({ series }) {
    if (series.length === 0) {
        return null;
    }

    return (
        <div className="py-12 px-4 bg-gradient-to-b from-primary to-secondary border-b border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-slideIn flex items-center gap-3">
                            <span className="text-accent">📺</span> Trending Series
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">Top picks for your binge-watching sessions</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="series-swiper-prev w-10 h-10 rounded-full bg-gray-800 hover:bg-accent text-white flex items-center justify-center transition-colors">❮</button>
                        <button className="series-swiper-next w-10 h-10 rounded-full bg-gray-800 hover:bg-accent text-white flex items-center justify-center transition-colors">❯</button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Grid]}
                    navigation={{
                        nextEl: '.series-swiper-next',
                        prevEl: '.series-swiper-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    grid={{
                        rows: 2,
                        fill: 'row',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Mobile: 1 column
                            grid: {
                                rows: 2,      // Mobile: 2 rows
                                fill: 'row'
                            },
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2, // Tablet/Desktop: 2 columns
                            grid: {
                                rows: 2,      // Desktop: 2 rows
                                fill: 'row'
                            },
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 2, // Desktop: 2 columns
                            grid: {
                                rows: 2,      // Desktop: 2 rows
                                fill: 'row'
                            },
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper relative pb-14 h-[600px] md:h-[500px]"
                >
                    {series.map((item) => (
                        <SwiperSlide key={item.imdbID} className="bg-transparent h-[calc((100%-20px)/2)] md:h-[calc((100%-30px)/2)]">
                            <Link to={`/detail/${item.imdbID}`} className="h-full block group">
                                <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-accent/50 transition-all duration-300 h-full flex flex-row">
                                    {/* Poster Image */}
                                    <div className="relative w-1/3 md:w-2/5 overflow-hidden">
                                        <LazyImage
                                            src={item.Poster}
                                            alt={item.Title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {item.Poster === 'N/A' && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-500">
                                                <span className="text-xs">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
                                        {/* Background decoration */}
                                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-300" />

                                        <div className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-accent/20 text-accent border border-accent/20">
                                                    Series
                                                </span>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-gray-700 text-gray-300">
                                                    {item.Year}
                                                </span>
                                            </div>

                                            <h3 className="text-white font-bold text-lg md:text-xl line-clamp-2 mb-2 group-hover:text-accent transition-colors leading-tight">
                                                {item.Title}
                                            </h3>

                                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                                                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                                                    View Details
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
