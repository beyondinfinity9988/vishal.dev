import React from "react";
import { IoMdPlay } from "react-icons/io";

function skills() {
  return (
    <div className="flex flex-col">
      {/* Languages */}
      <div className="flex flex-col lg:text-xl md:text-lg text-base mb-3">
        <div className="flex items-center mb-2">
          <IoMdPlay className="mr-2 text-purple" />
          <p className="font-semibold">Languages</p>
        </div>

        {/* Proficient */}
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Python</p>
          </div>
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">JavaScript</p>
          </div>
          <div className="py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">HTML/CSS</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">TypeScript</p>
          </div>
          <div className="py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">SQL</p>
          </div>
        </div>

        {/* Beginner */}
        <div className="beginner-row flex flex-wrap ml-6">
          <div className="py-1 px-3 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Java</p>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="flex flex-col lg:text-xl md:text-lg text-base mb-3">
        <div className="flex items-center font-semibold mb-2">
          <IoMdPlay className="mr-2 text-purple" />
          <p className="font-semibold">Frameworks/Libraries</p>
        </div>

        {/* Proficient */}
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">React</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Flask</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Node.js</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">TailwindCSS</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">UIkit</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">React Native</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Next.js</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Chakra UI</p>
          </div>
        </div>

        {/* Beginner */}
        <div className="beginner-row flex flex-wrap ml-6">
          <div className="p-2 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Pygame</p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col lg:text-xl md:text-lg text-base">
        <div className="flex items-center font-semibold mb-2">
          <IoMdPlay className="mr-2 text-purple" />
          <p className="font-semibold">Tools</p>
        </div>

        {/* Proficient */}
        <div className="proficient-row flex flex-wrap ml-6">
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Visual Studio Code</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Git</p>
          </div>
          <div className="p-2 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Canva</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="intermediate-row flex flex-wrap ml-6">
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">MongoDB</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Figma</p>
          </div>
          <div className="p-2 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Autodesk Fusion 360</p>
          </div>
        </div>

        {/* Beginner */}
        <div className="beginner-row flex flex-wrap ml-6">
          <div className="p-2 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8">
            <p className="text-sm font-semibold">Xcode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;