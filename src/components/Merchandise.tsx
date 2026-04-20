import tShirtImg from '../assets/img/merchandise/sltccstshirt.png';

export default function Merchandise() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  return (
    <section id="merchandise" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 transition-all duration-300">

          {/* LEFT SIDE - IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-goldcs/10 blur-[100px] rounded-full scale-110"></div>
            <img
              src={tShirtImg}
              alt="IEEE CS T-Shirt"
              className="relative z-10 w-full max-w-2xl scale-110 -translate-x-4 md:-translate-x-12 object-contain drop-shadow-2xl hover:scale-[1.15] md:hover:-translate-x-12 transition-transform duration-500"
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mt-0">
              Become <span className="text-goldcs">UNIQUE</span>
            </h2>

            <p className="text-xl font-normal text-gray-200">
              Material: <span className="text-goldcslight font-normal">220gsm crocodile</span>
            </p>

            <p className="text-lg text-gray-400 text-justify leading-relaxed">
              Step into style with the all-new IEEE Computer Society official T-shirt. It’s designed with the latest trends in mind, giving you a modern and fresh look. Wear it with confidence and show your passion in style.
            </p>

            {/* SIZES */}
            <div className="flex flex-wrap gap-4 pt-2">
              {sizes.map((size) => (
                <div key={size} className="w-14 h-14 rounded-full border border-goldcs/50 flex items-center justify-center text-sm font-bold text-gray-300 hover:text-black hover:bg-goldcs transition-all cursor-pointer shadow-[0_0_15px_rgba(250,164,26,0.1)] hover:shadow-[0_0_20px_rgba(250,164,26,0.4)]">
                  {size}
                </div>
              ))}
            </div>

            {/* PRICE & BUTTON */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 mt-4 border-t border-white/10 w-full">
              <div className="text-4xl md:text-5xl font-bold text-goldcs">
                LKR. 1800/=
              </div>

              <a
                href="https://forms.gle/bgACBu59C7cp72Y58"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 text-lg bg-gradient-to-r from-goldcs to-goldcsdark text-white font-bold rounded-xl shadow-lg hover:shadow-goldcs/20 transition-all duration-300 hover:scale-105 text-center block sm:inline-block"
              >
                GRAB NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
