import { type PropsWithChildren } from "react";
// import type {ReactNode} from "react";
// import {type FC} from "react";

// -----------------------------------------Props-------------------------------------------------

// type CourseGoalProps = {
//   title: string;
//   description: string;
// }

// interface CourseGoalPropsInter {
//   title: string;
//   description: string;
// }

// export default function CourseGoal({title, description}: {title: string, description: string}) {
//   return <article>
//    <div>
//     <h2>{title}</h2>
//     <p>{description}</p>
//    </div>
//    <button>Delete</button>
//   </article>;
// }

// export default function CourseGoal({title, description}: CourseGoalProps) {
//   return <article>
//    <div>
//     <h2>{title}</h2>
//     <p>{description}</p>
//    </div>
//    <button>Delete</button>
//   </article>;
// }

// -----------------------------------------Props With Children-------------------------------------------------


// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: () => void;
}>

export default function CourseGoal({title, children, onDelete}: CourseGoalProps) {
  return <article>
   <div>
    <h2>{title}</h2>
    {children}
   </div>
   <button onClick={onDelete}>Delete</button>
  </article>;
}

// -----------------------------------------FC-------------------------------------------------

// const CourseGoal = ({title, children}: PropsWithChildren<{title: string}>) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// const CourseGoal: FC<PropsWithChildren<{title: string}>> = ({title, children}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// ------------------------------------------------------------------------------------------

