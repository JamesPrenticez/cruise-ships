exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // Delete all existing entries is being taken care of in 00_clean.js seeds file
  return knex('name_changes').insert([
    {id: 1, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    {id: 2, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    {id: 3, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    {id: 4, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    
    {id: 5, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    // Pacific Princess Cruise Ship (It had 3 names, at the moment these are in the main evo table)
    {id: 6, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    // Fairstar Cruise Ship (No Name Change, only went it went from Oxfordshire as a Troop Ship)
    {id: 7, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    // Queen Elizabeth 2 Cruise Ship (No Name Change)
    {id: 8, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''},

    // Song of Norway Cruise Ship
    {id: 9, first_name_change: 'Sundream (1997 to 2004)', second_name_change: 'Dream Princess (2004 to 2006)', 
    third_name_change: 'Dream (2006 to 2007)', fourth_name_change: 'Clipper Pearl (2007 to 2008)',
    fifth_name_change: 'Clipper Pacific (2008 to 2009)', sixth_name_change: 'Festival (2009 to 2010)', 
    seventh_name_change: 'Ocean Pearl (2010 to 2011', eighth_name_change: 'Formosa Queen (2012 to 2013)', 
    ninth_name_change: ''},

    // Royal Viking Sky Cruise Ship
    {id: 10, first_name_change: 'Sunward (1991 to 1992)', second_name_change: 'Birka Queen (1992)', 
    third_name_change: 'Sunward (1992 to 1993)', fourth_name_change: 'Golden Princess (1993 to 1997)',
    fifth_name_change: 'Superstar Capricorn (1997 to 1998)', sixth_name_change: 'Hyundai Keumgang (1998 to 2001)', 
    seventh_name_change: 'Superstar Capricorn (2001 to 2004)', eighth_name_change: 'Grand Latino (2004 to 2005)', 
    ninth_name_change: 'Boudicca (2005 to present)'},

    // Sovereign of the Seas Cruise Ship
    {id: 11, first_name_change: 'Sovereign (2008 to 2020)', second_name_change: '', third_name_change: '', 
    fourth_name_change: '', fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', 
    eighth_name_change: '', ninth_name_change: ''},

    // Allure of the Seas Cruise Ship (No Name Change)
    {id: 12, first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
    fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
    ninth_name_change: ''}

  ]);
};