import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} onDelete={() => onDeleteGoal(goal.id)} >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}