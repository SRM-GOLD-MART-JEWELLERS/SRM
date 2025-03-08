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
      <header className="bg-[#1A1717]/60 fixed w-full z-50 backdrop-blur-md shadow-lg mt-4 mx-4 rounded-3xl border border-[#E2C799]/10 max-w-[calc(100%-2rem)] left-1/2 -translate-x-1/2">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-bold font-roboto text-[#E2C799] hover:text-[#D4B88C] transition-colors">
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
            className="md:hidden text-[#E2C799] focus:outline-none p-2 hover:bg-[#E2C799]/10 rounded-xl transition-colors"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-[#1A1717]/95 border-t border-[#E2C799]/10 animate-slideIn backdrop-blur-md">
            <div className="px-4 py-6 space-y-6 font-roboto">
              <a
                href="#collections"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2"
              >
                Collections
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#F5E6D3] hover:text-[#E2C799] transition-colors text-lg py-2"
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
              <div className="w-full md:w-1/2 animate-fadeIn">
                <img
                  src="https://ucarecdn.com/1ee3927f-19c4-4da4-8697-3264d9f18bc4/-/format/auto/"
                  alt="Stack of shining gold coins"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right animate-fadeIn">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-roboto mb-4 sm:mb-6 text-[#E2C799] leading-tight">
                  SRM JWELLERS
                </h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="relative h-80">
                  <img
                    src="https://ucarecdn.com/84c9f26f-5f2e-42d6-af29-76136bd74bc2/-/format/auto/"
                    alt="Gold bars and coins collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-[#1A1717] to-[#252121]">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    Gold Collection
                  </h3>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg">
                    Gift your loving ones with a GOLD BULLION
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
                <div className="relative h-80">
                  <img
                    src="https://ucarecdn.com/964d0823-8bd1-4d3c-ad64-93aec61d7a5a/-/format/auto/"
                    alt="Person holding a GST bill document"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-[#1A1717] to-[#252121]">
                  <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
                    We Provide GST Bill
                  </h3>
                  <p className="text-[#F5E6D3]/90 font-roboto text-lg">
                    You can get discount at your end by claiming GST
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;