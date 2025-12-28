export interface Project {
    id: number;
    title: string;
    tools: string[];
    shortDesc: string;
    problem: string;
    approach: string;
    insight: string;
    outcome: string;
    liveDemo?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Titanic Survival Prediction",
        tools: ["Python", "Scikit-learn", "Pandas"],
        shortDesc: "Machine Learning Classification",
        problem: "Binary classification problem to predict passenger survival using the historical Titanic dataset. The goal was to understand which factors influenced survival rates and build a model that could accurately predict outcomes.",
        approach: "Used Logistic Regression algorithm after conducting comprehensive data exploration and feature engineering. Applied statistical analysis to identify important predictors including gender, passenger class, and fare. Performed data cleaning and feature selection to optimize model performance.",
        insight: "Analysis revealed that gender, passenger class, and fare were the three most significant predictors of survival. First-class passengers and females had substantially higher survival rates. Statistical validation confirmed these patterns with strong significance.",
        outcome: "Achieved 81% accuracy using confusion matrix analysis and classification report. Interpreted results in business/safety context and proposed actionable insights related to safety protocols and emergency procedures for maritime operations.",
        github: "https://github.com/nikitasharma-data27/Titanic-Survival-Analysis"
    },
    {
        id: 2,
        title: "E-commerce Customer Behavior Analysis",
        tools: ["Python", "SQL", "Power BI", "Pandas"],
        shortDesc: "Business Intelligence Analysis",
        problem: "Analyze customer behavior patterns in a Brazilian e-commerce dataset to answer business-driven questions. The challenge was to process multiple data sources and extract actionable insights for stakeholder decision-making.",
        approach: "Answered 15+ business questions using complex SQL queries and Python for data processing. Worked with multiple interconnected data sources, performing customer retention analysis and Year-over-Year (YoY) growth analysis. Applied statistical methods to understand behavioral patterns.",
        insight: "Identified key customer segments with distinct purchasing behaviors. Discovered seasonal trends affecting sales, retention patterns varying by product category, and significant YoY growth opportunities. Statistical analysis revealed correlations between customer demographics and purchasing patterns.",
        outcome: "Created interactive dashboards and detailed visualizations to communicate insights to stakeholders. Delivered actionable recommendations that improved business understanding of customer lifecycle. Iteratively refined analysis based on stakeholder feedback.",
        github: "https://github.com/nikitasharma-data27/ecommerce-sales-analysis",
        // liveDemo: "#"
    },
    {
        id: 3,
        title: "Vendor Performance Analytics",
        tools: ["Python", "Statistics", "NumPy"],
        shortDesc: "Statistical Hypothesis Testing",
        problem: "Analyze and compare performance between different vendor segments to determine if observed differences were statistically significant. Required rigorous statistical validation to support business decisions.",
        approach: "Designed statistical experiments and conducted hypothesis testing using t-tests, achieving significance level p < 0.001. Applied correlation analysis and regression techniques to identify performance drivers. Developed automated reporting system to streamline data processing.",
        insight: "Statistical analysis revealed significant performance differences between vendor segments, with some vendors consistently outperforming others beyond random variation. Correlation analysis identified key factors driving vendor success.",
        outcome: "Improved data processing efficiency by 40% through automation. Collaborated with stakeholders to define problems clearly and presented findings with business implications. Results directly influenced vendor selection and contract negotiations.",
        github: "https://github.com/nikitasharma-data27/Vendor-Analysis"
    },
    {
        id: 4,
        title: "Patient Wait List Analysis",
        tools: ["Power BI", "Power Query", "DAX"],
        shortDesc: "Healthcare Analytics Dashboard",
        problem: "Hospital administrators needed a way to monitor and analyze patient wait list trends across different case types to enable data-driven decision making for resource planning and performance evaluations.",
        approach: "Combined Inpatient and Outpatient datasets into a unified data model using Power Query. Used DAX measures to calculate both Average and Median wait lists dynamically. Created interactive dashboard with slicers and visuals including Line Charts, Clustered Columns, and Matrix Views.",
        insight: "Inpatient wait lists are generally longer than outpatient and day cases. Median wait times provide a better picture by reducing the effect of outliers. Identified specialties with consistently high wait lists for improved staffing decisions.",
        outcome: "Delivered interactive Power BI dashboard enabling users to explore trends by specialty, case type, and time periods. Provided actionable insights for hospital resource planning and improved decision-making capabilities.",
        github: "https://github.com/nikitasharma-data27/Patient-Waiting-List--Power-BI"
    },
    {
        id: 5,
        title: "Hotel Booking Cancellation Analysis",
        tools: ["Excel", "Pivot Tables", "Data Visualization"],
        shortDesc: "Hospitality Industry Analytics",
        problem: "Analyze 30,000+ hotel reservation records to extract insights from cancellation patterns by guest type, hotel type, season, and room preference to support business strategy and reduce cancellation rates.",
        approach: "Used Excel analytics with pivot tables and interactive charts to analyze cancellation patterns. Compared cancellations for City hotels vs Resort hotels. Analyzed trends by month to detect seasonality. Built interactive dashboards with slicers for dynamic insights.",
        insight: "Couples had the highest cancellation counts. May showed the highest cancellation rates, while January had the lowest. Desired room requests had significantly more cancellations. Strong seasonal patterns identified.",
        outcome: "Provided stakeholders with insights to refine pricing strategies and marketing during peak cancellation months. Suggested improvements in booking accuracy and customer retention policies based on data-driven findings.",
        github: "https://github.com/nikitasharma-data27/hotel-booking-cancellation"
    },
    {
        id: 6,
        title: "E-commerce Retail Analysis",
        tools: ["SQL", "Python", "Pandas", "Matplotlib"],
        shortDesc: "Brazilian E-commerce Dataset Analysis",
        problem: "Analyze Brazilian e-commerce dataset to answer 15 structured business questions covering customer segmentation, monthly sales trends, revenue by category, and retention analytics to uncover key customer and sales insights.",
        approach: "Performed SQL queries to extract basic, intermediate, and advanced business metrics. Used Python (Pandas, Matplotlib, Seaborn) to visualize trends and patterns. Answered strategic questions about best performing categories, repeat purchase rates, and sales growth.",
        insight: "BED TABLE BATH was the top revenue category. Strong correlation found between price and purchase frequency. Very high percentage of orders were paid in installments. Low repeat purchase rates indicate need for loyalty programs.",
        outcome: "Delivered comprehensive analysis answering 15+ business questions. Identified opportunities for customer retention improvement and category optimization. Provided actionable insights for marketing and inventory strategies.",
        github: "https://github.com/nikitasharma-data27/sql-python-retail-analysis"
    }
];
