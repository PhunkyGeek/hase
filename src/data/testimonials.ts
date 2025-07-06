import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Tunde Adebayo',
        role: 'Fleet Owner, Lagos',
        message: `${siteDetails.siteName} has made managing my cars and drivers effortless. Ride requests come in fast, and payouts are always on time. It's the smartest move I’ve made for my business.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Chioma Nwosu',
        role: 'CTO at UrbanGo Logistics',
        message: `From secure onboarding to real-time tracking, ${siteDetails.siteName} delivers a seamless experience. It’s rare to find a mobility platform this robust yet easy to use.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Michael Osei',
        role: 'Professional Driver',
        message: `With ${siteDetails.siteName}, I get more ride requests and keep more of my earnings. The app is smooth, the routes are accurate, and support is always available when needed.`,
        avatar: '/images/testimonial-3.webp',
    },
];
