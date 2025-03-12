"use client";
import React, { useState, useEffect } from "react";

function MainComponent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch("/api/get-jewelry-content", {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch content");
        }
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || "Failed to load jewelry content");
        }
        setContent(data.html);
      } catch (err) {
        console.error("Error fetching jewelry content:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A1717] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-[60vh] bg-[#E2C799]/10 rounded-lg mb-8 shadow-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-[#E2C799]/10 rounded-lg shadow-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1717] min-h-screen bg-gradient-to-b from-[#1A1717] to-[#252121] px-4 sm:px-6">
      <header className="bg-[#1A1717]/60 fixed w-full z-50 backdrop-blur-md shadow-lg mt-4 rounded-3xl border border-[#E2C799]/10 max-w-[98%] left-1/2 -translate-x-1/2">
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 relative">
          <div className="text-2xl sm:text-3xl font-bold font-roboto text-[#E2C799] hover:text-[#D4B88C] transition-colors text-center w-full md:w-auto">
            SRM Jewellers
          </div>
          <div className="hidden md:flex space-x-8 lg:space-x-12 font-roboto">
            <a
              href="#collections"
              className="text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-base lg:text-lg"
            >
              Collections
            </a>
            <a
              href="#services"
              className="text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-base lg:text-lg"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-base lg:text-lg"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#E2C799] focus:outline-none p-2 hover:bg-[#E2C799]/10 rounded-xl transition-colors absolute right-0 top-1/2 -translate-y-1/2"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-[#1A1717]/95 border-t border-[#E2C799]/10 animate-slideIn backdrop-blur-md rounded-b-3xl">
            <div className="px-4 py-6 space-y-4 font-roboto text-center">
              <a
                href="#collections"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2 nav-link"
              >
                Collections
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2 nav-link"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2 nav-link"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="space-y-16 sm:space-y-24">
        <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen pt-28 sm:pt-32 pb-12 sm:pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1717] to-[#252121]"></div>
          <div className="relative max-w-7xl mx-auto h-full flex items-center">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8 sm:gap-12">
              <div className="w-full md:w-1/2">
                <img
                  src="https://ucarecdn.com/1ee3927f-19c4-4da4-8697-3264d9f18bc4/-/format/auto/"
                  alt="Stack of shining gold coins"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-roboto mb-4 sm:mb-6 text-[#E2C799] leading-tight">
                  SRM JWELLERS
                </h1>
                <div className="flex flex-col gap-2 mb-8 text-center md:text-right">
                  <div className="flex justify-between md:justify-end items-center gap-4">
                    <span className="font-semibold text-lg sm:text-xl font-roboto text-[#F5E6D3]">24CT Gold:</span>
                    <span className="text-lg sm:text-xl font-roboto text-[#E2C799]">₹ 87,752/10g</span>
                  </div>
                  <div className="flex justify-between md:justify-end items-center gap-4">
                    <span className="font-semibold text-lg sm:text-xl font-roboto text-[#F5E6D3]">22CT Gold:</span>
                    <span className="text-lg sm:text-xl font-roboto text-[#E2C799]">₹ 79,000/10g</span>
                  </div>
                  <div className="flex justify-between md:justify-end items-center gap-4">
                    <span className="font-semibold text-lg sm:text-xl font-roboto text-[#F5E6D3]">Silver:</span>
                    <span className="text-lg sm:text-xl font-roboto text-[#E2C799]">₹ 99,000/kg</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-roboto text-[#E2C799] mt-6 mb-3 text-center md:text-right">Today Rate Of Bullions</h3>
                  <div className="flex justify-between md:justify-end items-center gap-4">
                    <span className="text-lg sm:text-xl font-roboto text-[#F5E6D3]">916 Gold Coin 8g :</span>
                    <span className="text-lg sm:text-xl font-roboto text-[#E2C799]">₹ 65,954 </span>
                  </div>
                  <div className="flex justify-between md:justify-end items-center gap-4">
                    <span className="text-lg sm:text-xl font-roboto text-[#F5E6D3]">999 Gold Coin 10g :</span>
                    <span className="text-lg sm:text-xl font-roboto text-[#E2C799]">₹ 89,869  </span>
                  </div>
                  <div className="text-sm text-[#F5E6D3]/60 text-right mt-2">
                    Last Updated: Today
                  </div>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 font-roboto text-[#F5E6D3]">
                  GOLD BULLION AND CASH FOR GOLD
                </p>
                <a
                  href="tel:9910115710"
                  className="inline-block w-full sm:w-auto bg-gradient-to-r from-[#E2C799] to-[#D4B88C] text-[#1A1717] px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-all duration-300 font-roboto text-lg sm:text-xl transform hover:scale-105 shadow-lg"
                >
                  CALL NOW: 9910115710
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-[#E2C799] mb-16 font-roboto text-center">
              Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Gold Collection
                  </h3>
                  <div className="relative h-80">
                    <img
                      src="https://ucarecdn.com/84c9f26f-5f2e-42d6-af29-76136bd74bc2/-/format/auto/"
                      alt="Gold bars and coins collection"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    Gift your loving ones with a GOLD BULLION
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Silver Collection
                  </h3>
                  <div className="relative h-80">
                    <img
                      src="https://media-hosting.imagekit.io//268d766989f246cf/How%20to%20take%20beautiful%20photographs%20of%20your%20silver%20jewellery%20(3).png?Expires=1836028044&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=k8mAII6vwDzIjDmnx7k4PUuHKiTWU0MX2-fYxOb~s25-HF~BaQxzKhYD9GTxk~6kidNcFUFt7MeIK1ZpoXZGN-mi1gxMPcBXrGib9oIQN4-HdhoEuaKMUHyEXDMnAyOjE6sWJZKr2~-rrf1MRGUiL18BW4Si1o4FLSUKECmsHfAp5ZMgjDkX06j30UiO-KyIOdbydp-fRNs1LFvZjOJW-rOWn4hwmUz7Z4j2VMgKN4hm7oK8aGxeTcbwbaWf4JeeTumX0PmhdR1C1QeLQ~X9KRSZAdNz8PV3czTauvpii9usafRx-mo9c0YOsb50TwZTQDPg2Od3m06wNs5Fum0ieg__"
                      alt="Silver jewellery collection"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    Exquisite silver collection at best rates
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Coming Soon
                  </h3>
                  <div className="relative h-80 bg-[#E2C799]/10 flex items-center justify-center">
                    <i className="fas fa-image text-[#E2C799] text-5xl"></i>
                  </div>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
                    New collection coming soon
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-[#E2C799] mb-16 font-roboto text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#1A1717] to-[#252121]">
                  <div className="text-center mb-4">
                    <i className="fas fa-coins text-[#E2C799] text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto text-center">
                    Gold Bullion Trading
                  </h3>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg text-center">
                    Buy and sell gold bullion at competitive market rates with complete transparency
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#1A1717] to-[#252121]">
                  <div className="text-center mb-4">
                    <i className="fas fa-exchange-alt text-[#E2C799] text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto text-center">
                    Cash for Gold
                  </h3>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg text-center">
                    Get instant cash for your gold with best market value and proper documentation
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="p-6 bg-gradient-to-b from-[#1A1717] to-[#252121]">
                  <div className="text-center mb-4">
                    <i className="fas fa-file-invoice text-[#E2C799] text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto text-center">
                    GST Billing
                  </h3>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg text-center">
                    Professional GST billing service for all transactions with complete documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#1A1717] to-[#252121] border-t border-[#E2C799]/10"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#E2C799] mb-8 sm:mb-16 font-roboto">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto">
              <div className="p-4 sm:p-6 rounded-xl bg-[#1A1717]/30 backdrop-blur-sm shadow-lg border border-[#E2C799]/10 hover:border-[#E2C799]/30 transition-all duration-300 flex flex-col items-center justify-center">
                <i className="fas fa-map-marker-alt text-[#E2C799] text-2xl sm:text-3xl mb-3 sm:mb-4"></i>
                <p className="text-[#F5E6D3]/90 font-roboto text-base sm:text-lg text-center">
                2581/82 GALI NO. 6 BEDONPURA KAROL BAGH 
                </p>
              </div>
              <a
                href="tel:+91 9910115710"
                className="p-4 sm:p-6 rounded-xl bg-[#1A1717]/30 backdrop-blur-sm shadow-lg border border-[#E2C799]/10 hover:border-[#E2C799]/30 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <i className="fas fa-phone text-[#E2C799] text-2xl sm:text-3xl mb-3 sm:mb-4"></i>
                <p className="text-[#F5E6D3]/90 font-roboto text-base sm:text-lg text-center">
                  +91 9910115710<br></br> +91 9990197627<br></br> +91 81308 96608
                </p>
                
              </a>
              
              <a
                href="mailto:srmjewellers26@gmail.com"
                className="p-4 sm:p-6 rounded-xl bg-[#1A1717]/30 backdrop-blur-sm shadow-lg border border-[#E2C799]/10 hover:border-[#E2C799]/30 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <i className="fas fa-envelope text-[#E2C799] text-2xl sm:text-3xl mb-3 sm:mb-4"></i>
                <p className="text-[#F5E6D3]/90 font-roboto text-base sm:text-lg break-words w-full text-center">
                  srmjewellers26@gmail.com
                </p>
              </a> 
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-b from-[#1A1717] to-[#252121] border-t border-[#E2C799]/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-roboto text-[#F5E6D3]/80 text-base sm:text-lg px-4">
            &copy; 2025 SRM Jewellers. All rights reserved.
          </p>
        </div>
      </footer>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;