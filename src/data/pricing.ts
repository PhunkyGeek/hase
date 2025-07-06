import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 29,
        features: [
            'Access to ride-hailing services',
            'Up to 5 vehicles listed',
            'Basic fleet dashboard',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: 99,
        features: [
            'Car rentals and delivery integration',
            'Manage up to 20 vehicles or drivers',
            'Advanced fleet management tools',
            'Priority email & phone support',
            'Trip and earning analytics',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'All-in-one HASE mobility access',
            'Unlimited drivers and vehicles',
            'Custom dashboards and logistics tools',
            '24/7 dedicated support',
            'Tailored partnership solutions',
            'On-site onboarding & training',
        ],
    },
]
