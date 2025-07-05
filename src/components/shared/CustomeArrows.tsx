import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ArrowProps {
  onClick?: () => void;
}

export const CustomPrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

export const CustomNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg  flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      <FaArrowRight size={20} />
    </button>
  );
};