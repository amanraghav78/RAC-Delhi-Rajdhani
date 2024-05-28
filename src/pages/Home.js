import React from "react";
import image1 from "../images/image1.PNG";
import image2 from "../images/Home.PNG"; // Import your image files

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mt-8">
        <div className="text-center relative">
          <div className="absolute opacity-50 rounded-md"></div>
          <img
            src={image2}
            alt="Group"
            className="w-full md:full lg:w-full rounded-md shadow-md mb-2 mx-auto relative"
          />
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8 font-serif">
        Welcome to the Rotaract Club of Delhi Rajdhani
      </h1>
      <p className="text-center text-base md:text-xl mb-8 px-4 md:px-8 lg:px-16 leading-relaxed text-gray-600 font-serif">
        Rotaract Club of Delhi Rajdhani is the youth wing of Rotary
        International, District 3011 which aims to bring a positive and
        long-lasting change in the community as well as self. We work towards
        the betterment of society along with self-development. The club promotes
        exchanging ideas with leaders in the community, developing leadership
        and professional skills along with having fun through service.
        <br />
        <br />
        Rotaract Club of Delhi Rajdhani RID. 3011 hopes to continue its mission
        of bringing a positive change in society and advocates to work hard and
        build a future full of optimism, happiness, and good vibes; a future
        that each person feels proud and glad to have. With this spirit, we
        gracefully and joyously move forward towards the vision we hope to
        achieve.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md space-y-2 font-sans text-gray-600">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            To provide opportunities for young people to enhance their
            leadership skills and create positive change in their communities.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md space-y-2 font-sans text-gray-600">
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <p>
            Become a member and be part of a network of young leaders making a
            difference.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="text-center relative">
          <img
            src={image1}
            alt="Group"
            className="w-full rounded-md shadow-md mb-2 mx-auto relative"
          />
        </div>
        <div>
          <p className="font-serif text-gray-600">Installation 2023-24</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
