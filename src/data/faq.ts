import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We use enterprise-grade encryption to protect your data and never store sensitive information. Our biometric login and ride monitoring ensure both privacy and safety.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Definitely! Your HASE account syncs across all your devices — smartphone, tablet, or web — for a seamless experience on the go.',
    },
    {
        question: 'Can I book rides and rentals anytime?',
        answer: `Yes! ${siteDetails.siteName} offers 24/7 ride-hailing, car rentals, and delivery services. Just open the app, choose your service, and you’re good to go.`,
    },
    {
        question: 'Do I need any special license or requirements to rent a car?',
        answer: 'You only need a valid driver’s license and a verified HASE profile. We make the process simple, fast, and transparent.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our friendly support team is available around the clock via chat or email. You’ll also find helpful in-app guides and tips to get you started quickly.',
    }
];
