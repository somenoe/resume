const resumeContent = {
  personalInfo: {
    name: 'Name',
    email: 'email@gmail.com',
    phone: '(XXX) XXX-XXXX',
    location: 'City, State, Zip',
    linkedin: 'linkedin.com/in/username/',
  },
  summary:
    'Mechanical Engineering student with hands-on experience in computational analysis, robotics, and engineering design. Proven track record of improving system performance through data analysis and algorithm optimization, with 82% precision improvements at Argonne National Laboratory. Skilled in CAD software, programming languages including Python and C++, and leading multidisciplinary engineering teams on complex projects ranging from rocket engines to robotic systems.',
  education: [
    {
      degree:
        'Bachelor of Science in Mechanical Engineering; Minor in Electrical Engineering, Spanish',
      university: 'University of XXXXX',
      college: 'XXXXX College of Engineering',
      gpa: 'Cumulative GPA: 4.0/4.0',
      graduationDate: 'Expected Grad Date',
      coursework:
        'Fluid Mechanics, Thermodynamics, Design for Manufacturability, Solid Mechanics, Dynamics, Electrical Circuits',
    },
  ],
  experience: [
    {
      title: 'Course Grader',
      company: 'University',
      location: 'Location',
      startDate: 'August 2024',
      endDate: 'Present',
      responsibilities: [
        'Grading homework for an introductory fluid mechanics course, reviewing and maintaining in-depth knowledge of fluid properties, systems, and interactions',
      ],
    },
    {
      title: 'Science Undergraduate Laboratory Intern',
      company: 'Argonne National Laboratory',
      location: 'Lemont, IL',
      startDate: 'May 2024',
      endDate: 'August 2024',
      responsibilities: [
        'Increased precision by 82% and run time by 69% on a post-processing python script detecting undesirable behavior in sustainable fuel combustion testing through analysis of pressure transducer data',
        'Identified the start of compression on Rapid Compression Machine experiments within 0.1ms by fitting experimental pressure curves to models of isentropic compression based on Linear Variable Differential Transformer (LVDT) data',
        'Compared results from pressure and LVDT datasets to evaluate how to account for noise and piston seating time while detecting asynchronous behavior, improving accuracy by 90%',
      ],
    },
    {
      title: 'Robotics Team Mentor',
      company: 'XXXXX Middle School',
      location: 'Location',
      startDate: 'October 2022',
      endDate: 'May 2023',
      responsibilities: [
        'Mentored a team of 12 middle schoolers in concepts including engineering design and coding',
        'Coordinated with faculty and members of the school board to allocate resources and competition materials',
      ],
    },
  ],
  projects: [
    {
      title: 'Liquid Rocket Engine',
      organization: 'Liquid Rocketry Club',
      startDate: 'September 2024',
      endDate: 'Present',
      details: [
        'Directing a team of three engineers in the creation of a heat transfer analysis script for the chamber of a rocket engine, using the Bartz correlation, Newton-Raphson, and 4th order Runge-Kutta methods to calculate heat transfer and gas flow properties',
        'Collaborating with a team of four to design and manufacture an ablative sleeve using Siemens NX to decrease the thermal effects of LOX, reducing the probability of melting in the combustion chamber',
        'Analyzing hoop, shear, and Von Mises stresses from pressure on structural features to define design specifications',
        'Implementing a predictable failure mode via bolt shear at the nozzle retaining ring to avoid catastrophic failure',
      ],
    },
    {
      title: '6-Axis Robot Arm',
      organization: 'American Society of Mechanical Engineers (ASME)',
      startDate: 'September 2024',
      endDate: 'Present',
      details: [
        'Leading a group of 15 engineers designing a 6-DOF robotic arm loosely inspired by the Modern Robotics UR3 for presentation at the University of XXXXX Name-brand Engineering event',
        'Designing robot links and joints to internally house motors, wires, encoders, and bearings to allow smooth motion of the arm',
        'Utilizing forward and inverse kinematic calculations in Python to define current and future states, convert between the world frame and configuration space and create a visual simulation of different robot configurations',
        'Implementing path-finding algorithms such as RRT and A* to generate safe trajectories between desired configurations',
      ],
    },
    {
      title: 'Hand-Controlled Drone',
      organization: 'American Society of Mechanical Engineers (ASME)',
      startDate: 'January 2024',
      endDate: 'April 2024',
      details: [
        'Designed and manufactured a remote-controlled claw attachment and circuit housing using Fusion 360 and Cura, interfacing directly with the drone body and power supply, and weighing under 50g to reduce impact on battery life',
        'Created a circuit to wirelessly transmit and receive a PWM signal to a servo motor for claw actuation up to 20m',
      ],
    },
    {
      title: 'Computer-Controlled Stoplight',
      organization: 'Tau Beta Pi Engineering Honors Society',
      startDate: 'February 2024',
      endDate: 'April 2024',
      details: [
        'Constructed a 3ft x 1ft x 1ft stoplight model using PVC, Arduino, and incandescent bulbs',
        'Wrote a script using C++ allowing users to control the state of the light as well as an automatic option',
      ],
    },
    {
      title: 'Easy-Boiler',
      organization: 'Computer-Aided Design Course',
      startDate: 'August 2023',
      endDate: 'December 2023',
      details: [
        'Designed an appliance for convenient food boiling with over 12 interacting parts in Fusion 360',
        'Conducted customer interviews and market research to identify potential market targets and product ideas, utilizing a Pugh Matrix to narrow design concepts and develop Product Design Specifications',
      ],
    },
  ],
  skills: {
    design:
      'SolidWorks, Siemens NX, Fusion 360, Inventor, Arduino, Cura, JavaScript, DFM, DFA',
    analysis: 'Python, C++, ROS, MATLAB, FEA, aPriori, Java, Microsoft Excel',
  },
} as const;

export default resumeContent;
