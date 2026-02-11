import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Link } from 'react-router-dom';
import LazyImage from '../../common/LazyImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './SeriesSlider.css';

export default function SeriesSlider({ series }) {
    if (series.length === 0) return null;

    return (
        <div className="py-10 px-4 border-b border-white/5 bg-gradient-to-b from-primary to-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                        <span className="text-accent">📺</span> Trending Series
                    </h2>

                    {/* Custom Navigation Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button className="series-swiper-prev w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:bg-accent text-white flex items-center justify-center transition-all bg-secondary/50 backdrop-blur-sm">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="series-swiper-next w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:bg-accent text-white flex items-center justify-center transition-all bg-secondary/50 backdrop-blur-sm">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Grid]}
                    navigation={{
                        nextEl: '.series-swiper-next',
                        prevEl: '.series-swiper-prev',
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    grid={{ rows: 2, fill: 'row' }}
                    breakpoints={{
                        640: { slidesPerView: 1, grid: { rows: 2, fill: 'row' } },
                        768: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
                        1024: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
                    }}
                    className="mySwiper h-[600px] md:h-[550px] pb-12"
                >
                    {series.map((item) => (
                        <SwiperSlide key={item.imdbID} className="h-[calc((100%-24px)/2)]">
                            <Link to={`/detail/${item.imdbID}`} className="h-full block group relative overflow-hidden rounded-xl bg-secondary border border-white/5 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                                {/* Background Image (Full Cover) */}
                                <div className="absolute inset-0">
                                    <LazyImage
                                        src={item.Poster}
                                        alt={item.Title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative h-full p-6 flex flex-col justify-end items-center z-10 text-center bg-gradient-to-t from-black via-black/50 to-transparent">
                                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                                        <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-lg shadow-accent/20">
                                            Series
                                        </span>
                                        <span className="text-gray-300 text-xs font-mono bg-black/50 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded">
                                            {item.Year}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        {item.imdbRating && item.imdbRating !== 'N/A' && (
                                            <div className="flex items-center gap-1.5 text-yellow-400">
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                                <span className="text-white text-lg font-bold">{item.imdbRating}</span>
                                            </div>
                                        )}
                                        <h3 className="text-white font-black text-2xl md:text-3xl leading-tight line-clamp-2 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                                            {item.Title}
                                        </h3>
                                    </div>

                                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        <span className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white border-b-2 border-accent pb-0.5 inline-block">
                                            Watch Now <span className="text-accent">→</span>
                                        </span>
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
