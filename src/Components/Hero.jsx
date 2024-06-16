import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for <br />
          developers
        </span>
      </h1>
      <p className=" mt-10 text-center text-lg max-w-4xl text-neutral-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae
        adipisci ut porro perspiciatis quos repudiandae architecto ex
        exercitationem, explicabo iusto nisi nesciun.
      </p>

      <div className="flex justify-center  my-10">
        
        <a
          href="#"
          className=" bg-gradient-to-r from-orange-500 to-yellow-400  px-3 py-2 border rounded-md"
        >
          Start free
        </a>
        <a href="#" className="px-3 py-2 border rounded-md mx-5">
          Documentation
        </a>
      </div>

      <div className="flex justify-center mt-10" >
        <video autoPlay loop muted className=" rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-2 mx-3 max-h-80" >
            <source src={video1} type="video/mp4"/> 
            your browser doesnt support
        </video>
        <video autoPlay loop muted className="  rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-2 mx-3  max-h-80" >
            <source src={video2} type="video/mp4"/> 
            your browser doesnt support
        </video>

      </div>
    </div>
  );
};

export default Hero;
