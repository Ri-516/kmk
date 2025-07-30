import { useContext } from 'react';
import Slider from "react-slick";
import Footer from '../components/component/Footer/Footer';
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';

import trampoline from "../assets/trampoline.jpg";
import arcade from "../assets/ride1Arcade.jpg"
import crazybus from "../assets/ride2crazybus.jpg";
import rockintug from "../assets/ride3rockintug.jpg";
import playarea from "../assets/ride4playarea.jpg";
import ballpit from "../assets/ride5ballpit.jpg";
import delux3dkiddleride from "../assets/ride6delux3dkiddleride.jpg";
import speedbocce from "../assets/ride7speedbocce.jpg";
import jumping from "../assets/jumpin.jpg";
import carousel from "../assets/ride8carousel.jpg";
import hawaiiansurfing from "../assets/ride9hawaiiansurfing.jpg";
import minitrainride from "../assets/ride10minitrainride.jpg";
import boatride from "../assets/ride11boatride.jpg";
import merrygoround from "../assets/ride12merrygoround.jpg";
import disko from "../assets/ride13disko.jpg";
import ride14 from "../assets/ride14.png"
import ride15 from "../assets/ride15.png"
import ride16 from "../assets/ride16.png"
import ride17 from "../assets/ride17.png"
import ride18 from "../assets/ride18.png"
import ride19 from "../assets/ride19.png"
import ride20 from "../assets/ride20.png"
import ride21 from "../assets/ride21.png"
import ride22 from "../assets/ride22.png"
import ride23 from "../assets/ride23.png"
import ride24 from "../assets/ride24.png"
import ride25 from "../assets/ride25.png"
import ride26 from "../assets/ride26.png"
import ride27 from "../assets/ride27.png"
import ride28 from "../assets/ride28.png"

import { LanguageContext } from '../context/LanguageContext';
import en from "../locales/en.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RideLabelKeys = keyof typeof en;

interface RideVariant {
  img: string;
  label: RideLabelKeys;
}

interface RideCard {
  key: string;
  variants: RideVariant[];
}

const cardsData: RideCard[] = [
  {
    key: 'trampoline',
    variants: [
      { img: trampoline, label: 'ride_trampoline1' },
      { img: arcade, label: 'ride_trampoline2' },
      { img: crazybus, label: 'ride_trampoline3' },
      { img: ride14, label: 'ride_trampoline4' },
      { img: ride15, label: 'ride_trampoline5' },
      { img: ride28, label: 'ride_trampoline6' },
    ],
  },
  {
    key: 'carrom',
    variants: [
      { img: rockintug, label: 'ride_carrom1' },
      { img: playarea, label: 'ride_carrom2' },
      { img: ballpit, label: 'ride_carrom3' },
      { img: ride16, label: 'ride_carrom4' },
      { img: ride17, label: 'ride_carrom5' },
      { img: ride27, label: 'ride_carrom6' },
    ],
  },
  {
    key: 'jumping',
    variants: [
      { img: delux3dkiddleride, label: 'ride_jumping1' },
      { img: speedbocce, label: 'ride_jumping2' },
      { img: jumping, label: 'ride_jumping3' },
      { img: ride18, label: 'ride_jumping4' },
      { img: ride19, label: 'ride_jumping5' },
      { img: ride26, label: 'ride_jumping6' },
    ],
  },
  {
    key: 'karting',
    variants: [
      { img: carousel, label: 'ride_karting1' },
      { img: hawaiiansurfing, label: 'ride_karting2' },
      { img: minitrainride, label: 'ride_karting3' },
      { img: ride20, label: 'ride_karting4' },
      { img: ride21, label: 'ride_karting5' },
      { img: ride25, label: 'ride_karting6' },
    ],
  },
  {
    key: 'football',
    variants: [
      { img: boatride, label: 'ride_football1' },
      { img: merrygoround, label: 'ride_football2' },
      { img: disko, label: 'ride_football3' },
      { img: ride22, label: 'ride_football4' },
      { img: ride23, label: 'ride_football5' },
      { img: ride24, label: 'ride_football6' },
    ],
  },
];

export default function Rides() {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

  const renderCard = (cardIndex: number, customClass: string = '') => (
    <div className={`relative ${customClass}`}>
      <img
        src={cardsData[cardIndex].variants[0].img}
        alt=""
        className="w-full h-full object-cover"
      />
      <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
        {t(cardsData[cardIndex].variants[0].label)}
      </span>
    </div>
  );

  const renderSlider = () => {
    const card = cardsData[0];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="h-full">
        {card.variants.map((variant, idx) => (
          <div key={idx} className="relative h-full">
            <img
              src={variant.img}
              alt=""
              className="w-full h-[600px] object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
              {t(variant.label)}
            </span>
          </div>
        ))}
      </Slider>
    );
  };

  const renderSliderForCard = (cardIndex: number) => {
    const card = cardsData[cardIndex];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="h-full">
        {card.variants.map((variant, idx) => (
          <div key={idx} className="relative h-full">
            <img
              src={variant.img}
              alt=""
              className="w-full h-[360px] object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
              {t(variant.label)}
            </span>
          </div>
        ))}
      </Slider>
    );
  };

    const renderSliderForCard3 = (cardIndex: number) => {
    const card = cardsData[cardIndex];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="h-full">
        {card.variants.map((variant, idx) => (
          <div key={idx} className="relative h-full">
            <img
              src={variant.img}
              alt=""
              className="w-full h-[360px] object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
              {t(variant.label)}
            </span>
          </div>
        ))}
      </Slider>
    );
  };

    const renderSliderForCard4 = (cardIndex: number) => {
    const card = cardsData[cardIndex];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="h-full">
        {card.variants.map((variant, idx) => (
          <div key={idx} className="relative h-full">
            <img
              src={variant.img}
              alt=""
              className="w-full h-[240px] object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
              {t(variant.label)}
            </span>
          </div>
        ))}
      </Slider>
    );
  };

    const renderSliderForCard5 = (cardIndex: number) => {
    const card = cardsData[cardIndex];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="h-full">
        {card.variants.map((variant, idx) => (
          <div key={idx} className="relative h-full">
            <img
              src={variant.img}
              alt=""
              className="w-full h-[240px] object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
              {t(variant.label)}
            </span>
          </div>
        ))}
      </Slider>
    );
  };


  return (
    <div>
      <SliderHeader />

      <section>
        <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={minibanner}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="./" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-[#FFD42D] text-3xl md:text-4xl font-heading tracking-wide">
              {t("explore_rides_heading")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      <section className="mx-auto p-4 bg-[#F4F4F4] border-none">
        {/* Desktop Layout */}
        <div className="hidden md:flex h-[600px]">
          <div className="w-[30%] h-full overflow-hidden">{renderSlider()}</div>
          <div className="w-[70%] flex flex-col">
            <div className="flex h-[60%]">
              <div className="w-[60%]">{renderSliderForCard(1)}</div>
              <div className="w-[40%]">{renderSliderForCard3(2)}</div>
            </div>
            <div className="flex h-[40%]">
              <div className="w-[50%]">{renderSliderForCard4(3)}</div>
              <div className="w-[50%]">{renderSliderForCard5(4, )}</div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-4">
          <div>{renderCard(0, 'h-[200px]')}</div>
          <div>{renderCard(1, 'h-[200px]')}</div>
          <div>{renderCard(2, 'h-[200px]')}</div>
          <div>{renderCard(3, 'h-[200px]')}</div>
          <div>{renderCard(4, 'h-[200px]')}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
