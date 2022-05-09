exports.seed = (knex, Promise) => {
  return knex('reviews').insert([
    {
      id: 1,
      user_id: 1, //Rob
      ship_id: 1, // Symphony of the Seas
      content: "Amazing big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 9.9
    },
    {
      id: 2,
      user_id: 1, //Rob
      ship_id: 2, // Marella Cruises
      content: "Massive ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 7.7
    },
    {
      id: 3,
      user_id: 1, //Rob
      ship_id: 3, // Cunard
      content: "Gigantuous ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.",
      rating: 5.5
    },
  ])
}