import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 mt-3'>
        <img
          src={logo}
          alt='rangkumin_logo'
          className='w-32 object-contain'
        />

        <button
          type='button'
          onClick={() => window.open("https://github.com/jabrielbams")}
          className='black_btn'>
          Github Repository ↗
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Enhance your reading experience with 'RangkuminAi', an open-source tool
        that effortlessly condenses lengthy articles into precise and
        easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
