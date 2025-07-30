import { useContext } from 'react';
import Slider from "react-slick";
import Footer from '../components/component/Footer/Footer';
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';

import ALLADDIN from "../assets/rides/ALLADDIN.png";
import BIG_INFLATEABLE_SIDE from "../assets/rides/BIG INFLATEABLE SIDE.png";
import BIG_INFLATEABLE from "../assets/rides/BIG INFLATEABLE.png";
import BILLIARDS from "../assets/rides/BILLIARDS.png";
import BOXING_AREA from "../assets/rides/BOXING AREA.png";
import BUMBER_JEEP from "../assets/rides/BUMBER JEEP.png";
import BUMBER_AREA from "../assets/rides/BUMPER BOAT.png";
import BUMPER_CAR from "../assets/rides/BUMPER CAR.png";

import BUMPER_CARS from "../assets/rides/BUMPER CARS.png";
import CAMEL_RIDE from "../assets/rides/CAMEL RIDE.png";
import CAR_RACING from "../assets/rides/CAR RACING.png";
import CARNIVAL_BOOTH_GAMES from "../assets/rides/CARNIVAL BOOTH GAMES.png";
import COOL_DROPS from "../assets/rides/COOL DROPS.png";
import CRAZY_MOTOR from "../assets/rides/CRAZY MOTOR.png";
import DISCO_TAGADA from "../assets/rides/DISCO TAGADA.png";
import GO_CART_RIDES from "../assets/rides/GO CART RIDES.png";

import GO_CART from "../assets/rides/GO CART.png";
import GUN_SHOOTING from "../assets/rides/GUN SHOOTING.png";
import HAPPY_SWING_IMAGE_2 from "../assets/rides/HAPPY SWING IMAGE 2.png";
import HAPPY_SWING from "../assets/rides/HAPPY SWING.png";
import HONEY_SWING from "../assets/rides/HONEY SWING.png";
import JURRASIC_PARK_1 from "../assets/rides/JURRASIC PARK 1.png";
import JURRASIC_PARK from "../assets/rides/JURRASIC PARK.png";
import KIDDIE_RIDES from "../assets/rides/KIDDIE RIDES.png";

import LANE_MASTER from "../assets/rides/LANE MASTER.png";
import MAGIC_BALL from "../assets/rides/MAGIC BALL.png";
import MINI_TRAIN_RIDE from "../assets/rides/MINI TRAIN RIDE.png";
import MINI_TRAIN from "../assets/rides/MINI TRAIN.png";
import OCTOPUS_IMAGE_2 from "../assets/rides/OCTOPUS IMAGE 2.png";
import OCTOPUS_IMAGE_3 from "../assets/rides/OCTOPUS IMAGE 3.png";
import OCTOPUS_IMAGE_4 from "../assets/rides/OCTOPUS IMAGE 4.png";
import OCTOPUS from "../assets/rides/OCTOPUS.png";

import RACING_BICK from "../assets/rides/RACING BICK.png";
import ROCK_N_TUG from "../assets/rides/ROCK N TUG.png";
import SOFT_PLAY from "../assets/rides/SOFT PLAY.png";
import TRAFIC_JAM from "../assets/rides/TRAFIC JAM.png";
import TRAMPOLINE_PARK from "../assets/rides/TRAMPOLINE PARK.png";
import TWISTER from "../assets/rides/TWISTER.png";
import VR_1 from "../assets/rides/VR 1.png";
import VR_2 from "../assets/rides/VR 2.png";
import VR_3 from "../assets/rides/VR 3.png";
import WHACK_AND_WIN from "../assets/rides/WHACK AND WIN.png";

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
      { img: ALLADDIN, label: 'ride_trampoline1' },
      { img: BIG_INFLATEABLE_SIDE, label: 'ride_trampoline2' },
      { img: BIG_INFLATEABLE, label: 'ride_trampoline3' },
      { img: BILLIARDS, label: 'ride_trampoline4' },
      { img: BOXING_AREA, label: 'ride_trampoline5' },
      { img: BUMBER_JEEP, label: 'ride_trampoline6' },
      { img: BUMBER_AREA, label: 'ride_trampoline7' },
      { img: BUMPER_CAR, label: 'ride_trampoline8' },
    ],
  },
  {
    key: 'carrom',
    variants: [
      { img: BUMPER_CARS, label: 'ride_carrom1' },
      { img: CAMEL_RIDE, label: 'ride_carrom2' },
      { img: CAR_RACING, label: 'ride_carrom3' },
      { img: CARNIVAL_BOOTH_GAMES, label: 'ride_carrom4' },
      { img: COOL_DROPS, label: 'ride_carrom5' },
      { img: CRAZY_MOTOR, label: 'ride_carrom6' },
      { img: DISCO_TAGADA, label: 'ride_carrom6' },
      { img: GO_CART_RIDES, label: 'ride_carrom6' },
    ],
  },
  {
    key: 'jumping',
    variants: [
      { img: GO_CART, label: 'ride_jumping1' },
      { img: GUN_SHOOTING, label: 'ride_jumping2' },
      { img: HAPPY_SWING_IMAGE_2, label: 'ride_jumping3' },
      { img: HAPPY_SWING, label: 'ride_jumping4' },
      { img: HONEY_SWING, label: 'ride_jumping5' },
      { img: JURRASIC_PARK_1, label: 'ride_jumping6' },
      { img: JURRASIC_PARK, label: 'ride_jumping6' },
      { img: KIDDIE_RIDES, label: 'ride_jumping6' },
    ],
  },
  {
    key: 'karting',
    variants: [
      { img: LANE_MASTER, label: 'ride_karting1' },
      { img: MAGIC_BALL, label: 'ride_karting2' },
      { img: MINI_TRAIN_RIDE, label: 'ride_karting3' },
      { img: MINI_TRAIN, label: 'ride_karting4' },
      { img: OCTOPUS_IMAGE_2, label: 'ride_karting5' },
      { img: OCTOPUS_IMAGE_3, label: 'ride_karting6' },
      { img: OCTOPUS_IMAGE_4, label: 'ride_karting7' },
      { img: OCTOPUS, label: 'ride_karting8' },
    ],
  },
  {
    key: 'football',
    variants: [
      { img: RACING_BICK, label: 'ride_football1' },
      { img: ROCK_N_TUG, label: 'ride_football2' },
      { img: SOFT_PLAY, label: 'ride_football3' },
      { img: TRAFIC_JAM, label: 'ride_football4' },
      { img: TRAMPOLINE_PARK, label: 'ride_football5' },
      { img: TWISTER, label: 'ride_football6' },
      { img: VR_1, label: 'ride_football6' },
      { img: VR_2, label: 'ride_football6' },
      { img: VR_3, label: 'ride_football6' },
      { img: WHACK_AND_WIN, label: 'ride_football6' },
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
