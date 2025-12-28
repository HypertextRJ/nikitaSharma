export interface SkillCategory {
    category: string;
    skills: Array<{
        name: string;
        details: string;
    }>;
}

export const skillsData: SkillCategory[] = [
    {
        category: "Programming & Languages",
        skills: [
            { name: "Python", details: "Pandas, NumPy, Scikit-learn" },
            { name: "SQL", details: "Complex queries, data extraction" },
            { name: "R", details: "Basic - Statistical computing" }
        ]
    },
    {
        category: "Data Visualization",
        skills: [
            { name: "Power BI", details: "Interactive dashboards" },
            { name: "Tableau", details: "Business storytelling" },
            { name: "Matplotlib & Seaborn", details: "Statistical plots" },
            { name: "Plotly", details: "Interactive visualizations" }
        ]
    },
    {
        category: "Machine Learning & Statistics",
        skills: [
            { name: "Predictive Modeling", details: "Classification algorithms" },
            { name: "Regression Analysis", details: "Linear, Logistic" },
            { name: "Hypothesis Testing", details: "T-tests, Statistical inference" },
            { name: "Feature Engineering", details: "Model optimization" },
            { name: "Statistical Analysis", details: "Probability, Correlation" }
        ]
    },
    {
        category: "Data Analysis & Methods",
        skills: [
            { name: "Data Exploration", details: "EDA techniques" },
            { name: "Algorithmic Problem Solving", details: "Optimization" },
            { name: "Multiple Data Sources", details: "Integration" },
            { name: "Operations Research", details: "Mathematical methods" },
            { name: "Econometrics", details: "Economic modeling" }
        ]
    }
];
