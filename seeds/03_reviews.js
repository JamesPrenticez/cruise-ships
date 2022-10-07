exports.seed = (knex, Promise) => {
  return knex('reviews').insert([
    {
      id: 1,
      user_id: 1, //Rob
      ship_id: 1, // Symphony of the Seas
      review: "Amazing big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 9.1
    },
    {
      id: 2,
      user_id: 1, //Rob
      ship_id: 2, // Marella Cruises
      review: "Massive ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 8.3
    },
    {
      id: 3,
      user_id: 1, //Rob
      ship_id: 3, // Cunard
      review: "Gigantuous ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 9.2
    },
    {
      id: 4,
      user_id: 4, 
      ship_id: 4, 
      review: "",
      rating: 8.9
    },
    {
      id: 5,
      user_id: 5,
      ship_id: 5, 
      review: "",
      rating: 9.3
    },
    {
      id: 6,
      user_id: 6,
      ship_id: 6, 
      review: "",
      rating: 9.5
    },
    {
      id: 7,
      user_id: 7,
      ship_id: 7, 
      review: "",
      rating: 8.8
    },
    {
      id: 8,
      user_id: 8,
      ship_id: 8, 
      review: "",
      rating: 8.4
    },
    {
      id: 9,
      user_id: 9,
      ship_id: 9, 
      review: "",
      rating: 9.0
    },
    {
      id: 10,
      user_id: 10,
      ship_id: 10, 
      review: "",
      rating: 8.7
    },
    {
      id: 11,
      user_id: 11,
      ship_id: 11, 
      review: "",
      rating: 9.2
    },
    {
      id: 12,
      user_id: 12,
      ship_id: 12, 
      review: "",
      rating: 8.2
    },
    {
      id: 13,
      user_id: 13,
      ship_id: 13, 
      review: "",
      rating: 8.1
    },
    {
      id: 14,
      user_id: 14,
      ship_id: 14, 
      review: "",
      rating: 9.4
    },
    {
      id: 15,
      user_id: 15,
      ship_id: 15, 
      review: "",
      rating: 9.2
    },
    {
      id: 16,
      user_id: 16,
      ship_id: 16, 
      review: "",
      rating: 8.8
    },
    {
      id: 17,
      user_id: 17,
      ship_id: 17, 
      review: "",
      rating: 9.1
    },
    {
      id: 18,
      user_id: 18,
      ship_id: 18, 
      review: "",
      rating: 9.2
    },
    {
      id: 19,
      user_id: 18,
      ship_id: 18, 
      review: "",
      rating: 9.0
    },
    {
      id: 20,
      user_id: 20,
      ship_id: 20, 
      review: "",
      rating: 9.0
    },
    {
      id: 21,
      user_id: 21,
      ship_id: 21, 
      review: "",
      rating: 9.3
    },
    {
      id: 22,
      user_id: 22,
      ship_id: 22, 
      review: "",
      rating: 9.3
    },
    {
      id: 23,
      user_id: 23,
      ship_id: 23, 
      review: "",
      rating: 9.3
    }
  ])
}