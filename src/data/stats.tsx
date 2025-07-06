import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Rides, rentals, and deliveries completed securely every month across cities."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Average user rating across app stores for safety, speed, and reliability."
    },
    {
        title: "15+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Cities served and expanding, bringing smart mobility closer to everyone."
    }
];
