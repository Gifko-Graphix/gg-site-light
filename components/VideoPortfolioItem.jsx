/* eslint-disable jsx-a11y/media-has-caption */
import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import Image from 'next/image';

export default function VideoPortfolioItem({ item: { folder, title }, files }) {
  const projects = files.filter((project) => project.title === title);
  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 object-cover object-center z-10 rounded-sm border-2 border-eggshell-default overflow-hidden">
        {projects.map((project) => (
          <Carousel interval="2500" key={uuidv4()} className="relative h-full">
            {project.filenames.filter((filename) => path.extname(filename) === '.png').map((file) => (
              <Carousel.Item key={uuidv4()} className="overflow-hidden w-full shadow-xl">
                <Image
                  src={`/static${folder}${file}`}
                  width="190"
                  height="190"
                  alt={file}
                  key={uuidv4()}
                  objectFit="cover"
                  priority="true"
                />
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
