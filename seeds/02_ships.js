// James Prentice code for Ships Seeds used for Cruise Lines and Reviews Page
// James Original Setup for a small amount of ships
// exports.seed = (knex, Promise) => {
//   return knex('ships').insert([
//     {
//       id: 1,
//       name: "Symphony of the Seas",
//     },
//     {
//       id: 2,
//       name: "Marella Cruises",
//     },
//     {
//       id: 3,
//       name: "Cunard",
//     }
//   ])
// }


// My (Robert) Code for Ships Seeds used for Cruise Lines and Reviews Page 
exports.seed = (knex, Promise) => {
  return knex('ships').insert([
      {
          id: 1,
          cruise_line: "Royal Caribbean",    
          ship_name: 'Symphony of the Seas',
          img: "/images/Royal Caribbean/st-maarten-symphony-of-the-seas-950x530.webp",
          Year: 2018,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.5,
          Loaded_Displacement: 120000,
          Deadweight: 18095,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/symphony-of-the-seas'
      },
      // {
          // id: 2 Looking for Marella Celebration Replacement for this scrapped ship
      // },
      {
          //id: 3
          id: 2,
          cruise_line: "Cunard",    
          ship_name: 'Queen Mary 2',
          img: "/images/Cunard/cunard_cruise_line_queen_mary_2QM.webp",
          Year: 2003,
          Gross_Tonnage: 149215,
          Passenger_Full_Capacity: 2799,
          Double_Occupancy_Passenger_Capacity: "2640 or 2695",
          Length: 345.03,
          Beam: 41,
          Draft: 10,
          Height: 72.0,
          Loaded_Displacement: 79287,
          Deadweight: "19189",
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/cunard/queen-mary-2'
      },
      {
          // Originally Star Princess with Princess Cruise Line
          id: 3,
          cruise_line: "P & O Cruises Aust",    
          ship_name: 'Pacific Encounter',
          img: "/images/P & O Cruises Aust/3336295.webp",
          Year: 2002,
          Gross_Tonnage: 108977,
          Passenger_Full_Capacity: 3115,
          Double_Occupancy_Passenger_Capacity: 2596,
          Length: 289.62,
          Beam: 36,
          Draft: 8.45,
          Height: 61.26,
          Loaded_Displacement: 57000,
          Deadweight: 10852,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/princess-cruises/star-princess'
      },
      // {
          // id: 5 Looking for Fred Olsen Boudicca Replacement, as it has stopped cruising
      // },
      // {
          // id: 6 Looking for Fred Olsen Blackwatch Replacement, as it has stopped cruising
      // },
      {
        // Here is a classic ship replacement for Fred Olsen Boudicca
        id: 4,
        cruise_line: "Phoenix Reisen",
        ship_name: "Artania",
        img: "",
        Year: 1984,
        Gross_Tonnage: 44348,
        Passenger_Full_Capacity: 1260,
        Double_Occupancy_Passenger_Capacity: 1188,
        Length: 230.61,
        Beam: 29.60,
        Draft: 7.80,
        // Height Estimate at this stage
        Height: 52.05, 
        // Loaded Displacement Estimate at this stage           
        Loaded_Displacement: 29580,
        Deadweight: 5580,
        Booking: ''
      },
      { 
        // Here is a classic ship replacement for Fred Olsen Blackwatch
        id: 5,
        cruise_line: "Phoenix Reisen",
        ship_name: "Armera",
        img: "",
        Year: 1988,
        Gross_Tonnage: 39051,
        Passenger_Full_Capacity: 910,
        Double_Occupancy_Passenger_Capacity: 835,
        Length: 204.02,
        Beam: 28.91,
        Draft: 7.25,
        // Height Estimate at this stage from my memory of a website
        Height: 45.48, 
        // Loaded Displacement taken from my Maritime Ships excel spreadsheet         
        Loaded_Displacement: 22237,
        Deadweight: 6150,
        Booking: ''

      },
      {
          id: 6,
          cruise_line: "Phoenix Reisen",   
          ship_name: "Amadea",
          img: '/images/555-large-15de21c670ae7c3f6f3f1f37029303c9.webp',
          Year: 1990,
          Gross_Tonnage: 28856,
          Passenger_Full_Capacity: 700,
          Double_Occupancy_Passenger_Capacity: 624,
          Length: 192.82,
          Beam: 24.70,
          Draft: 6.20,
          Height: 46.25,
          Loaded_Displacement: 17200,
          Deadweight: 3938,
          Booking: 'https://www.seascanner.com/cruises-amadea'
      },
      {
          id: 7,
          cruise_line: "Princess",   
          ship_name: "Majestic Princess",
          img:'/images/Princess/20180915-web-news-majestic-princess-sails-into-sydney-harbour-on-maiden-call-banner.webp',
          Year: 2017,
          Gross_Tonnage: 144000,
          Passenger_Full_Capacity: 4000,
          Double_Occupancy_Passenger_Capacity: 3400,
          Length: 330,
          Beam: 38.4,
          Draft: 8.4,
          Height: 68.3,
          Loaded_Displacement: 71000,
          Deadweight: 11000,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/princess-cruises/majestic-princess'
      },
      {
          id: 8,
          cruise_line: "Viking Ocean Cruises",   
          ship_name: "Viking Sun",
          // img: '/images/78-b98894cfacc39.jpg',
          img: '',
          Year: 2017,
          Gross_Tonnage: 47842,
          Passenger_Full_Capacity: 930,
          Double_Occupancy_Passenger_Capacity: 930,
          Length: 227,
          Beam: 27,
          Draft: 7,
          Height: 47.35,
          Loaded_Displacement: 24320,
          Deadweight: 4797,
          Booking: 'https://www.vikingcruises.com.au/oceans/ships/viking-sun.html'    
      },
      {
          id: 9,
          cruise_line: "Royal Caribbean",   
          ship_name: "Radiance of The Seas",
          img: "/images/Royal Caribbean/radiance-of-the-seas-d31_4933-med.webp",
          Year: 2001,
          Gross_Tonnage: 90090,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 293.2,
          Beam: 32.20,
          Draft: 8.626,
          Height: 63,
          Loaded_Displacement: 45989,
          Deadweight: 10759, 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/radiance-of-the-seas'
      },
      {
          id: 10,
          cruise_line: "Marella Cruises",     
          ship_name: "Marella Discovery 2",
          img: '/images/Marella Cruises/image_manager__rex_carousel_images_marella_discovery_2_auslaufend_havanna_23.02.2018_07.webp',
          Year: 1995,
          Gross_Tonnage: 69,
          Passenger_Full_Capacity: 2198,
          Double_Occupancy_Passenger_Capacity: 1832,
          Length: 264.26,
          Beam: 32,
          Draft: 8.068,
          Height: 58.068,
          Loaded_Displacement: 39026,
          Deadweight: 5200,
          Booking: 'https://www.tui.co.uk/cruise/ships/marella-discovery-2/itineraries'
      },
      {
          id: 11,
          cruise_line: "Ponant Cruises",      
          ship_name: "Le Laperouse",
          img: '/images/Ponant Cruises/50649869_401756037275665_4243685716581677093_n.webp',
          Year: 2018,
          Gross_Tonnage: 9976,
          Passenger_Full_Capacity: 184,
          Double_Occupancy_Passenger_Capacity: 160,
          Length: 131.46,
          Beam: 18,
          Draft: 4.70,
          Height: 32,
          Loaded_Displacement: 5636,
          Deadweight: 1305,
          Booking: 'https://en.ponant.com/cruises/on-board/vessel-le-laperouse'
        },
        {
          id: 12,
          cruise_line: "Carnival",    
          ship_name: "Carnival Legend",
          img: '/images/Carnival/carnival-legend-live-from.webp',
          Year: 2002,
          Gross_Tonnage: 85942,
          Passenger_Full_Capacity: 2680,
          Double_Occupancy_Passenger_Capacity: 2124,
          Length: 292.5,
          Beam: 32.2,
          Draft: 7.8,
          Height: 59,
          Loaded_Displacement: 43014,
          Deadweight: 7089,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/carnival-cruise-lines/carnival-legend'
        },
        {
          id: 13,
          cruise_line: "Carnival",     
          ship_name: "Carnival Vista",
          img: '/images/Carnival/carnival-blimp-02.webp',
          Year: 2016,
          Gross_Tonnage: 133500,
          Passenger_Full_Capacity: 4977,
          Double_Occupancy_Passenger_Capacity: 3934,
          Length: 321.56,
          Beam: 37.19,
          Draft: 8,
          Height: 66,
          Loaded_Displacement: 67000,
          Deadweight: 9000, 
          Booking: 'https://cruiseweb.com/cruise-lines/carnival-cruise-line/ship-carnival-vista'   
        },
        {
          id: 14,
          cruise_line: "Royal Caribbean",   
          ship_name: "Allure of The Seas",
          img: '/images/Royal Caribbean/Allure-Of-The-Seas-Family-Featured-2-800x450.webp',
          Year: 2010,
          Gross_Tonnage: 225000,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.1,
          Loaded_Displacement: 120000,
          Deadweight: 18095, 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/allure-of-the-seas'
        },
        {
          id: 15,
          cruise_line: "Royal Caribbean",   
          ship_name: "Anthem of The Seas",
          img: '/images/Royal Caribbean/p62cc88gq6311.webp',
          Year: 2015,
          Gross_Tonnage: 168666,
          Passenger_Full_Capacity: 4905,
          Double_Occupancy_Passenger_Capacity: 4180,
          Length: 348,
          Beam: 41.40,
          Draft: 8.80,
          Height: 70,
          Loaded_Displacement: 76000,
          Deadweight: 12000, 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/anthem-of-the-seas'
        },
        // {
        //   // id: 14 Crystal Serenity with Crystal Cruises is arrested in Bahamian Waters, so it is not operating
        // },
        // { 
        //   // id: 15 Crystal Symphony with Crystal Cruises is arrested in Bahamian Waters, so it is not operating
        // },
        // {
        //   // id: 15 World Odyssey with Semester at Sea is an educational course ship and is not for cruising
        // },
        {
          id: 16,
          cruise_line: "Celestyal Cruises",   
          ship_name: "Celestyal Crystal",
          img: '/images/Celestyal Cruises/Celestyal-Crystal.webp',
          Year: 1980,
          Gross_Tonnage: 25611,
          Passenger_Full_Capacity: 1452,
          Double_Occupancy_Passenger_Capacity: 1409,
          Length: 158.90,
          Beam: 25.20,
          Draft: 5.80,
          Height: 38.00,
          Loaded_Displacement: 13300,
          Deadweight: 1703,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/celestyal-cruises/celestyal-crystal' 
        },
        {
          id: 17,
          cruise_line: "Celestyal Cruises",   
          ship_name: "Celestyal Olympia",
          img: '/images/Celestyal Cruises/celestyal-olympia-01.webp',
          Year: 1982,
          Gross_Tonnage: 37584,
          Passenger_Full_Capacity: 1664,
          Double_Occupancy_Passenger_Capacity: 1575,
          Length: 214.51,
          Beam: 38.41,
          Draft: 6.80,
          Height: 45.00,
          Loaded_Displacement: 21536,
          Deadweight: 5000,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/celestyal-cruises/celestyal-olympia' 
        },
        {
          id: 18,
          cruise_line: "Explorer Cruises",    
          ship_name: "Explorer Dream",
          // Look for a more up to date photo
          img: '/images/Explorer Cruises/explorer-dream-620x330.webp',
          Year: 1999,
          Gross_Tonnage: 75338,
          Passenger_Full_Capacity: 2800,
          Double_Occupancy_Passenger_Capacity: 1974,
          Length: 268.60,
          Beam: 32.30,
          Draft: 7.90,
          Height: 57.50,
          Loaded_Displacement: 42036,
          Deadweight: 8530,
      //   Original Link to Booking page below, that is now news in the past  
      //   Booking: 'https://www.cruiseindustrynews.com/cruise-news/22670-dream-cruises-cancels-2020-2021-australia-program.html'
      //   I think this may be the Booking page to go to below
          Booking: 'https://dpauls.com/traveldeals/explorer-dream.html'
        },
      //   {
      //     Not in service due to Covid 19  
      //     id: 23,
      //     cruise_line: "Norwegian Cruises",    
      //     ship_name: "Norwegian Spirit",
      //     img: '/images/700x475_MainImage_Spirit2.jpg',
      //     Year: 1998,
      //     Gross_Tonnage: 75904,
      //     Passenger_Full_Capacity: 2414,
      //     Double_Occupancy_Passenger_Capacity: 2018,
      //     Length: 267.94,
      //     Beam: 32.31,
      //     Draft: 7.92,
      //     Height: 57.60,
      //     Loaded_Displacement: 42036,
      //     Deadweight: 8530,
      //     Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-spirit'
      //   },
        {
          id: 19,
          cruise_line: "Norwegian Cruises",    
          ship_name: "Norwegian Jewel",
          img: '/images/Norwegian Cruises/Norwegian Jewel (Wellington, NZ) IMG_8841.webp',
          Year: 2005,
          Gross_Tonnage: 93502,
          Passenger_Full_Capacity: 2866,
          Double_Occupancy_Passenger_Capacity: 2388,
          Length: 294.13,
          Beam: 32.31,
          Draft: 8.23,
          Height: 60.5,
          Loaded_Displacement: 45612,
          Deadweight: 7500,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-jewel'
        },
        {
          id: 20,
          cruise_line: "Norwegian Cruises",
          ship_name: "Norwegian Dawn",
          img: '/images/Norwegian Cruises/1280px-Norwegian_Dawn_Leaving_Boston_Harbor_(cropped).webp',
          Year: 2002,
          Gross_Tonnage: 92250,
          Passenger_Full_Capacity: 2808,
          Double_Occupancy_Passenger_Capacity: 2340,
          Length: 294.00,
          Beam: 32.20,
          Draft: 8.50,
          Height: 59.50,
          Loaded_Displacement: 48200,
          Deadweight: 7500,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-dawn',
        },
      //   { id: 27 Pacific Aria is currently laid up and not operating }  
        {
          id: 21,
          cruise_line: "P & O Cruises UK",
          ship_name: "Aurora",
          img: '/images/P & O Cruises UK/1280px-MV_Aurora_2015-08-24_-_Aerial.webp',
          Year: 2000,
          Gross_Tonnage: 76152,
          Passenger_Full_Capacity: 1950,
          Double_Occupancy_Passenger_Capacity: 1878,
          Length: 270.00,
          Beam: 32.20,
          // https://ships.jobmarineman.com/aurora-9169524/ says Beam 33.6 m
          Draft: 7.90,
          Height: 62.1,
          Loaded_Displacement: 43405,
          Deadweight: 8486,
          Booking: 'https://www.pocruises.com/en-au/deals/deals-by-ship/aurora-deals'
        },
      //   { id: Pacific Dawn has name change to Ambience and is now with Ambassador Cruise Line }
        {
          id: 22,
          cruise_line: "P & O Cruises Aust",
          ship_name: "Pacific Explorer",
          img: '/images/P & O Cruises Aust/PACEXP.webp',
          Year: 1997,
          Gross_Tonnage: 77441,
          Passenger_Full_Capacity: 2395,
          Double_Occupancy_Passenger_Capacity: 1998,
          Length: 261.00,
          Beam: 32.20,
          Draft: 8.20,
          Height: 59.70,
          Loaded_Displacement: 39997,
          Deadweight: 8293,
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/po-australia/pacific-encounter',
        },
        {
          id: 23,
          cruise_line: "P & O Cruises Aust",
          ship_name: "Pacific Adventure",
          img: "/images/P & O Cruises Aust/pacific-adventure.webp",
          Year: 2001,
          Gross_Tonnage: 108865,
          Passenger_Full_Capacity: 3060,
          Double_Occupancy_Passenger_Capacity: 2592,
          Length: 289.90,
          Beam: 36.00,
          Draft: 8.05,
          Height: 64.69,
          Loaded_Displacement: 53810,
          Deadweight: 8418,
          Booking: 'https://www.flightcentre.com.au/cruises/cruise-ships/po-australia/pacific-adventure'
        }
      ])
}