import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
      <footer className="bg-hero-background text-foreground py-10">
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={siteDetails.siteLogo}
                alt={siteDetails.siteName}
                width={720}
                height={480}
                priority
                className="w-12 h-12 object-contain min-w-fit"
              />
            </Link>
            <p className="mt-3.5 text-foreground-accent">
              {footerDetails.subheading}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-foreground-accent">
              {footerDetails.quickLinks.map((link) => (
                <li key={link.text} className="mb-2">
                  <Link href={link.url} className="hover:text-foreground">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            {footerDetails.email && (
              <a
                href={`mailto:${footerDetails.email}`}
                className="block text-foreground-accent hover:text-foreground"
              >
                Email: {footerDetails.email}
              </a>
            )}

            {footerDetails.telephone && (
              <a
                href={`tel:${footerDetails.telephone}`}
                className="block text-foreground-accent hover:text-foreground"
              >
                Phone: {footerDetails.telephone}
              </a>
            )}

            {footerDetails.socials && (
              <div className="mt-5 flex items-center gap-5 flex-wrap">
                {Object.keys(footerDetails.socials).map((platformName) => {
                  if (platformName && footerDetails.socials[platformName]) {
                    return (
                      <Link
                        href={footerDetails.socials[platformName]}
                        key={platformName}
                        aria-label={platformName}
                      >
                        {getPlatformIconByName(platformName)}
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 md:text-center text-foreground-accent px-6">
          <p>
            Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
            All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Made with &hearts; by{" "}
            <a href="https://ashakpacific.vercel.app/" target="_blank">
              Phunky Geek
            </a>
          </p>
        </div>
      </footer>
    );
};

export default Footer;
