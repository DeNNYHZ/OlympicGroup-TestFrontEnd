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
    if (series.length === 0) {
        return null;
    }

    return (
        <div className="py-12 px-4 border-b border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                        <span className="text-accent">📺</span> Series
                    </h2>
                    <div className="hidden md:flex gap-2">
                        <button className="series-swiper-prev w-9 h-9 rounded-full bg-gray-700 hover:bg-accent text-white flex items-center justify-center transition-colors">❮</button>
                        <button className="series-swiper-next w-9 h-9 rounded-full bg-gray-700 hover:bg-accent text-white flex items-center justify-center transition-colors">❯</button>
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
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    grid={{
                        rows: 2,
                        fill: 'row',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            grid: { rows: 2, fill: 'row' },
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            grid: { rows: 2, fill: 'row' },
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            grid: { rows: 2, fill: 'row' },
                            spaceBetween: 24,
                        },
                    }}
                    className="mySwiper relative pb-12 h-[550px]"
                >
                    {series.map((item) => (
                        <SwiperSlide key={item.imdbID} className="h-[calc((100%-16px)/2)] md:h-[calc((100%-24px)/2)]">
                            <Link to={`/detail/${item.imdbID}`} className="h-full block group">
                                <div className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-row border border-gray-700">
                                    {/* Poster Image */}
                                    <div className="w-1/3 md:w-32 flex-shrink-0">
                                        <LazyImage
                                            src={item.Poster}
                                            alt={item.Title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                        <div className="mb-2">
                                            <span className="text-xs font-bold text-accent uppercase tracking-wider">
                                                Series
                                            </span>
                                        </div>

                                        <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-accent transition-colors">
                                            {item.Title}
                                        </h3>

                                        <span className="text-gray-400 text-sm">{item.Year}</span>
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
