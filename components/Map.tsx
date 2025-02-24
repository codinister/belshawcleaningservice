type Iframe = {
  src: string;
  width: string;
  height: string;
  allowfullscreen: string;
  loading: string;
  referrerpolicy: string;
};

const Map = ({ src, width, height }: Iframe) => {
  return (
    <>
      <iframe src={src} width={width} height={height}></iframe>

      <style>
        {`
                iframe{
                    width: 100vw;
                    border: 0;
                    height: 40rem;
                }
                `}
      </style>
    </>
  );
};

export default Map;
