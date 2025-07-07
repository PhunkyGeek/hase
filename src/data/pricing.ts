import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 29,
        features: [
            'Negotiate rides request',
            'Access delivery services',
            '24/7 ride availability',
            'Basic ride history and dashboard access',
            'Email-only support',
        ],
    },
    {
        name: 'Pro',
        price: 99,
        features: [
            'Access car rentals services',
            'Advanced ride tracking & earnings dashboard',
            'Priority email and phone support',
            'Trip insights and performance analytics',
            'Customizable ride preferences and filters',
            'In-app wallet monthly rewards',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Full access to all HASE mobility solutions',
            'Unlimited vehicle and driver management',
            'Custom dashboards and logistics automation',
            '24/7 dedicated account manager',
            'Tailored enterprise mobility solutions',
            'On-site onboarding and hands-on training',
            'API access for custom integrations',
            'Dedicated SLA and uptime guarantees',
        ],
    },
]
