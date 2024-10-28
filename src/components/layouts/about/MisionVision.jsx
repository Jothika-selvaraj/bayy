import React, { useState } from 'react';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="about-3 section-padding py-10 bg-grey">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="rounded-full p-4">
            <img
              src="assets/images/about/Mission.png"
              alt="Child reading Quran"
              className="w-96 h-96 rounded-full object-cover"
            />
          </div>
          </div>
          <div className="lg:w-1/2">
            <div className="about-content mt-5 mt-lg-0">
              <div className="heading mb-8">
                <span className="subheading"  style={{color:'#F14D5D'}}>OUR MISSION & VISION</span>
                <h2 className="font-lg">Love and learn Quran online, one verse at a time.</h2>
              </div>

              <div className="flex justify-center space-x-4 mb-6">
              <button
                 className={`py-2 px-4 rounded-lg font-semibold transition duration-300 ${
                    activeTab === 'mission'
                  ? 'bg-[#F14D5D] text-white' // Change active background color
                   : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                   onClick={() => handleTabClick('mission')}
                >
                  Mission
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-semibold transition duration-300 ${
                     activeTab === 'vision'
                     ? 'bg-[#F14D5D] text-white' // Change active background color
                     : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  onClick={() => handleTabClick('vision')}
                >
                  Vision
                </button>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg ">
                {activeTab === 'mission' ? (
                  <p className="text-lg text-gray-700">
                    Our mission is to create innovative solutions that empower individuals and organizations to achieve their goals.
                  </p>
                ) : (
                  <p className="text-lg text-gray-700">
                    Our vision is to be a global leader in providing exceptional services that inspire and drive change.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
