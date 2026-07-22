// import CourseGoal from './components/CourseGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import goalsImage from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal(goal: string, summary: string) {
      setGoals(prevGoals=>{
        const newGoal: CourseGoal = {
          id: Math.random(),
          title: goal,
          description: summary
        }
        return [...prevGoals, newGoal];
      });
    }

    function handleDeleteGoal(id: number) {
      setGoals(prevGoals=>{
        return prevGoals.filter(goal=>goal.id !== id);
      });
    }

    return (<main>

      <Header image={{src: goalsImage, alt: 'A List of Goals'}} >
        <h1>Your Course Goals</h1>
      </Header>

      {/* <CourseGoal 
        title="Learn React" 
        description="Learn React in 2026"
      /> */} 

      {/* <button style={{marginBottom: '2rem'}} onClick={handleAddGoal}>Add Goal</button> */}
      
      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

      {/* <CourseGoal title="Learn React" >
        <p>Learn React in 2026</p>
      </CourseGoal> */}

    </main>);
}
