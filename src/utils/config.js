export const homePageConfig = {
  data: [
    {
      componentType: "Header",
      key: "header",
      config: {
        imgSrc: "/assets/images/mainLogo.svg",
        linksList: [
          {
            name: "Study Destinations",
            key: "study_destinations"
          },
          {
            name: "Services",
            key: "services"
          },
          {
            name: "Company",
            key: "company"
          },
          {
            name: "Upcoming Events",
            key: "upcoming_events"
          },
        ],
        ctaText: "Course Finder",
      },
    },
    {
      componentType: "Banner",
      key: "banner",
      config: {
        imgSrc: "/assets/images/banner-bg.png",
        branchText: {
          type: "Home",
          name: "Pune Branch",
        },
        title: "KC Overseas Education Pune",
        subtitle:
          "We value your career aspirations, which is why we map your preferences with the best that our global universities have to offer. Thousands of our students are pursuing their programs and aspirations in eminent universities globally and we welcome you to pursue yours!",
        ctaText: "Enquire Now",
        cta2Text: "Branch Address"
      },
    },
    {
      componentType: "Services",
      key: "services",
      config: {
        title: "Services we provide",
        cardsList: [
          {
            title: "Test Preparing & Coaching",
            imgSrc: "/assets/images/service1.svg",
          },
          {
            title: "Application Assistance",
            imgSrc: "/assets/images/service2.svg"
          },
          {
            title: "Course, Country & University Selection",
            imgSrc: "/assets/images/service3.svg"
          },
          {
            title: "Scholarships",
            imgSrc: "/assets/images/service4.svg"
          }
        ],
        ctaText: "Enquire Now",
        ambitionsConfig: {
          title: "Realize your global ambitions with us",
          subtitle: "With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university even before you do!",
          imgSrc: "/assets/images/ambition.png",
          ambitionsListImg: "/assets/images/tickmark.png",
          ambitionsList: [
            "Virtual & In Person Coaching and Counselling",
            "Comprehensive Assistance for Applications, Admissions & Visas",
            "High Value Scholarships and Study Loans"
          ]
        }
      },
    },
    {
      componentType: "StepsTodo",
      key: "stepsTodo",
      config: {
        title: "7 Easy Steps to Land in your Dream University",
        // bgColor: "linear-gradient(to right, rgba(219, 217, 255, 0.00) 0%, #DBD9FF 10%, rgba(219, 217, 255, 0.00) 120%)",
        bgColor: "#DBD9FF",
        maxWidth: "1400px",
        cardsList: [
          {
            imgSrc: "/assets/images/counselling.png",
            title: "Counselling",
            subtitle: "Plan your Academic and Career Goals"
          },
          {
            imgSrc: "/assets/images/test-preparation.png",
            title: "Test Preparation",
            subtitle: "Appear for Standardized Tests"
          },
          {
            imgSrc: "/assets/images/counselling.png",
            title: "Counselling",
            subtitle: "Plan your Academic and Career Goals"
          },
          {
            imgSrc: "/assets/images/test-preparation.png",
            title: "Test Preparation",
            subtitle: "Appear for Standardized Tests"
          }
        ]
      },
    },
    {
      componentType: "Webinars",
      key: "webinars",
      config: {
        title: "Webinars & Events",
        bgColor: "#FFF",
        maxWidth: "1200px",
        cardsList: [
          {
            type: "main",
            imgSrc: "/assets/images/webinar1.png",
            header: "Mar 19 · 05:00 PM to 07:30 PM",
            title: "USA Vertual Addmission Day",
            subtitle: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ctaText: "Register Now"
          },
          {
            imgSrc: "/assets/images/webinar2.png",
            header: "May 18 - May 21  · 04:30 PM to 06:30 PM",
            title: "New Zealand Virtual Admissions Week",
            subtitle: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
            ctaText: "Register Now"
          },
          {
            imgSrc: "/assets/images/webinar3.png",
            header: "May 24 - May 28  · 04:00 PM to 06:00 PM",
            title: "UK Virtual Admissions Week",
            subtitle: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
            ctaText: "Register Now"
          }
        ],
        ctaText: "See More"
      },
    },
    {
      componentType: "Testimonials",
      key: "testimonials",
      config: {
        title: "Our students love us",
        bgColor: "#FFDCD8",
        maxWidth: "1400px",
        cardsList: [
          {
            imgSrc: "/assets/images/testimonial.png",
            description: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
            title: "Mandar Suryawanshi",
            subtitle: "Northeastern University, USA"
          },
          {
            imgSrc: "/assets/images/testimonial.png",
            description: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
            title: "Aarohi Sighel",
            subtitle: "University of South Australia, Australia"
          },
          {
            imgSrc: "/assets/images/testimonial.png",
            description: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
            title: "Susan Mendonca",
            subtitle: "Conestoga College, Canada"
          },
          {
            imgSrc: "/assets/images/testimonial.png",
            description: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
            title: "Aarohi Sighel",
            subtitle: "University of South Australia, Australia"
          },
          {
            imgSrc: "/assets/images/testimonial.png",
            description: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
            title: "Susan Mendonca",
            subtitle: "Conestoga College, Canada"
          }
        ]
      },
    },
    {
      componentType: "Updates",
      key: "updates",
      config: {
        title: "Latest KC Updates",
        cardsList: [
          {
            type: "main",
            title: "We’re Hiring!",
            subtitle: "KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.",
            ctaText: "Apply now",
            bgImgSrc: "/assets/images/updates1.svg",
            bgColor: "#FDAF4D"
          },
          {
            header: "American International Recruitment Council",
            title: "Certified Agents",
            subtitle: "October 2018 - 2028",
            ctaText: "Apply now",
            imgSrc: "/assets/images/updates2.png",
            img2Src: "/assets/images/updates.svg",
          },
          {
            header: "The British Council",
            title: "Advanced Agent Certificate",
            subtitle: "August 2016 - 2018",
            ctaText: "Apply now",
            imgSrc: "/assets/images/updates3.png",
            img2Src: "/assets/images/updates.svg",
          }
        ],
        ctaText: "More News"
      },
    },
    {
      componentType: "Footer",
      key: "footer",
      config: {
        title: "Stay updated with KC Overseas",
        imgSrc: "/assets/images/footer-bg.png",
        titleColor: "#FFF",
        // bgColor: "#0E1B2C",
        formList: [
          {
            placeholder: "Email ID",
            key: "email_id",
            type: "text",
          },
          {
            placeholder: "I’m Interested in",
            key: "interest",
            type: "select",
            options: [
              {
                value: "emails",
                name: "Receiving emails"
              },
              {
                value: "sms",
                name: "Receiving sms"
              }
            ]
          },
        ],
        ctaText: "Suscribe Now",
        bgImgSrc: "/assets/images/footer-icon.svg"
      },
    }
  ]
}
