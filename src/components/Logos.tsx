import React from "react";
import Image from "next/image";

const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5 bg-background">
      <p className="text-lg font-medium text-center">
        Powered by <span className="text-secondary">20+</span> partners worldwide
      </p>
      <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-60 logos-container">
        {/* Google */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          width={120}
          height={40}
          className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
        />

        {/* Paystack */}
        <Image
          src="/images/paystack.png"
          alt="Paystack Logo"
          width={120}
          height={32}
          className="h-8 w-auto grayscale hover:grayscale-0 transition duration-300"
        />

        {/* Flutter */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
          alt="Flutter Logo"
          width={120}
          height={40}
          className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
        />

        {/* TotalEnergies */}
        <Image
          src="/images/total.png"
          alt="TotalEnergies Logo"
          width={120}
          height={40}
          className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Logos;
