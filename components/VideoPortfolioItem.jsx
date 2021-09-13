/* eslint-disable jsx-a11y/media-has-caption */
import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';
// import path from 'path';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function VideoPortfolioItem({ item: { title }, files }) {
  const projects = files.filter((project) => project.title === title);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'gifkographix',
    },
  });

  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 object-cover object-center z-10 rounded-sm border-2 border-eggshell-default overflow-hidden hover:border-green-light">
        {projects.map((project) => (
          <Carousel interval="2500" key={uuidv4()} className="relative h-full">
            {project.filenames.filter((filename) => filename.format === 'webm' || filename.format === 'mp4').map((file) => (
              <Carousel.Item key={uuidv4()} className="flex flex-col object-cover object-center h-full ">
                <AdvancedVideo cldVid={cld.video(file.public_id)} autoPlay loop muted className="flex-grow h-48 object-cover shadow-xl" />
              </Carousel.Item>
            ))}
          </Carousel>
        ))}

      </div>
      <div className="mt-2">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}
