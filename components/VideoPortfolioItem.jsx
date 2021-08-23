/* eslint-disable jsx-a11y/media-has-caption */
// import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';

export default function VideoPortfolioItem({ item: { folder, title }, files }) {
  const projects = files.filter((project) => project.title === title);
  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 object-cover object-center z-10 rounded-sm border-2 border-eggshell-default overflow-hidden">
        {projects.map((project) => (
          // change photos to video objects for the videos to display
          <Carousel interval="2500" key={uuidv4()} className="relative h-full">
            {project.filenames.map((file) => (
              <Carousel.Item key={uuidv4()} className="flex flex-col object-cover object-center h-full ">
                <video autoPlay loop muted className="flex-grow h-48 object-cover ">
                  <source src={folder + file} />
                </video>
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
