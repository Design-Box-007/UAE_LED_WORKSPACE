import images from "@/data/assets";

export const tabsData = [
  {
    id: "all",
    name: "All",
    solutions: [
      {
        id: "indoor",
        title: "Indoor LED Displays",
        image: images.service.img1,
      },
      {
        id: "outdoor",
        title: "Outdoor LED Screens",
        image: images.service.img2,
      },
    ],
  },
  {
    id: "indoor",
    name: "Indoor LED Display",
    solutions: [
      {
        id: "indoor",
        title: "Indoor LED Displays",
        image: images.service.img1,
      },
    ],
  },
  {
    id: "outdoor",
    name: "Outdoor LED",
    solutions: [
      {
        id: "outdoor",
        title: "Outdoor LED Screens",
        image: images.service.img2,
      },
    ],
  },
  {
    id: "custom",
    name: "Custom LED",
    solutions: [
      {
        id: "custom",
        title: "Custom LED Solutions",
        image: images.service.img3,
      },
    ],
  },
  {
    id: "video_walls",
    name: "Video Walls",
    solutions: [
      {
        id: "video_walls",
        title: "Video Wall Systems",
        image: images.service.img4,
      },
    ],
  },
  {
    id: "rental",
    name: "LED Rental Displays",
    solutions: [
      {
        id: "rental",
        title: "LED Rental Displays",
        image: images.service.img5,
      },
    ],
  },
  {
    id: "transparent",
    name: "Transparent LED",
    solutions: [
      {
        id: "transparent",
        title: "Transparent LED Displays",
        image: images.service.img6,
      },
    ],
  },
];
