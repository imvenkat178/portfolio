const portfolioData = {
    profile: {
      name: "Venkata Reddy Bhimireddy",
      title: "SOFTWARE ENGINEER / FULL STACK DEVELOPER ",
      email: "bhimireddyvenkatreddy2@gmail.com",
      phone: "(317) 419-8533",
      github: "GitHub",
      linkedin: "LinkedIn",
      bio: "Experienced software engineer specializing in Java and Spring Boot with a passion for building scalable web applications and distributed systems."
    },
    education: [
        {
          id: 1,
          university: "Purdue University, Indianapolis",
          degree: "Master of Science",
          major: "Computer and Information Science",
          graduationDate: "May 2025",
          startDate: "August 2023",
          endDate: "May 2025",
          gpa: "3.63/4.0"
        },
        {
          id: 2,
          university: "Vasireddy Venkatadri Institute of Technology",
          degree: "Bachelor of Technology",
          major: "Computer Science and Engineering",
          graduationDate: "July 2022",
          startDate: "June 2018",
          endDate: "July 2022",
          gpa: "3.3/4.0"
        }
      ],
    experience: [
      {
        id: 1,
        company: "Mathematics Assistance Center",
        title: "Math Tutor",
        startDate: "February 2024",
        endDate: "Present",
        description: [
          "Delivered personalized and group tutoring sessions in Calculus, Trigonometry, Algebra, and Geometry, enabling students to tackle complex mathematical problems with confidence.",
          "Partnered with fellow tutors to design and refine effective teaching methodologies and resources, enhancing the overall support system for STEM students."
        ]
      },
      {
        id: 2,
        company: "Cognizant",
        title: "Software Engineer",
        location: "Hyderabad",
        startDate: "August 2022",
        endDate: "July 2023",
        description: [
          "Crafted and deployed robust Java applications with over 1.5 years of hands-on development using the Spring framework (Spring Boot, Spring Security, Spring Data JPA), delivering scalable enterprise solutions aligned with business needs and industry-leading standards.",
          "Developed and deployed scalable applications using Java, Ruby on Rails, and integrating Spring Boot web services to deliver high-performance enterprise solutions meeting industry standards.",
          "Designed and optimized RESTful APIs and microservices with JSON, SOAP, and Apache Kafka, validated via Postman, enabling real-time data exchange and interoperability across distributed systems.",
          "Containerized web and algorithmic solutions with Docker, deploying via Nginx, and automated CI/CD pipelines with Git, reducing deployment cycles by 20% and ensuring consistent code quality in Agile sprints."
        ]
      },
      {
        id: 3,
        company: "Cognizant",
        title: "Software Engineer Intern",
        location: "Hyderabad",
        startDate: "January 2022",
        endDate: "August 2022",
        description: [
          "Participated in a Cognizant internship program, gaining hands-on experience with Java Spring Boot and Angular frameworks.",
          "Learned to integrate back-end and front-end components by working on applications demonstrated by the company.",
          "Collaborated with senior developers to implement best practices for scalable, secure application development using Spring Boot.",
          "Applied Angular to build dynamic, responsive user interfaces, ensuring cross-browser compatibility and mobile responsiveness."
        ]
      },
      {
        id: 4,
        company: "Technovert",
        title: "Software Engineer Intern",
        startDate: "September 2021",
        endDate: "January 2022",
        description: [
          "Developed a leave and attendance management system for Keka Software, leveraging ASP.NET MVC for a structured and maintainable architecture.",
          "Integrated ADO.NET for efficient database interactions, optimizing SQL queries to enhance data retrieval performance.",
          "Designed and implemented role-based authentication and authorization using ASP.NET Identity, ensuring secure access to system functionalities."
        ]
      }
    ],
    projects: [
      {
        id: "cab-booking",
        name: "Cab Booking Application",
        subtitle: "Distributed Systems Project",
        technologies: ["Java", "Spring Boot", "Kafka", "React", "Spring Security", "Spring Data JPA"],
        summary: "A full-stack application that enables real-time location sharing and automated cab assignment.",
        description: [
          "Developed a full-stack Cab Booking application using Spring Boot, Kafka, and React, enabling real-time location sharing and automated cab assignment.",
          "Implemented Kafka producers and consumers to transmit user and cab driver GPS coordinates and matched the nearest driver based on geospatial proximity.",
          "Built responsive React frontend components for both cab drivers and users, allowing real-time location input and dynamic cab assignment feedback.",
          "Designed and consumed RESTful APIs for sending and retrieving location data, enabling seamless interaction between frontend and backend services.",
          "Configured Kafka locally using Docker with Zookeeper, and integrated the messaging system into the Spring Boot application for asynchronous event handling.",
          "Utilized H2 Database for development and schema management, with Spring Data JPA repositories managing persistence logic.",
          "Followed MVC architecture and ensured modular code structure for scalability and maintainability of both backend and frontend.",
          "Integrated JWT-based authentication for secure access and user management."
        ],
        challenges: [
          "Ensuring real-time data consistency between drivers and passengers",
          "Optimizing the algorithm for matching the nearest available drivers",
          "Managing the complexity of asynchronous messaging with Kafka"
        ],
        outcomes: [
          "Successfully implemented a scalable, real-time cab booking system",
          "Demonstrated proficiency in distributed systems concepts",
          "Gained experience with event-driven architecture"
        ],
        year: "2023"
      },
      {
        id: "heart-matching",
        name: "Heart Matching – AI Powered Platform",
        subtitle: "AI Matchmaking System",
        technologies: ["Java", "Spring Boot", "Hibernate", "Spring Security", "JWT", "WebSockets", "Hugging Face AI"],
        summary: "A matchmaking platform that uses AI to compute user compatibility based on semantic similarities.",
        description: [
          "Designed and implemented a full-stack matchmaking backend using Spring Boot, Spring Security, JWT, and WebSockets to support real-time communication.",
          "Integrated Spring AI with Hugging Face's MiniLM-L6-v2 model to compute user compatibility using semantic embeddings and cosine similarity, improving match relevance.",
          "Built secure authentication and authorization using JWT-based login, custom JwtFilter, and user roles.",
          "Implemented private chat functionality with WebSocket endpoints, enabling real-time messaging with support for read receipts, message status, and user blocking.",
          "Developed modular REST APIs (/api/auth, /api/match, /api/chat) with full Swagger/OpenAPI documentation for developer collaboration.",
          "Configured H2 and MySQL databases, along with Spring Data JPA, to manage user profiles, chat logs, and AI-processed embeddings.",
          "Enabled AI fallback mechanisms and exception handling to ensure availability and robustness even during Hugging Face API downtimes."
        ],
        challenges: [
          "Processing and analyzing semantic embeddings efficiently",
          "Implementing real-time chat with WebSockets",
          "Designing an effective AI-based matching algorithm"
        ],
        outcomes: [
          "Created a robust AI-powered matchmaking platform",
          "Successfully implemented real-time chat features",
          "Gained expertise in using AI models within Java applications"
        ],
        year: "2023"
      }
    ],
    skills: [
      {
        category: "Programming",
        technologies: "Java, Python, C++, C, C#(.NET), Relational Database(SQL, MYSQL, Oracle, Postgres), NOSQL, T-Sql"
      },
      {
        category: "Web Technologies",
        technologies: "HTML, CSS, Angular Js, React Js, Rest API, JavaScript, Typescript, PHP"
      },
      {
        category: "Tools",
        technologies: "Eclipse, Spring Tool Suite, Git, GitHub, Visual Studio Code, Cloud - AWS, Postman, MS Word"
      },
      {
        category: "Others",
        technologies: "Data Structures & Algorithms, Spring Boot, Backend, OOPS, Design Patterns, MVC, SDLC, Agile"
      }
    ]
  };
  
  export default portfolioData;