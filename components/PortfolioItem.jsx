import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function PortfolioItem({ item: { folder, title }, files }) {
  const projects = files.filter((project) => project.title === title);
  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 rounded-lg object-cover object-center border-2 border-eggshell-default">
        {projects.map((project) => (
          <Carousel interval="2500" className="relative" style={{ height: '188.5', width: '188.5' }}>
            {project.filenames.map((file, index) => (
              <Carousel.Item className="object-cover object-center">
                <Image
                  src={folder + file}
                  width="188.5"
                  height="188.5"
                  alt={file}
                  key={index}
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
