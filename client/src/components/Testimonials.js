import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';


export default function Testimonials() {
    return(
            <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            // navigation
            className='mySwiper'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            loop={true}
            centeredSlides={true}
            spaceBetween={10}
            scrollbar={{ draggable: true }}
            breakpoints={
                {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }
            }
            >
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Thank you for the opportunity to look under the hood of psychedelic music production. There was a lot of interesting and useful information."
                            </div>
                        </div>
                        {/* <div className="extra content">- Aleksei K.</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                            {/* "I have to say, the experience here is very unique and tailored to your needs.   */}
                            Big shout out to Kabayun for his lessons, I truely enjoyed our sessions and have learnt a lot in these few weeks!! What amazes me is the depth of knowledge he covers, and not necessarily limited to a daw or synth!!"
                            </div>
                        </div>
                        {/* <div className="extra content">- Raghu K.</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            
                            <div className="description">
                                "Im really thankful for the workshop you organized, it was super nice and I learned a lot of new stuff. Keep up the good work, thank you!"
                            </div>
                        </div>
                        {/* <div className="extra content">- Tilen D.</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Hi David, thanks so much, the lessons have really inspired me a lot. Now for some studio time to put it all into practice!"
                            </div>
                        </div>
                        {/* <div className="extra content">- anonymous</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Brooooo that was so killer! Like seriously, things clicked!"
                            </div>
                        </div>
                        {/* <div className="extra content">- anonymous</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Makes total sense and you have a great was of getting things accross!! Thanks so much.""
                            </div>
                        </div>
                        {/* <div className="extra content">- anonymous</div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Your Patreon's masterclass on the Access Virus is incredible!!"
                            </div>
                        </div>
                        {/* <div className="extra content">- anonymous</div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}