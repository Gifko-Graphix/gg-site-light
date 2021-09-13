import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

export default function ProfileColumn({
  name, position, img, expertise,
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'gifkographix',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  return (
    <div className="col-span-1 flex flex-col items-center justify-top mt-4 w-full px-8">
      <div id="image" className="relative object-cover object-center rounded-full h-36 lg:h-48 w-36 lg:w-48 overflow-hidden">
        <AdvancedImage className="" cldImg={cld.image(`websiteFiles/images/profiles/${img}`)} />
      </div>
      <div id="info" className="flex flex-col space-y-0.5 md:space-y-2 mt-2">
        <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
        <h2 className="text-base md:text-lg italic">{position}</h2>
        <p className="text-xs md:text-sm font-light">
          Expertise:
          {' '}
          {expertise}
        </p>
      </div>
    </div>
  );
}
