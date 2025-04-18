import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
export default function Home() {
  const [txt, setTxt] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Fullstack Engineer",
    "Informatics Student",
    "Data Analyst",
    "Tech Enthusiast"
  ];
  const period = 2000;
  const typewriterRef = useRef(null);

  useEffect(() => {
    let ticker;
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];
      const updatedTxt = isDeleting
        ? fullTxt.substring(0, txt.length - 1)
        : fullTxt.substring(0, txt.length + 1);

      setTxt(updatedTxt);

      let delta = 200 - Math.random() * 100;
      if (isDeleting) delta /= 2;

      if (!isDeleting && updatedTxt === fullTxt) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && updatedTxt === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      ticker = setTimeout(() => tick(), delta);
    };

    ticker = setTimeout(() => tick(), 400);
    return () => clearTimeout(ticker);
  }, [txt, isDeleting, loopNum]);

  return (
    <main className="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      <div className="space-y-2 text-center md:text-left px-10">
        <p className="text-amber-200">Hello World, I'm</p>
        <h1 className="text-4xl font-bold md:text-5xl text-white fadein-up">Agustín Hernández</h1>
        <div className="py-2">
          <h1
            className="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
            ref={typewriterRef}
          >
            <span className="wrap">{txt}</span>
          </h1>
        </div>
        <p className="text-white pr-4 fade-in-from-left">
          Welcome to My personal website. <span className="wave">👋🏼</span>
        </p>
      </div>
      <div className="flex justify-center md:justify-start fadein-right">
        <img
          alt="avatar"
          width={100}
          height={100}
          decoding="async"
          className="w-6/12 md:h-auto rounded-full border-4 border-amber-100 pict"
          src="/assets/images/ProfilePicture.jpg"
        />
      </div>
    </main>
  );
}

