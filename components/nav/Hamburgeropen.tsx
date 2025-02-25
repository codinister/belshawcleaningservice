import Image from 'next/image';

type obj = {
  opennav: (e: React.MouseEvent<HTMLDivElement>) => void;
  name: string;
};

const Hamburgeropen = ({ opennav, name }: obj) => {
  return (
    <div className="hamburgeropen" style={{ display: 'none' }}>
      <div className="hamburger-inner">
        <div className="btntimes">
          <div className="strips" onClick={opennav}>
            <div>
              <Image
                src="/hamburger-icon.png"
                width="50"
                height="50"
                alt=""
      
              />
            </div>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Hamburgeropen;
