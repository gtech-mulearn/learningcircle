const problems = [
  {
    id: "01",
    organisation: "White Hour Solutions",
    statement:
      "Hosting a blockchain code on to a cloud network in order to create a prototype app in the Healthcare sector",
    description:
      "Hosting a blockchain code on to a cloud network in order to create a prototype app in the Healthcare sector. Problem Statement short description in a short paragraph Who we are - A young start-up in the Health Tech space. What we plan to achieve – Create a blockchain application to store and share patient records with Doctors and Health care intermediaries. Where we are currently – The team has built the code and UI/UX designs for the application, but we need help to host the program on a network and create a prototype. What we need – We need young professionals to help solve the hosting issue and build the prototype. White Hour Solutions (WHS) LLP., is a young start-up looking to provide a solution for patient to record, store and share their Personal Health Records (PHRs). The PHRs would be interoperable between the patient and other Healthcare intermediaries. We plan to do this by providing an application which can be used through mobile phones, computers or tablets. We are currently at the phase where we have the codes developed and the designs for the app, but need help with hosting it on the cloud and building the prototype. All support and assistance will be provided for the same.",
    category: "Software",
  },
  {
    id: "02",
    organisation:
      "Department of Space, Indian Space Research Organisation (ISRO).",
    statement: "Runtime remote video quality assessment",
    description:
      "Interactive video communication over limited bandwidth channel and variable user end configuration has concern of video quality. Different VSAT terminals may have different computing resources i.e. RAM, graphics card, local network issues, not properly optimized VSAT setup affecting BER, Receive power etc. In situation like distributed video content delivery, video quality checks during runtime becomes problematic for having lack of reference video at remote or remote video as central transmitting end. The assessment of video quality across remote nodes distributed geographically this becomes challenging. Solution needs to be developed to assess the quality of captured videos at different remote VSAT terminals. Video for transmitting end and few remote receiving ends will be provided. The solution must not directly use both side videos to access quality. For datasets and additional information, please visit https://vedas.sac.gov.in/en/sih2022.html",
    category: "Software",
  },
  {
    id: "03",
    organisation:
      "Department of Space, Indian Space Research Organisation (ISRO).",
    statement: "DISCOVER",
    description:
      "Discover the objects and features in the image using Explainable AI Techniques. Field Data is an incredible source of information to validate earth observation studies. Recently with the success of Convolution Neural Networks in Feature Extraction from Satellite Images, there is a need to standardize and generate training datasets. This Field Datasets will be of high value in terms of the research and development in Space Applications. It is felt that catalogue of field data and AI based solution to discover the objects or features will be a milestone during India’s Self Reliance Journey in Geospatial Sector. For datasets and additional information, please visit https://vedas.sac.gov.in/en/sih2022.html",
    category: "Software",
  },
  {
    id: "04",
    organisation: "MathWorks",
    statement: "Traffic Light Negotiation and Perception-Based Detection",
    description:
      "Background: Navigating an intersection with traffic lights is a challenging but safety critical task for a self-driving car. Using perception to identify traffic light positions and states despite lighting conditions and occlusions is an interesting problem that a 3D simulation environment can safely and effectively provide a solution for. Automated Driving Toolbox™ provides a 3D simulation environment powered by Unreal Engine® from Epic Games® that can be used to visualize traffic lights and the motion of a vehicle in a 3D scene. Description: Use MATLAB® and Simulink® to load a pre-built Unreal scene, detect and identify the state of the traffic light nearest to the ego-vehicle, design a Stateflow® model to control traffic lights in the scene, and control the reaction of the ego-vehicle in accordance with the traffic lights and surrounding vehicles. The position and color state of the traffic light at an intersection can be obtained by using a combination of sensors and perception algorithms. Perception can be used to identify surrounding vehicles which can also be used to inform decisions. Identify distance between the traffic light nearest to the ego-vehicle and the ego-vehicle in a pre-built Unreal scene intersection. Identify the color of the traffic light using camera output and perception. Control the change of state of the traffic light using Stateflow. The ego-vehicle should react to the traffic light information. Build your own scenes with the following suggested requirements and perform a quantitative analysis of your algorithm: a. Traffic lights obstructed by trees b. Various types of traffic lights like hanging on a pole, multiple traffic lights in different orientations at an intersection c. Scenes with different weather conditions Work with Automated Driving Toolbox™ , Computer Vision Toolbox™ , Lidar Toolbox™ and Sensor Fusion and Tracking Toolbox™ https://www.mathworks.com/products/sensor-fusion-and-tracking.html for this project. Students can also take the opportunity of submitting the solution to the MathWorks Excellence in Innovation Projects and get recognized for their work. Deliverables Software (Models, Code, Simulation Data, 3D files) License: For students whose institutions/university already have access to MATLAB, SIMULINK and its toolboxes, please use of these licenses. To check if your campus has a MATLAB campus license? Check the following link For those whose institutions/university, do not have access to MATLAB, SIMULINK and its toolboxes. Please send a mail to ageethag@mathworks.com and we will provide you with the required license.",
    category: "Software",
  },
  {
    id: "05",
    organisation: "All India Council for Technical Education (AICTE).",
    statement: "Software for easing government procurements",
    description:
      "Background: Government purchases various components through tender which takes a lot of time as the process of allocation of tender takes more than 2 months. Often it is observed after allocation of tender the fulfillment of the required tender takes more than required time. From tender allocation to tender completion it takes more than 6 months to complete all the process as government itself have to compare all the required items. Summary: Government purchases various components through tender which takes a lot of time as the process of allocation of tender takes more than 2 months. Often it is observed after allocation of tender the fulfillment of the required tender takes more than required time. From tender allocation to tender completion it takes more than 6 months to complete all the process as government itself have to compare all the required items. Addressing this issue will help the government in having transparency and parity in rates of items procured by different Govt organizations and the entire process of tender allocation will take very less time then what is taking now. Objective: : There is a requirement of Software(Mobile/Web App) for Govt procurements which lists various items with specifications, rates, warranty and compare them and decide the best option., like one available for car insurance etc. This may avoid calling tenders, deciding L1 etc. This may also brought, transparency and parity in rates of items procured by different Govt organisations.",
    category: "Software",
  },
  {
    id: "06",
    organisation:
      "Ministry of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy (AYUSH).",
    statement:
      "Smart Watch with vital record and lifestyle recommendation with mobile application",
    description:
      "Background: Smartwatches have evolved from being fashion accessories to comprehensive health and fitness trackers which track daily activity, exercise, sleep and general health with a wide range of sensors. Objective: Smart watch which track blood pressure, abnormal heart rhythms, ECG. Which should be AI based and give alarm if there is anything wrong. With application with the above record tracking",
    category: "Hardware",
  },
  {
    id: "07",
    organisation: "Coal India Limited",
    statement:
      "Development of VR / AR (Virtual Reality / Augmented Reality) based application to train and up-skill the workforce involved in safely executing high risk tasks and problem solving key operational challenges in Coal mining industry.",
    description:
      "Background: The mining industry is known worldwide for its highly risky and hazardous working environment. Technological advancement in extraction techniques for proliferation of production levels has caused further concern for safety in this industry. Research so far in the area of safety has revealed that the majority of incidents in this hazardous industry take place because of human error, the control of which would enhance safety levels in working sites to a considerable extent. India is the world's second-largest coal producer as of 2021. Coal production in the country stood at 715.95 million tons (MT) in FY21. Between April 2021 and October 2021, coal production in India stood at 379.597 million tons (MT). Coal is the main pillar of India's energy sector. In 2021, it said, India consumed 93.2 crore tons of coal, 77% of which came from domestic production and 90% of which was used for power generation. The National Foundation of India study said that crores of Indians depend on the coal economy directly or indirectly. It highlighted that more than 1.3 crore Indians are employed in coal mining, transport, power, sponge iron, steel and bricks sectors. According to studies, skill-based errors are most critical and require immediate attention for mitigation. Training and upskilling the work force can help avoid errors which are based on mostly based on predictive fuzzy reasoning. Summary: VR technology has its unique advantages in several fields related to coal mining, such as miner safety training and emergency rescue drilling, besides drifting-producing process simulation, disaster scenario simulation, and mechanical operation training. Coal mining, regarded as a high-risk industry, has a strong demand for virtual reality (VR) to fulfill safety and emergency rescue training. A cloud-based VR system is to be designed for the training of coal miners. This system has to be a browser/client architecture which will include modules demonstrating the full procedure of an underground coal mine. The online cloud-rendered video streaming is to be adopted to provide enough computing and rendering power for a better browser-based user experience. Furthermore, game artificial intelligence (AI) can also be introduced into the system to increase the emotional exchange between the system and users. Objective: The objective is to provide an AR/VR solution that can simulate the real life situations and challenges of the coal mining industry and the workers can be trained and can be given the first-hand experience and possible solution to tackle such a scenario which will help avoid mishappenings and could save dozens of lives.",
    category: "Software",
  },
  {
    id: "08",
    organisation: "Ministry of Culture",
    statement: "Indoor Navigation for Museums",
    description:
      "Background: Popularity of museums and knowledge dissemination will grow significantly if visitors get a personalized tour and guidance. Visitors should be guided in most efficient and interesting ways Summary: Indoor mapping and navigation solutions can be used in museums to provide a digital and intuitive experience. A museum usually presents thousands of objects across a huge area. Indoor navigation with the help of an app can provide visitors with an active and engaging experience. Due to the rigidity that comes with a human guide, museum/monument visitors do not receive a personalized experience. Objective: ? It is also beneficial in receiving detailed insights into customer behaviour, allowing for more informed business decisions. ? 3D interactive maps allow museum visitors to search, discover, and learn more about various exhibits",
    category: "Software",
  },
];

export default problems;
