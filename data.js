const services = [
  // e-Governance
  {
    name: "Digital India",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png",
  },
  {
    name: "DigiLocker",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/DigiLocker.svg/2560px-DigiLocker.svg.png",
  },
  {
    name: "eHospital",
    url: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/11/20241105358382484.png",
  },
  {
    name: "UMANG",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvotxHU9hQS8cb-o7Kur7sdqe8y2asn2xPA&s",
  },
  {
    name: "MyGov",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-iBZbePG8boeZTWDKCaLp0Jee9Or4AWW-Q&s",
  },

  // Digital Infrastructure
  {
    name: "BharatNet",
    url: "https://bharatnet.usof.gov.in/assets/bharatnet-logo-BIaxIQDW.png",
  },
  {
    name: "Aadhaar",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png",
  },
  {
    name: "CSC",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_of_Common_Service_Centres.svg/2560px-Logo_of_Common_Service_Centres.svg.png",
  },

  // Digital Literacy
  {
    name: "PMGDISHA",
    url: "https://static.mygov.in/static/s3fs-public/mygov_149553553747144841.jpg",
  },
  {
    name: "NIC",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRteBb7ZwJDlFn_AAZv0I5RCfw5UiXKNoGBQ&s",
  },
  {
    name: "Skill India",
    url: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Skill-India_Preview.png?x44977",
  },
];

const homePage = [
  {
    title: "e-Governance",
    description:
      "Transforming traditional governance into a transparent, efficient, and accountable digital ecosystem.",
    logos: ["DigiLocker", "eHospital", "UMANG", "MyGov"],
    sidePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SCnFDLiN2H4c6k8LZncTarcLLttM111Kzw&s",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Creating strong foundations for connectivity, identity, and digital access for every citizen.",
    logos: ["BharatNet", "Aadhaar", "CSC"],
    sidePicture:
      "https://static.pib.gov.in/WriteReadData/userfiles/image/image003R6K5.jpg",
  },
  {
    title: "Digital Literacy",
    description:
      "Empowering citizens with the knowledge and skills to access, use, and benefit from digital technologies.",
    logos: ["PMGDISHA", "NIC", "Skill India"],
    sidePicture:
      "https://circindia.org/wp-content/uploads/2015/03/Information-services.jpg",
  },
];
const titles = {
  "e-Governance": "e-Governance Initiatives",
  "Digital Infrastructure": "Digital Infrastructure Initiatives",
  "Digital Literacy": "Digital Literacy Initiatives",
};
const descriptions = {
  "e-Governance":
    "Explore initiatives that make governance transparent, efficient, and citizen-friendly through technology and innovation.",
  "Digital Infrastructure":
    "Discover the backbone of Digital India — robust connectivity, secure digital identity, and inclusive online access for all.",
  "Digital Literacy":
    "Learn about programs that empower citizens with the skills and confidence to use digital tools effectively and safely.",
};
const initiatives = {
  "e-Governance": [
    {
      name: "DigiLocker",
      about: "A secure cloud platform for storing digital documents.",
      link: "https://www.digilocker.gov.in",
    },
    {
      name: "UMANG",
      about:
        "Unified Mobile Application for New-age Governance offering access to multiple government services.",
      link: "https://web.umang.gov.in",
    },
    {
      name: "eHospital",
      about: "Online registration and appointment system for hospitals.",
      link: "https://ors.gov.in",
    },
    {
      name: "MyGov",
      about: "Citizen engagement platform for participatory governance.",
      link: "https://www.mygov.in/",
    },
  ],
  "Digital Infrastructure": [
    {
      name: "Aadhaar",
      about: "Unique identity number for residents of India.",
      link: "https://uidai.gov.in",
    },
    {
      name: "BharatNet",
      about: "Optical fibre network connecting rural India.",
      link: "https://usof.gov.in/en/bharatnet-project",
    },
    {
      name: "CSC",
      about: "Common Service Centres providing e-services in rural areas.",
      link: "https://csc.gov.in",
    },
  ],
  "Digital Literacy": [
    {
      name: "PMGDISHA",
      about: "Training program for digital literacy in rural areas.",
      link: "https://graminshiksha.com/Certification/PMGDISHA-12078-62",
    },
    {
      name: "Skill India",
      about: "Campaign to train Indians in industry-relevant skills.",
      link: "https://www.skillindiadigital.gov.in/",
    },
    {
      name: "NIC",
      about: "Provides infrastructure to support e-Governance services.",
      link: "https://www.nic.in",
    },
  ],
};

