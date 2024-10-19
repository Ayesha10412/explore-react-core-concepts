// export default function Todo({task,isDone}){
   

//         if(isDone===true){
//           return   <li className="item">Finished: {task}</li>

//         }
//         else{
//             return <li>Work on: {task}</li>

//         }
    
// }

// conditional rendering 2

// export default function Todo({task,isDone}){
   

//         if(isDone===true){
//           return   <li className="item">Finished: {task}</li>

//         }
   
//             return <li>Work on: {task}</li>
    
// }

// conditional rendering 3
// export default function Todo({task,isDone}){
   

//       return(
//         <li className="item">{isDone? 'Finished':'Work on'} :{task}</li>
//       )
    
// }

// conditional rendering 4

// export default function Todo({task,isDone}){ 
//   return  (
// <li className="item">{task} {isDone && ':Done'}</li>
//   )
//     }

// conditional rendering 5
    // export default function Todo({task,isDone}){ 
    //     return  (
    //   <li className="item">{task} {isDone || ':Do it'}</li>
    //     )
    //       } 


    // option 6

    export default function Todo({task,isDone}){
   
let listItem;
        if(isDone===true){
            listItem=   <li className="item">Finished: {task}</li>

        }
        else{
            listItem= <li>Work on: {task}</li>

        }
    return listItem
}
