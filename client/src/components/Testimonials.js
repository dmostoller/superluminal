import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';


export default function Testimonials() {
    return(
        <div className="ui centered basic segment" style={{marginTop: "25px", marginBottom: "25px"}}>
            <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            // navigation
            className='mySwiper'
            autoplay={{
                delay: 3500,
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
                        <div className="extra content">- Aleksei K.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                            "I have to say, the experience here is very unique and tailored to your needs, the format of the webinars and delivery is perfect.
                            Big shout out to Kabayun for his lessons, I truly enjoyed our sessions and have learned a lot in these few weeks!!
                             What amazes me is the depth of knowledge he covers, and not necessarily limited to a daw or synth!!"
                            </div>
                        </div>
                        <div className="extra content">- Raghu K.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Im really thankful for the workshop you organized, it was super nice and I learned a lot of new stuff. Keep up the good work, thank you!"
                            </div>
                        </div>
                        <div className="extra content">- Tilen D.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Hi David, thanks so much, the lessons have really inspired me a lot. Now for some studio time to put it all into practice!"
                            </div>
                        </div>
                        <div className="extra content">- anonymous</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Brooooo that was so killer! Like seriously, things clicked!"
                            </div>
                        </div>
                        <div className="extra content">- anonymous</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Makes total sense and you have a great was of getting things across!! Thanks so much."
                            </div>
                        </div>
                        <div className="extra content">- anonymous</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Kabayun's classes have been an invaluable guiding force in my journey as a producer. 
                                Learning the intricacies of psytrance with him has been incredibly insightful, significantly elevating my skills with tips and techniques that would have taken me much longer to discover on my own. 
                                His classes offer a comfortable and supportive environment where he always provides detailed insights into any doubts or questions you have. 
                                If you're looking to accelerate your Psy-trance production, Dave is an exceptional resource for mastering the art."
                            </div>
                        </div>
                        <div className="extra content">- Pranav K.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Big thanks yesterday we had a great session sir! Wow, I cannot believe that you showed me two topics and it helped me a lot.... like a LOT."
                            </div>
                        </div>
                        <div className="extra content">- anonymous</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ui inverted basic card">
                        <div className="content">
                            <div className="description">
                                "Your Patreon masterclass on the Access Virus is incredible!!"
                            </div>
                        </div>
                        <div className="extra content">- anonymous</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}