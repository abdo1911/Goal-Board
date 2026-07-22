import { type FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {

    // function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     const formData = new FormData(event.target as HTMLFormElement);
    //     const goal = formData.get("goal") as string;
    //     const summary = formData.get("summary") as string;
    //     return { goal, summary };
    // }
    
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const goalValue = goal.current?.value;
        const summaryValue = summary.current?.value;
        event.currentTarget.reset();
        if (goalValue && summaryValue) {
            onAddGoal(goalValue, summaryValue);
        }
    }

    return (
        <form className="new-goal-form" onSubmit={handleSubmit}>
            <div className="control">
                <label htmlFor="goal">Your goal</label>
                <input type="text" name="goal" id="goal" ref={goal} placeholder="e.g. Master React" required />
            </div>
            <div className="control">
                <label htmlFor="summary">Short Summary</label>
                <input type="text" name="summary" id="summary" ref={summary} placeholder="e.g. Build real-world projects" required />
            </div>
            <button type="submit">Add Goal</button>
        </form>
    );
}
