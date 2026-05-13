"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";
import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    {
      title_ceremony: "Mehendi",
      image: "/assets/mehendi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 9pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Cocktail",
      image: "/assets/cocktail.webp",
      venue_address: <>Friday, March 9th 2026<br /> JW Mariott, Mussoorie <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Engagement",
      image: "/assets/engagement.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Shaadi",
      image: "/assets/shaadi.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: "/assets/reception.webp",
      venue_address: <>Friday, March 9th 2026 <br /> Taj Exotica Resort, Goa <br /> 6pm Onwards</>,
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />

      {/* hero section */}
      <div className=" bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-cover bg-no-repeat
                       bg-top md:bg-center w-full overflow-hidden relative">

        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="absolute top-10 left-8 w-40 h-40 transform rotate-12 opacity-90" />
        <FloatingLamp className="absolute top-30 left-20 w-36 h-36 transform rotate-45 opacity-80" />
        <FloatingLamp className="absolute top-50 left-40 w-32 h-32 transform rotate-30 opacity-85" />
        <FloatingLamp className="absolute top-70 left-60 w-38 h-38 transform rotate-15 opacity-80" />
        <FloatingLamp className="absolute top-90 left-80 w-34 h-34 transform rotate-25 opacity-75" />
        <FloatingLamp className="absolute top-110 left-100 w-28 h-28 transform rotate-10 opacity-85" />
        <FloatingLamp className="absolute top-130 left-120 w-36 h-36 transform rotate-35 opacity-75" />
        <FloatingLamp className="absolute top-150 left-140 w-30 h-30 transform rotate-22 opacity-85" />
        <FloatingLamp className="absolute top-170 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="absolute top-190 left-180 w-40 h-40 transform rotate-28 opacity-85" />


        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-40 h-40 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-32 h-32 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-40 h-40 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />





        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="absolute top-20 right-12 w-32 h-32 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-40 right-32 w-28 h-28 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-60 right-52 w-36 h-36 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-80 right-72 w-30 h-30 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-100 right-92 w-34 h-34 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-120 right-112 w-38 h-38 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-140 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-160 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-180 right-172 w-36 h-36 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-200 right-192 w-30 h-30 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-40 h-40 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-40 h-40 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-40 h-40 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-40 h-40 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-32 h-32 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-40 h-40 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />




        {/* <FallingLamps /> */}
        <div className="lg:pt-40 md:pt-30 md:pb-0 relative z-10 pt-6">
          <h2 className="text-[#AF630E] text-center leading-tight text-3xl md:text-5xl lg:text-[64px] pb-120
                          md:pb-400 lg:pb-470 3xl:pb-500 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="jacques-francois">VEERENDRA</span>

            <span className="jacques-francois text-xl md:text-3xl lg:text-5xl tracking-widest font-cormorant">WEDS</span>

            <span className="jacques-francois">MEERA</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-50 pt-0">
            <p className="jacques-francois text-base md:text-2xl lg:text-3xl text-[#FFF097] text-center">ॐ श्री गणेशाय नम</p>
            <Image
              src="/assets/ganesha.webp"
              alt="idol"  width={100} height={100}
              className="w-23 h-30 md:w-35 md:h-46 lg:w-41 lg:h-53  object-cover"/>

            <h2 className="text-[#FFF097] text-sm md:text-xl lg:text-[26px] md:pt-8 jacques-francois">
              With the heavenly blessings of <br />
              Shri Rajesh Gaur & Shrimati Sunita Gaur
            </h2>

            <hr className="lg:w-24 w-16 border-[#FFF097] my-2 md:my-4" />
            <h2 className="text-[#FFF097] text-sm md:text-xl lg:text-[26px] jacques-francois">
              Shri Amit Chauhan & Shrimati Vaishali Chauhan
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#FFF097] jacques-francois text-3xl md:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider">
              INVITE
            </h2>

            <p className="text-[#FFF097] jacques-francois text-sm md:text-xl lg:text-[26px] mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#FFF097] jacques-francois text-center mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight font-medium">
              VEERENDRA
            </h2>

            <h2 className="text-[#FFF097] jacques-francois text-center mt-0 text-3xl md:text-5xl lg:text-[64px] leading-tight font-medium">
              <span className="text-[#FFF097] jacques-francois text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">&
              </span>   <br />
              MEERA
            </h2>

            <p className="text-[#FFF097] jacques-francois text-sm md:text-xl lg:text-3xl mt-8 md:mt-14">
              Daughter of <br /> Shri Mahesh Rajput & Shrimati Asha Rajput
            </p>

            <p className="text-[#FFF097] jacques-francois text-sm md:text-xl lg:text-3xl mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-28 3xl:gap-50">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="lg:w-80 w-75 sm:w-76 h-auto"/>

                  <h2 className="text-[#FFF097] jacques-francois lg:text-[45px] md:text-2xl text-3xl mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-[#FFF097] jacques-francois text-[14px] sm:text-base mt-2">
                    <span className="text-sm md:text-base lg:text-[20px]">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFF097] underline md:text-sm text-[18px] mt-2 jacques-francois"
                    target="_blank">
                    See the route
                  </a>

                </div>
              ))}
            </div>
          </div>


          <div className="flex items-center pt-30 lg:pt-50 3xl:pt-90 3xl:gap-60">
            <Image
              src="/assets/couple_one.webp"
              alt="couple" width={900} height={1200}
              className="w-65 h-90 md:w-131 md:h-190 lg:w-219 lg:h-294 3xl:w-270 3xl:h-346 object-cover"/>

            {/* Center Text */}
            <div className="flex flex-col justify-center items-center text-center md:mb-0 lg:mb-0">
              <p className="font-Cormorant-upright text-2xl md:text-2xl lg:text-[38px] text-[#FFF097]">
                MEET THE
              </p>

              <h2 className="text-5xl lg:text-[130px] text-center text-[#FF8170] lg:pt-12 font-cormorant-upright lg:leading-18 md:leading-6 leading-6 pt-6">
                <span className="text-[#F2AD15] font-cormorant-upright">Bride</span> <br /> & <br /> <span className="text-[#F2AD15]">Groom</span>
              </h2>
            </div>
          </div>
          
        </div>
      </div>

      <CoupleMessage />

      <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
        <div className="h-255 md:h-179 lg:h-333 3xl:h-419 flex flex-col items-center relative">
          <img src="/assets/logo.webp" alt="logo" width={250} height={300} className="absolute top-28 w-42 h-48 md:top-41 md:w-28 md:h-35 lg:top-78 lg:w-48 lg:h-55 3xl:top-101" />
        </div>
      </div>

      <MarriageCountdown />

      <div className="fixed top-5 left-5 z-50">
        <a href="https://invitearc.com/">
          <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-semibold">
              Exit Preview
            </span>
          </button>
        </a>
      </div>
    </>
  );
}
