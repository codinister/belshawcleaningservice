import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type DT = {
  height: string;
  width: string;
};

const Slider = ({  width, height }: DT) => {
  const images = [
    {
      url: '/header.jpg',
    },
    {
      url: '/header2.jpg',
    },
    {
      url: '/header3.jpg',
    },
  ];

  return (
    <>
      <Fade
        autoplay={true}
        // onChange={function noRefCheck(){}}
        // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
          <div
            className="each-slide-effect"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage?.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              height,
              width,
            }}
          ></div>
        ))}
      </Fade>
    </>
  );
};

export default Slider;
