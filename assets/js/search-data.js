// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-홈",
    title: "홈",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-연구주제",
              title: "연구주제",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-연구실적",
              title: "연구실적",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-교수",
              title: "교수",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/professor/";
              },
            },{id: "dropdown-학생",
              title: "학생",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/";
              },
            },{id: "dropdown-졸업생",
              title: "졸업생",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/alumni/";
              },
            },{id: "nav-강의",
          title: "강의",
          description: "담당 강의 목록 및 강의 자료",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-연락처",
          title: "연락처",
          description: "연구실 방문 및 문의 안내",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%72%6B%6A%6D%32%30%32%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
