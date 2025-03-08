/*
  COLLECTION ITEM TEMPLATE
  
  HOW TO USE:
  1. Copy this entire block
  2. Paste it in the Collections grid in page.jsx
  3. Replace the placeholder text and image with your content
  4. Save the file
*/

<div className="rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 bg-[#1A1717]/30 backdrop-blur-sm border border-[#E2C799]/10">
  <div className="p-6 bg-gradient-to-b from-[#252121] to-[#1A1717] text-center h-full">
    <h3 className="text-2xl font-bold text-[#E2C799] mb-3 font-roboto">
      YOUR TITLE HERE
    </h3>
    <div className="relative h-80">
      <img
        src="YOUR_IMAGE_URL_HERE"
        alt="YOUR_ALT_TEXT_HERE"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <p className="text-[#F5E6D3]/90 font-roboto text-lg mt-4">
      YOUR DESCRIPTION HERE
    </p>
  </div>
</div> 