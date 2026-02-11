import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import LazyImage from './LazyImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './SeriesSlider.css'; // Create this for specific grid overrides if needed

export default function SeriesSlider({ series }) {
  if (series.length === 0) {
    return null;
  }

  return (
    <div className="py-12 px-4 bg-secondary border-b border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-light mb-2 animate-slideIn">
            📺 Top Series
          </h2>
          <p className="text-gray-400">{series.length} series results</p>
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
          spaceBetween={24}
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              grid: {
                rows: 2,
                fill: 'row'
              },
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row'
              },
              spaceBetween: 24,
            },
          }}
          className="mySwiper relative pb-16 h-[800px] md:h-[600px]"
        >
          {series.map((item) => (
            <SwiperSlide key={item.imdbID} className="bg-transparent h-auto">
              <Link to={`/detail/${item.imdbID}`} className="h-full block">
                <div className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer h-full flex flex-row md:flex-col">
                  {/* Layout adjustment: Flex row on mobile to save vertical space if needed, or stick to col */}
                  <div className="relative w-1/3 md:w-full md:h-48 overflow-hidden bg-gray-700 flex items-center justify-center shrink-0">
                    <LazyImage
                      src={item.Poster}
                      alt={item.Title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.Poster === 'N/A' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400">
                        <span className="text-xs">No Poster</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 md:w-12 md:h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="white" />
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3 className="text-light font-bold text-base md:text-lg line-clamp-2 mb-1 group-hover:text-accent transition-colors">
                      {item.Title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.Year || 'N/A'}
                    </p>
                    <div className="mt-2 pt-2 border-t border-gray-700 hidden md:block">
                      <p className="text-accent text-xs font-semibold uppercase tracking-wide">
                        Series
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <div className="series-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer text-white transition-all transform -translate-x-1/2">
            ❮
          </div>
          <div className="series-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer text-white transition-all transform translate-x-1/2">
            ❯
          </div>
        </Swiper>
      </div>
    </div>
  );
}
