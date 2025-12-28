export interface Certificate {
    id: number;
    name: string;
    organization: string;
    date: string;
    imageUrl?: string;
    verifyLink?: string;
}

export const certificates: Certificate[] = [
    // {
    //     id: 1,
    //     name: "Google Data Analytics Professional Certificate",
    //     organization: "Google / Coursera",
    //     date: "Expected 2025",
    //     imageUrl: "/certificates/google-data-analytics.jpg",
    //     verifyLink: "#"
    // },
    {
        id: 1,
        name: "Ask Questions to Make Data-Driven Decisions",
        organization: "Google / Coursera",
        date: "2025",
        imageUrl: "/certificates/googleAsk.png",
        verifyLink: "#"
    },
    {
        id: 2,
        name: "Foundations: Data, Data, Everywhere",
        organization: "Google / Coursera",
        date: "2025",
        imageUrl: "/certificates/googleData.png",
        verifyLink: "#"
    },
    {
        id: 3,
        name: "Deloitte Data Analytics Virtual Experience",
        organization: "Deloitte / Forage",
        date: "2025",
        imageUrl: "/certificates/Deloitte.png",
        verifyLink: "#"
    },
    {
        id: 4,
        name: "TATA Business Insights & Visualization",
        organization: "TATA Group / Forage",
        date: "2024",
        imageUrl: "/certificates/TATA.png",
        verifyLink: "#"
    }
];
