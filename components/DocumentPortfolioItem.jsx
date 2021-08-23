/* eslint-disable jsx-a11y/media-has-caption */
// import Image from 'next/image';
// import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function DocumentPortfolioItem({ item: { folder, title }, files }) {
  const projects = files.filter((project) => project.title === title);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ currentNumPages }) {
    setNumPages(currentNumPages);
  }

  return (
    <div className="w-48 h-56 inline-block">
      <div className="flex flex-col relative h-48 w-48 object-cover object-center z-10 rounded-sm border-2 border-eggshell-default overflow-hidden">
        {projects.map((project) => (
          // change photos to video objects for the videos to display
          project.filenames.map((file) => (
            <div>
              <Document
                key={uuidv4()}
                file={{ url: folder + file }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page key={uuidv4()} pageNumber={pageNumber} />
              </Document>
              <p key={uuidv4()}>
                Page
                {' '}
                {pageNumber}
                {' '}
                of
                {' '}
                {numPages}
              </p>
            </div>
          ))
        ))}

      </div>
      <div className="mt-2">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}
//  need to figure a way to get access to the item trying to render this component,
//  so that the fn below can fetch us the images for the carrousel in the component above

// export async function getServerSideProps() {
//   const { props: { item: { folder } } } = this;
//   // await dbConnect();

//   // const result = await Item.find({ folder });
//   // const item = result[0].toObject();
//   // item._id = item._id.toString();

//   console.log(files);

//   return { props: { files } };
// }
