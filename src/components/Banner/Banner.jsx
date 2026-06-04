import { TextEffectOne } from "react-text-animate";
import TbBackground from "../../assets/bannerImage.png";

const Banner = () => {
  return (
    <div className="relative h-[500px] rounded-2xl bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${TbBackground})` }}>
      <div className="absolute inset-0 rounded-2xl bg-black/70"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-xl md:text-4xl font-bold leading-tight">
          <span className="text-secondary">
            <TextEffectOne text="Win Big " />
          </span>Unleash Your Creativity!
        </h1>
        <p className="mt-3 text-xl font-semibold animate-pulse">Create. Compete. Win.</p>
        <p className="hidden lg:flex mt-4 text-sm md:text-base text-white/90 max-w-2xl mx-auto font-serif">Join thousands of creators in the world's most prestigious management and design contests. Push your boundaries, showcase your talent, and claim your victory.</p>
        <div className="join mt-6 w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Image Design, Article Writing, Business Ideas..."
            className="input text-base-content font-semibold input-bordered join-item w-full focus:border-0"
          />
          <button className="btn btn-secondary join-item">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;