// src/pages/Newsletter.js
import React from "react";

const newsletters = [
  {
    title: "Volume 1",
    description: "First edition",
    link: "https://drive.google.com/file/d/1v5sP-Hr_XRVotf8UH0AqJ5wwjU_vmcIF/view",
  },
  {
    title: "Volume 2",
    description: "Second Edition",
    link: "https://drive.google.com/file/d/1SY4Hlj2unVlN8_RirhhkZU8FmU99e4N2/view?usp=drive_link",
  },
  // Add more newsletters as needed
];

function Newsletter() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
        Our Newsletters
      </h1>
      <p className="text-center text-lg md:text-xl mb-12 px-4 md:px-8 lg:px-16 leading-relaxed">
        Stay updated with our latest activities, events, and stories through our
        quarterly newsletters. Click on the download buttons to access each
        volume.
      </p>
      <div className="flex flex-wrap justify-center gap-8 ">
        {newsletters.map((newsletter, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{newsletter.title}</h2>
            <p className="text-gray-600 mb-4">{newsletter.description}</p>
            <a
              href={newsletter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300"
            >
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newsletter;
