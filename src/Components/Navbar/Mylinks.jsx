const mainlink = "https://mulearn.org";
export const links = [
  {
    head: -1,
    name: "About",
    submenu: true,
    sublinks: [
      {
        name: "The Team",
        submenu: true,
        sublinks: [
          {
            name: "Our Team",
            submenu: false,
            sublinks: [],
            link: mainlink + "/team",
            foreign: false,
          }
        ],
      },
      {
        name: "Partners",
        submenu: true,
        sublinks: [
          {
            name: "Community Partners",
            submenu: false,
            sublinks: [],
            link: mainlink + "/community-partners",
            foreign: false,
          },
          {
            name: "Company Partners",
            submenu: false,
            sublinks: [],
            link: mainlink + "/company-partners",
            foreign: false,
          },
        ],
      },
      {
        name: "Leaderboard",
        submenu: true,
        sublinks: [
          {
            name: "Leaderboards",
            link: mainlink + "/leaderboard",
          },
        ],
      },
      {
        name: "Media",
        submenu: true,
        sublinks: [
          {
            name: "Gallery",
            submenu: false,
            sublinks: [],
            link: mainlink + "/gallery",
            foreign: false,
          },
          {
            name: "News",
            submenu: false,
            sublinks: [],
            link: mainlink + "/news",
            foreign: false,
          }
        ],
      },
      {
        name: "Campus Chapters",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            submenu: false,
            sublinks: [],
            link: mainlink + "/campuschapters",
            foreign: false,
          },
        ]
      },
    ],
  },
  {
    head: -1,
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        head: 1,
        name: "Flagship",
        submenu: true,
        sublinks: [
          {
            name: "YIP 2021",
            submenu: false,
            sublinks: [],
            link: mainlink + "/yip",
            foreign: false,
          },
          {
            name: "Foundation Program",
            submenu: false,
            sublinks: [],
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
        ],
      },
      {
        head: 1,
        name: "Ongoing",
        submenu: true,
        sublinks: [
          {
            name: "Art of Teaching",
            submenu: false,
            sublinks: [],
            link: mainlink + "/artofteaching",
            foreign: false,
          }],
      },
      {
        head: 1,
        name: "Others",
        submenu: true,
        sublinks: [
          {
            name: "Wiki Syllabus",
            submenu: false,
            sublinks: [],
            link: mainlink + "/wikisyllabus",
            foreign: false,
          },
          {
            name: "Hacktober Fest",
            submenu: false,
            sublinks: [],
            link: mainlink + "/hacktoberfest",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Events Page",
    submenu: true,
    sublinks: [
      {
        head: 2,
        name: "Global Calendar",
        submenu: true,
        sublinks: [
          {
            name: "Calendar",
            link: mainlink + "/calendar",
            submenu: false,
            sublinks: [],
            foreign: false,
          }
        ],
      },
      {
        head: 2,
        name: "Announcements",
        submenu: true,
        sublinks: [
          {
            name: "Announcements",
            link: mainlink + "/announcements",
            submenu: false,
            sublinks: [],
            foreign: false,
          }
        ],
      },
      {
        head: 2,
        name: "Weekly Events",
        submenu: true,
        sublinks: [
          {
            name: "Inspiration Station",
            link: mainlink + "/isr",
            submenu: false,
            sublinks: [],
            foreign: false,
          }
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        head: 3,
        name: "Interest Groups",
        submenu: true,
        sublinks: [
          {
            name: "Home",
            link: "/",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Web Development",
            link: "/web",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android Development",
            link: "/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "UI / UX",
            link: "/uiux",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Product Management",
            link: "/pm",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "IoT",
            link: "/iot",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Cyber Security",
            link: "/cybersec",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Search",
        submenu: true,
        sublinks: [
          {
            name: "Mentor Directory",
            link: "/mentors",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Existing Circles",
            link: "/searchcircles",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Practice",
        submenu: true,
        sublinks: [
          {
            name: "Problem Shelf",
            link: "/problemshelves",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Courses",
            link: "/courses",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "APISetu",
            link: "/apisetu",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
];
