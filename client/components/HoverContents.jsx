// Here is the new Functional Component for Hovering the Contents of Sections navigation
// On google search I typed react component with hover and toggle and found this  
// https://www.appsloveworld.com/reactjs/100/11/react-js-toggle-adding-a-class-on-hover

// import React, {useState} from 'react'
// import {HashLink as Link} from 'react-router-hash-Link'

// function HoverContents ()   {

//     const [ishovered, setIsHovered] = useState(false);


//     May not need useEffect because there is no component mounting   
//     useEffect(() => {
//         handleMouseHover()

//     });

//     I think it just needs to handle a toggling of the hover through using const
    
//     const toggleHover = handleMouseHover() => setIsHovered(!hovered)

//     return  (
//         <>

//         <div className = "contents"    
//             onMouseEnter = {handleMouseHover}
//             onMouseLeave = {handleMouseHover}>

//             <div className = "contentsHead">
//                 <h3>Contents</h3>
//             </div>

//             {isHovering && 
//             <div className = "contentsMenu">
//                 <ol> 
//                     <li><Link className = "early" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#early`}>Early Life</Link></li> 
//                     <li><Link className = "cruise" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#cruise`}>As a Cruise Ship</Link></li>
//                     <li><Link className = "mem" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#mem`}>Memorable Moments</Link></li>
//                     <li><Link className = "plans" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#plans`}>Ship Plans</Link></li>
//                     <li><Link className = "final" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#final`}>Final Years</Link></li> 
//                 </ol>
//             </div>
//             ?
//             <div className = "contentsMenu">
//                 <ol> 
//                     <li><Link className = "early" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#early`}>Early Life</Link></li> 
//                     <li><Link className = "cruise" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#cruise`}>As a Cruise Ship</Link></li>
//                     <li><Link className = "mem" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#mem`}>Memorable Moments</Link></li>
//                     <li><Link className = "plans" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#plans`}>Ship Plans</Link></li>
//                     <li><Link className = "final" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#final`}>Final Years</Link></li> 
//                 </ol>
//             </div>    

//             }

//         </div>
//         </>
//     )
// }


// // export default HoverContents
// End of HoverContents Functional component



// Convert this HoverContents below to Functional Component above

// import React, { useEffect } from 'react'
// import {HashLink as Link} from 'react-router-hash-Link'


// class HoverContents extends React.Component {
//     constructor(props)  {
//         super(props) 
        
//         this.state = {
//             isHovering: false
//         }

//         this.handleMouseHover = this.handleMouseHover.bind(this)
//     }

//     handleMouseHover()  {
//         this.setState(this.toggleHoverState)
//     }

//     toggleHoverState(state) {
//         return  {
//             isHovering: !state.isHovering
//         }
//     }

//     render()    {
//         return  (
//             <React.Fragment>

            /* We need to put the hover events in the overall contents div, so that it controls both the 
            contents heading and contents menu when a user hovers. */

            /* <div className = "contents"    
                onMouseEnter = {this.handleMouseHover}
                onMouseLeave = {this.handleMouseHover}
                >
                <div className = "contentsHead">
                    <h3>Contents</h3>
                </div>   

                {this.state.isHovering && 
        
                <div className = "contentsMenu">
                    <ol> 
                        <li><Link className = "early" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#early`}>Early Life</Link></li> 
                        <li><Link className = "cruise" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                        <li><Link className = "mem" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#mem`}>Memorable Moments</Link></li>
                        <li><Link className = "plans" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#plans`}>Ship Plans</Link></li>
                        <li><Link className = "final" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#final`}>Final Years</Link></li> 
                    </ol>
                </div> 
                }    
            </div>     
            
            </React.Fragment>
        )
    }
}

export default HoverContents */