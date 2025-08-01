import { useContext, useState } from "react";
import { Button } from "../../ui/button";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import WebLogoEng from "../../../assets/Web_Logo_KMK_Eng.png";
import WebLogoArb from "../../../assets/Web_Logo_KMK_Arb.png";
import manama from "../../../assets/Manama.png";
import marina from "../../../assets/marinabeach.png";
import hidd from "../../../assets/hidd.png";
import riffa from "../../../assets/rafa.png";
import { LanguageContext } from "../../../context/LanguageContext";

export default function SliderHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchesOpenMobile, setIsBranchesOpenMobile] = useState(false);

  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { lang, toggleLang, t } = langContext;

  const marqueeClass = lang === "ar" ? "marquee-track-reverse-nav" : "marquee-track-nav";
  return (


    <header className="w-full font-quicksand font-semibold bg-[#F4F4F4]" data-aos="fade-in" data-aos-delay="200">
      {/* Top Bar */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 text-[#313131] text-sm lg:text-xl">
        <div className="flex items-center gap-4 md:gap-20 flex-wrap justify-center md:justify-start" data-aos="fade-up">
          <img
            src={lang === "ar" ? WebLogoArb : WebLogoEng}
            alt="Logo"
            className="w-20 h-auto"
          />
        </div>

        <div className="flex items-center gap-4 md:gap-20 mt-2 md:mt-0">
          <button
            onClick={toggleLang}
            className="bg-white text-black px-4 py-2 rounded hidden md:block" data-aos="fade-up"
          >
            {t("lang_switch")}
          </button>


          <div className="flex items-center gap-1 hidden md:inline-flex" data-aos="fade-up">
            <div className="bg-[#009D48] p-1 rounded">
              <Phone size={16} className="text-white" />
            </div>
            <div className="flex flex-row leading-tight">
              <a href="tel:97317227476" className="hover:underline">
                <span>{lang === "ar" ? "+973 17227476" : "+973 17227476"}</span>
              </a>&nbsp;
              , &nbsp;

              <a href="tel:97317227477" className="hover:underline">
                <span>{lang === "ar" ? "+973 17227477" : "+973 17227477"}</span>
              </a>
            </div>
          </div>

          {/* <Button className="bg-[#FFD42D] text-black hover:bg-yellow-300 shadow-md font-bold text-lg hidden md:inline-flex" data-aos="fade-up">
            {t("card_top_up")}
          </Button> */}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container overflow-hidden" data-aos="fade-up">
        <div className={`marquee-track-nav ${marqueeClass}`}>
          <span className="marquee-text whitespace-nowrap">
            <span className="text-white">{t("marquee_text1")}</span>
            <span className="px-4"></span>
            <span className="text-yellow-500">{t("marquee_text2")}</span>
            <span className="px-4"></span>
            <span className="text-white">{t("marquee_text3")}</span>
            <span className="px-4"></span>
            <span className="text-yellow-500">{t("marquee_text4")}</span>
          </span>
          <span className="marquee-text whitespace-nowrap">
            <span className="text-white">{t("marquee_text1")}</span>
            <span className="px-4"></span>
            <span className="text-yellow-500">{t("marquee_text2")}</span>
            <span className="px-4"></span>
            <span className="text-white">{t("marquee_text3")}</span>
            <span className="px-4"></span>
            <span className="text-yellow-500">{t("marquee_text4")}</span>
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#009D48]">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap justify-between items-center text-white text-xl font-semibold">
            <li data-aos="fade-in" data-aos-delay="0" ><Link to="/">{t("home")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="100" className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                {t("branches")} <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black rounded-lg shadow-lg p-4 w-80 opacity-0 group-hover:opacity-100 group-hover:block invisible group-hover:visible transition-all duration-300 z-50 group-focus-within:visible">
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={manama} alt="Manama" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_manama")}</span>
                </li>
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={marina} alt="Marina Beach" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_marina")}</span>
                </li>
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={hidd} alt="Hidd" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_hidd")}</span>
                </li>
                <li className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
                  <img src={riffa} alt="Riffa" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_riffa")}</span>
                </li>
              </ul>
            </li>
            <li data-aos="fade-in" data-aos-delay="200" ><Link to="/offers">{t("offers")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="300" ><Link to="/about">{t("about_us")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="400" ><Link to="/rides">{t("rides")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="500" ><Link to="/blogs">{t("blogs")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="600" ><Link to="/contact">{t("contact_us")}</Link></li>
            <li data-aos="fade-in" data-aos-delay="700" ><Link to="/dining">{t("dining")}</Link></li>
          </ul>

          {/* Mobile Toggle */}
          <div className="flex md:hidden justify-between items-center">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col mt-4 gap-4 text-white text-lg font-semibold" data-aos="fade-left"
            >
              <li><Link to="/">{t("home")}</Link></li>

              {/* Mobile Branches Dropdown */}
              <li>
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsBranchesOpenMobile(!isBranchesOpenMobile)}
                >
                  {t("branches")}{" "}
                  <ChevronDown size={16} className={isBranchesOpenMobile ? "rotate-180 transition" : "transition"} />
                </button>
                {isBranchesOpenMobile && (
                  <ul className="bg-white text-black rounded-lg shadow-lg p-4 w-full mt-2">
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={manama} alt="Manama" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_manama")}</span>
                    </li>
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={marina} alt="Marina Beach" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_marina")}</span>
                    </li>
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={hidd} alt="Hidd" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_hidd")}</span>
                    </li>
                    <li className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
                      <img src={riffa} alt="Riffa" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_riffa")}</span>
                    </li>
                  </ul>
                )}
              </li>

              {/* Rest of Mobile Nav */}
              <li><Link to="/offers">{t("offers")}</Link></li>
              <li><Link to="/about">{t("about_us")}</Link></li>
              <li><Link to="/rides">{t("rides")}</Link></li>
              <li><Link to="/blogs">{t("blogs")}</Link></li>
              <li><Link to="/contact">{t("contact_us")}</Link></li>
              <li><Link to="/dining">{t("dining")}</Link></li>
              <li className="mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <Link to="/">
                    <Button className="bg-[#FFD42D] text-black hover:bg-yellow-300 shadow-md font-bold text-lg px-6 py-3 rounded-lg">
                      {t("card_top_up")}
                    </Button>
                  </Link>
                  <button
                    onClick={toggleLang}
                    className="bg-white text-black font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all"
                    data-aos="fade-up"
                  >
                    {t("lang_switch")}
                  </button>
                </div>
              </li>

            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
