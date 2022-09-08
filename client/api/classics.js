// Comment this classics api for now (2nd Sep 2022, 12:48 am) , 
// so that the Website still works with James Original Setup


// This api is for classic ships to be displayed on Evolution Part 1 and 2 (pages)
// export function getClassics()   {

//         console.log('client/api/api.js getClassics called')
     
//         return request.get(`/v1/classicships`)
//             .then(res => {
//                 const classicships = res.body
//                 console.log('Got classicships! client/api/api.js', classicships)

//                 return classicships
//             })
//             .catch (error => {
//                 This logs any errors caught, while debugging.
//                 console.log('Caught error in client/api/api.js getClassics', error)
//             })
//     }
    
//     This api is for going to a classic ship page when you click on image on Evolution Part 1 page. 
//     export function getClassic(classic_ship_name)   {

//         console.log('client/api/api.js getClassic called')
    
//         return request.get(`/v1/classicship/${classic_ship_name}`)
//             .then(res =>  {
//                 const classicship = res.body
//                 Use console below to find a ship in command line
//                 console.log('Got classicship! client/api/api.js', classicship)
//                 return classicship
//             })
//             .catch (error =>  {
//                 Log any errors caught, while debugging
//                 console.log('Caught error in client/api/api.js getClassic', error)
//             })
//     }