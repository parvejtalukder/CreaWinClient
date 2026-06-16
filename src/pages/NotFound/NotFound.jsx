import { Link } from "react-router";
import TbBackground from "../../assets/bannerImage.png";

const NotFound = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${TbBackground})` }}>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 text-center px-6 max-w-xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-secondary">404</h1>
        <h2 className="text-xl md:text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="mt-3 text-white/80 text-sm md:text-base font-bold">The page you are looking for doesn’t exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="btn btn-secondary">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;