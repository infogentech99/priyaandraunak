
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {

    const testimonial = [
        {
            img: '/assets/1.webp',
        },

        {
            img: '/assets/2.webp',
        },

        {
            img: '/assets/3.webp',
        },

        {
            img: '/assets/4.webp',
        },

        {
            img: '/assets/5.webp',
        }, 
        
        {
            img: '/assets/6.webp',
        },

        {
            img: '/assets/1.webp',
        },

        {
            img: '/assets/2.webp',
        },
    ]

    return (

        <div className="bg-[url('/assets/respo_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat">
             <div className="h-696 md:h-585 lg:h-893 3xl:h-1054">
                <h1 className="text-base md:text-2xl lg:text-[36px] text-center text-[#FFF097] lg:pt-40 pt-20 jacques-francois">A message from the couple</h1>
                <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFF097] px-3 md:px-17 lg:px-53 3xl:px-103 mt-12 lg:mt-36 jacques-francois leading-5 md:leading-tight">
                    We are both so delighted that you are able to join us in celebrating what 
                    we hope will be one of the happiest days of our lives. The affection shown 
                    to us by so many people since our roka has been incredibly moving, and has 
                    touched us both deeply. We would like to take this opportunity to thank 
                    everyone most sincerely for their kindness.We are looking forward to see 
                    you at the wedding.
                </h2>
                 <div className="md:mt-32 mt-26 lg:mt-44 flex justify-center items-center overflow-visible">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        centeredSlides={true}
                        
                        pagination={{ clickable: true }}
                        className="w-full py-12 max-w-screen-3xl overflow-visible"
                        breakpoints={{
                            0: {
                                slidesPerView: 1.50,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1536: {
                                slidesPerView: 3.5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center ">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full h-120 md:h-90 lg:h-135 3xl:h-175 object-cover rounded-[60px]"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> 

          <h1 className="text-5xl md:text-6xl lg:text-[122px] text-center text-[#FFF097] pt-16 md:pt-20 lg:pt-32 leading-tight jacques-francois">
            Things to <br /> know
          </h1>
          <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFF097] px-4 md:px-20 lg:px-56 3xl:px-107 pt-10 md:pt-6 lg:pt-6 3xl:pt-16 mt-2 lg:mt-4 lg:leading-tight jacques-francois">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </h2>
          <div className="flex justify-center mt-20 pb-24 md:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-50 3xl:gap-60">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/weather.webp"
                  alt="weather"
                  className="lg:h-26 lg:w-28 h-26 w-32 "
                />
                <h2 className="text-[50px] md:text-3xl lg:text-[42px] text-[#FFF097] mt-2 jacques-francois">
                  Weather
                </h2>
                <p className="text-[14px] lg:text-[15px] text-[#FFF097] mt-1 jacques-francois md:leading-5">
                  It will be mostly cloudy with <br />
                  temperature reaching up <br />
                  to 22 degrees at the venue
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/staff.webp"
                  alt="drive"
                  className="md:h-26 lg:h-27 lg:w-21 h-36 w-29"
                />
                <h2 className="text-[50px] md:text-3xl lg:text-[42px] text-[#FFF097] mt-2 jacques-francois">
                  Staff
                </h2>
                <p className="text-[14px] lg:text-[15px] md:leading-5 text-[#FFF097] mt-1 jacques-francois">
                  We recommend the nearby <br />
                  lodge called VEGA near the <br />
                  venue for the staff members
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/parking.webp"
                  alt="car"
                  className="lg:h-27 lg:w-30 h-26 w-32 "
                />
                <h2 className="text-[50px] md:text-3xl lg:text-[42px] text-[#FFF097] mt-2 jacques-francois">
                  Parking
                </h2>
                <p className="text-[14px] lg:text-[15px] md:leading-5 text-[#FFF097] mt-1 jacques-francois">
                  Valet parking for all our <br />
                  guests will be available <br />
                  at the venue
                </p>
              </div>
            </div>
          </div>

             

            <div className="flex flex-col items-center md:mt-2 lg:mt-0 gap-10 3xl:gap-12">
              <div className="">
                <h2 className="font-cormorant-upright text-2xl md:text-5xl lg:text-[64px] text-[#FFF097] pt-24 md:pt-77 lg:pt-102 3xl:pt-150 jacques-francois-upright md:leading-8 lg:leading-12 leading-normal">
                  Looking forward to seeing you
                </h2>
              <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4">
                <a href="#" target="_blank">
                  <img src="/assets/whatsapp.webp" alt="icon" className="h-6 w-6 md:w-12 md:h-12 lg:w-[42px] lg:h-[42px] 3xl:w-20 3xl:h-20" />
                </a>
                <h2 className="font-cormorant-upright text-xs md:text-base lg:text-[22px] text-[#FFF097] jacques-francois-upright">
                  Click the Link to RSVP
                </h2>
              </div>
              </div>
                <img
                src="/assets/couple_second.webp"
                alt="couple"
                className="w-108 h-88 md:w-205 md:h-103 lg:w-381 lg:h-192 3xl:w-480 3xl:h-243 object-cover"/>
            </div>

            </div>
        </div>

    );
}