import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smarter Urban Mobility",
        description: "Say goodbye to transport hassles. HASE offers intelligent ride options, rentals, and deliveries that adapt to your lifestyle.",
        bullets: [
            {
                title: "Optimized Rides",
                description: "AI matches you with nearby drivers for faster, safer trips.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Flexible Scheduling",
                description: "Book rides or rentals on your terms - instantly or in advance.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Smart Route Planning",
                description: "Reduce delays with real-time traffic insights and route suggestions.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.png"
    },
    {
        title: "Convenient Access",
        description: "Whether you're commuting, traveling, or delivering, HASE makes it easy to get the right trasportation when you need it.",
        bullets: [
            {
                title: "Affordable Rentals",
                description: "Access a wide range of cars, SUVs and vans - pay only for what you use.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Verified Fleet",
                description: "Our vehicles and drivers meet top standards for safety and performance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Live Tracking",
                description: "Monitor your trip or delivery in real-time, from pickup to drop-off.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.png"
    },
    {
        title: "Trusted & Secure Experience",
        description: "Your safety and privacy come first. HASE is built with enterprise-grade protection to ensure peace of mind.",
        bullets: [
            {
                title: "Secure Payments",
                description: "All transactions are encrypted and securely processed.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Login",
                description: "Sign in with fingerprint or facial recognition for added safety.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Safety Checks",
                description: "Our system constantly monitors rides for unusual activity or issues.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.png"
    },
]
