import React from 'react';

/**
 * ProductHeroBanner
 * Accepts title, subtitle, description, and productImage as props.
 */
const ProductHeroBanner = ({
  title,
  subtitle,
  description,
  productImage,
}) => {
  return (
    <section className="w-full relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-black text-white flex flex-col items-center justify-center overflow-hidden">

      {/* Header Text Block */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          {title}
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-slate-200 mb-3 max-w-2xl mx-auto leading-snug">
          {subtitle}
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hero Image Container (Lifted higher) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center -mt- sm:-mt-10">
        <img
          src={productImage}
          alt={title}
          className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(194,122,89,0.2)]"
        />
      </div>

    </section>
  );
};

export default ProductHeroBanner;