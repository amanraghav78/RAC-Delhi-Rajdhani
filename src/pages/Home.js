import React from "react";
import image1 from "../images/image1.PNG";
import image2 from "../images/Home.PNG"; // Import your image files

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mt-8">
        <div className="text-center">
          <img
            src={image2}
            alt="Group"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-full xl:w-full rounded-md shadow-md mb-2 mx-auto"
          />
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center my-8 text-gray-800">
        Welcome to the Rotaract Club of Delhi Rajdhani
      </h1>
      <p className="text-center text-lg md:text-xl mb-8 px-4 md:px-8 lg:px-16 leading-relaxed text-gray-600">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To provide opportunities for young people to enhance their
            leadership skills and create positive change in their communities.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Us</h2>
          <p className="text-gray-600">
            Become a member and be part of a network of young leaders making a
            difference.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="text-center">
          <img
            src={image1}
            alt="Group"
            className="w-full md:w-3/4 lg:w-full rounded-md shadow-md mb-2 mx-auto"
          />
          <p className="text-gray-600 mt-2">Installation 2023-24</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
