import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
// import Image from 'next/image';

export default function ImagePortfolioItem({ item: { title }, files }) {
  const projects = files.filter((project) => project.title === title);
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'gifkographix',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 object-cover z-10 rounded-sm border-2 overflow-hidden border-eggshell-default hover:border-green-light">
        {projects.map((project) => (
          <Carousel interval="2500" key={uuidv4()} className="relative ">
            {project.filenames.filter((filename) => filename.format === 'webp').map((file) => (
              <Carousel.Item key={uuidv4()} className="shadow-xl">
                <AdvancedImage
                  className="object-cover object-center h-full"
                  cldImg={cld.image(file.public_id).resize(thumbnail().width(190).height(190))}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ))}

      </div>
      <div className="mt-2 ">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}
