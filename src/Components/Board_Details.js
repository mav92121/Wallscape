/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import { nanoid } from "nanoid";

let Board_Details = [
  {
    color: "#A7F0F9",
    title: "Earth Changes and Journeys",
    id: nanoid(),
    posts: [
      {
        title: "Galapagos islands, Ecuador",
        date: "25th July",
        image: `galapagos-islands-ecuador.jpg`,
        description: `The Galápagos Islands is a volcanic archipelago in the Pacific
            Ocean. It's considered one of the world's foremost destinations for
            wildlife-viewing. A province of Ecuador, it lies about 1,000km off
            its coast. Its isolated terrain shelters a diversity of plant and
            animal species, many found nowhere else. Charles Darwin visited in
            1835, and his observation of Galápagos' species later inspired his
            theory of evolution.`,
        likes: 0,
      },
      {
        title: "Lake Tekapo, New Zealand",
        image: "lake_tekapo.jpg",
        date: "1st August",
        description: `purple, pink, and blue ued lupin flowers may not be native to New Zealand (they hail from North America), they really do seem to bloom most vibrantly on the Oceanian nation's South Island. At Lake Tekapo, in particular, the flowers juxtapose against the backdrop of the crystal clear water to create one of the country's most stunning vistas.`,
        likes: 7,
      }
    ],
  },

  {
    color: "#ffcc66",
    title: "Eating Right",
    id: nanoid(),

    posts: [
        {
            title: "Galapagos islands, Ecuador",
            image: `galapagos-islands-ecuador.jpg`,
            date: "25th July",
            description: `The Galápagos Islands is a volcanic archipelago in the Pacific
                Ocean. It's considered one of the world's foremost destinations for
                wildlife-viewing. A province of Ecuador, it lies about 1,000km off
                its coast. Its isolated terrain shelters a diversity of plant and
                animal species, many found nowhere else. Charles Darwin visited in
                1835, and his observation of Galápagos' species later inspired his
                theory of evolution.`,
            likes: 0,
          },
    ],
  },
];

export default Board_Details;