const detailedInitiatives = {
  DigiLocker: {
    title: "DigiLocker",
    info: "DigiLocker is a flagship initiative of the Ministry of Electronics & IT under the Digital India programme, aimed at providing citizens with a secure cloud-based platform for storage, sharing and verification of documents and certificates.",
    images: [
      "https://img1.digitallocker.gov.in/digilocker-landing-page/assets/img/banner/promotional-web-2.jpg",
      "https://img1.digitallocker.gov.in/digilocker-landing-page/assets/img/banner/promotional-web-3.jpg",
      "https://img1.digitallocker.gov.in/digilocker-landing-page/assets/img/banner/promotional-web-5.jpg",
    ],
  },
  eHospital: {
    title: "eHospital (NIC)",
    info: "e-Hospital, developed by the National Informatics Centre (NIC), is a hospital management system that offers online patient registration, lab reports, blood bank integration and other digitised workflows for public hospitals.",
    images: [
      "https://ors.gov.in/orsportal/assets/images/SMS_NEW.png",
      "https://ors.gov.in/orsportal/assets/images/ORS1.png",
      "https://ors.gov.in/orsportal/assets/images/abdm.png",
    ],
  },
  UMANG: {
    title: "UMANG (Unified Mobile Application for New-age Governance)",
    info: "UMANG is a mobile platform launched by the Government of India under the Digital India mission, offering access to hundreds of central and state e-government services via one app.",
    images: [
      "https://media.umangapp.in/banners/file_20491747637772419_Sewasetu_1306.png",
      "https://media.umangapp.in/banners/file_20581761203011133_mybharat_1306.png",
      "https://media.umangapp.in/banners/file_20511758092209407_e-sarasbanner_1306.png",
    ],
  },
  MyGov: {
    title: "MyGov (Citizen Engagement Platform)",
    info: "MyGov is a citizen-engagement platform of the Government of India that allows citizens to participate in governance and policy-making via ideas, tasks, polls and discussions. :contentReference[oaicite:1]{index=1}",
    images: [
      "https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_1759485135144766141.jpg",
      "https://cbpssubscriber.mygov.in/assets/uploads/3rpbtfC38B9muoRQ?13",
      "https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_1759496624144766141.jpg",
    ],
  },
  BharatNet: {
    title: "BharatNet (Rural Broadband Connectivity)",
    info: "BharatNet is a high-speed broadband initiative under the Digital India programme which aims to connect all Gram Panchayats in India via optical fibre to enable e-governance, education, health and entrepreneurship. :contentReference[oaicite:2]{index=2}",
    images: [
      "https://usof.gov.in/assets/img/slider_pic/1710566254_f8e5ab4fb9c1bd2a39ad.jpg",
      "https://usof.gov.in/assets/img/slider_pic/1744794502_a5524161e13604978630.jpg",
      "https://usof.gov.in/assets/img/slider_pic/1742380150_fb21c1a59f79c1002d18.jpg",
    ],
  },
  Aadhaar: {
    title: "Aadhaar (Unique Identity)",
    info: "Aadhaar is a 12-digit unique identity number issued to residents of India by the Unique Identification Authority of India (UIDAI). It serves as a foundational identity for delivery of digital services, financial inclusion and governance. :contentReference[oaicite:4]{index=4}",
    images: [
      "https://uidai.gov.in/images/banner/DocumentUpdateWebsiteBanner.jpeg",
      "https://uidai.gov.in/images/banner/SDK-details_Face-match.jpg",
      "https://uidai.gov.in/images/banner/NEET-Web-Banner.jpg",
    ],
  },
  CSC: {
    title: "CSC (Common Service Centres)",
    info: "Common Service Centres (CSCs) are front-end service delivery points under the Digital India programme, offering e-services, certificate applications, digital literacy support and access to government services in rural and remote areas.",
    images: [
      "https://digitalseva.csc.gov.in/assets/uploads/fraud.jpg",
      "https://digitalseva.csc.gov.in/assets/img/whatsapp.jpg",
      "https://digitalseva.csc.gov.in/assets/uploads/information.jpeg",
    ],
  },
  PMGDISHA: {
    title: "PMGDISHA (Pradhan Mantri Gramin Digital Saksharta Abhiyan)",
    info: "Launched in 2017 under the Digital India mission, PMGDISHA is a digital literacy scheme aimed to make at least one person in every rural household digitally literate. :contentReference[oaicite:5]{index=5}",
    images: [
      "https://graminshiksha.com/wp-content/uploads/2017/08/course-img4.jpg",
      "https://graminshiksha.com/wp-content/uploads/2017/08/course-img2.jpg",
      "https://graminshiksha.com/wp-content/uploads/2017/08/course-img3.jpg",
    ],
  },
  NIC: {
    title: "NIC (National Informatics Centre)",
    info: "National Informatics Centre (NIC) is the premier technical and digital infrastructure agency of the Government of India, responsible for building and running many e-governance and digital government services under the Digital India programme.",
    images: [
      "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/07/202507281507324686.jpeg",
      "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/01/202502191607085083-scaled.jpg",
      "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/01/202502191099986199.png",
    ],
  },
  "Skill India": {
    title: "Skill India",
    info: "Skill India is an initiative of the Government of India to train over 40 crore people in India in different skills by 2025, thereby supporting employability, entrepreneurship and the digital economy.",
    images: [
      "https://s3.ap-south-1.amazonaws.com/skill-india-dev/%2F%2FPRODbannerimagesPROD/PRODjpegPROD/PROD32a669d76b-f568-4c4a-9fb5-fc4b210d5503.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251021T120000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20251021%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0177137762dd393b748ced6bbce1f60b319ac67b655880ac5c609128c414979f",
      "https://s3.ap-south-1.amazonaws.com/skill-india-dev/%2F%2FPRODbannerimagesPROD/PRODjpegPROD/PROD32a669d76b-f568-4c4a-9fb5-fc4b210d5503.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251021T120000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20251021%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0177137762dd393b748ced6bbce1f60b319ac67b655880ac5c609128c414979f",
      "https://skill-india-dev.s3.ap-south-1.amazonaws.com/SectorMasterImages/Beauty%20Culture%20%26%20Healthcare.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251023T010000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20251023%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=804ac0d944e6d23142adf25468f1b3add7e0520dcc3ad37d853b6ad36a479c47",
    ],
  },
};
