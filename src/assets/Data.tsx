import React from "react";

export interface LandingPagesI {
  id: number;
  image: string;
  title: string;
}

export const LandingPages: LandingPagesI[] = [
  {
    id: 1,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/app-showcase.jpg",
    title: "Mobile App Showcase",
  },
  {
    id: 2,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v1.jpg",
    title: "SaaS v.1",
  },
  {
    id: 3,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v2.jpg",
    title: "SaaS v.2",
  },
  {
    id: 4,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/financial.jpg",
    title: "Financial Consulting",
  },
  {
    id: 5,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/medical.jpg",
    title: "Medical",
  },
  {
    id: 6,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/digital-agency.jpg",
    title: "Digital Agency",
  },
  {
    id: 7,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/conference.jpg",
    title: "Conference",
  },
  {
    id: 8,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/software-company.jpg",
    title: "IT (Software) Company",
  },
  {
    id: 9,
    image:
      "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/blog-homepage.jpg",
    title: "Blog Homepage",
  },
];

export interface MoreSiliconFeaturesI{
    id:number,
    icon:string,
    title:string,
    discription:string
}
export const MoreSiliconFeatures:MoreSiliconFeaturesI[] = [
  {
    id: 1,
    icon: "https://img.icons8.com/color/512/bootstrap.png",
    title: "Built with Bootstrap 5",
    discription:
      "Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/nolan/512/google-docs.png",
    title: "Detailed Documentation",
    discription: "Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/iphone-x.png",
    title: "Mobile Freindly Interface",
    discription: "It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/nui2.png",
    title: "Touch-Enabled Sliders",
    discription: "In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/css-filetype.png",
    title: "W3C Valid HTML Code",
    discription: "All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/code-file.png",
    title: "Kick-Start Your Development",
    discription: "Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.",
  },
  
  {
    id: 7,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/schoology.png",
    title: "Easy to Customize with Sass",
    discription: "Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/javascript.png",
    title: "Future Proof Java-Script",
    discription: "Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.",
  },
];
