/* eslint-disable jsx-a11y/media-has-caption */
import { v4 as uuidv4 } from 'uuid';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import path from 'path';

export default function DocumentPortfolioItem({ item: { folder, title }, files }) {
  const projects = files.filter((project) => project.title === title);

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber] = useState(1);

  // function onDocumentLoadSuccess({ currentNumPages }) {
  //   setNumPages(currentNumPages);
  // }

  return (
    <div className="w-48 h-56 inline-block">
      <div className="flex flex-col relative h-48 w-48 object-cover object-center z-10 rounded-sm border-2 border-eggshell-default overflow-hidden hover:border-green-light">
        {projects.map((project) => (
          <Carousel interval="2500" key={uuidv4()} className="relative object-center">
            {project.filenames.filter((filename) => path.extname(filename) === '.webp').map((file) => (
              <Carousel.Item key={uuidv4()} className="overflow-hidden w-full shadow-xl">
                <Image
                  src={`/static${folder}${file}`}
                  width="190"
                  height="190"
                  alt={file}
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
