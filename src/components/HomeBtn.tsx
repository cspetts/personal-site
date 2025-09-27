import Image from 'next/image';

import '../styles/HomeBtn.css';

type HomeBtnProps = {
  label: string;
  logo: string;
  size: number;
  visible: true;
};

export type { HomeBtnProps };

export default function HomeBtn({ label, logo, size, visible }: HomeBtnProps) {
  return visible ? (
    <button className="HomeBtn float border-white items-center bg-zinc-300 border-2 w-full md:w-100" onClick={() => console.log("test")}>
      {/* <Image src={logo} className="HomeBtn-logo" alt={label} width={size} height={size} /> */}
      <span className="HomeBtn-text">{label}</span>
    </button>
  ) : null;
}
