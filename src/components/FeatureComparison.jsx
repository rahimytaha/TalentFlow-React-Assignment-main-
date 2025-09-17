import React from "react";
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
    const features = [
        {
            name: "Active job postings",
            starter: "5",
            professional: "25",
            enterprise: "Unlimited",
        },
        {
            name: "Candidates per month",
            starter: "100",
            professional: "500",
            enterprise: "Unlimited",
        },
        {
            name: "Custom assessments",
            starter: <X className="text-gray-400 w-5 h-5 mx-auto" />,
            professional: "10",
            enterprise: "Unlimited",
        },
        {
            name: "Advanced analytics",
            starter: <X className="text-gray-400 w-5 h-5 mx-auto" />,
            professional: <Check className="text-green-500 w-5 h-5 mx-auto" />,
            enterprise: <Check className="text-green-500 w-5 h-5 mx-auto" />,
        },
        {
            name: "API access",
            starter: <X className="text-gray-400 w-5 h-5 mx-auto" />,
            professional: <X className="text-gray-400 w-5 h-5 mx-auto" />,
            enterprise: <Check className="text-green-500 w-5 h-5 mx-auto" />,
        },
    ];

    return (
        <div className="w-full bg-white py-12 px-6 flex justify-center">
            <div className="max-w-7xl w-full">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                    Compare all features
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="">
                                <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b">
                                    Features
                                </th>
                                <th className="text-center py-4 px-6 font-semibold text-gray-700 border-b">
                                    Starter
                                </th>
                                <th className="text-center py-4 px-6 font-semibold text-gray-700 border-b">
                                    Professional
                                </th>
                                <th className="text-center py-4 px-6 font-semibold text-gray-700 border-b">
                                    Enterprise
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                                    <td className="text-center py-4 px-6">{feature.starter}</td>
                                    <td className="text-center py-4 px-6">{feature.professional}</td>
                                    <td className="text-center py-4 px-6">{feature.enterprise}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeatureComparison;
