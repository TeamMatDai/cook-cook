type DayPresence = 0 | 1;
type WeeklyRecipePresence = Record<number, DayPresence> & { length: 7 };

interface RecipePresenceProps {
  weeklyRecipePresence: WeeklyRecipePresence;
}

const RecipePresence = ({ weeklyRecipePresence }: RecipePresenceProps) => (
  <div className="flex gap-6 text-center justify-between h-5">
    {Array.from({ length: 7 }, (_, index) => (
      <div key={index} className="w-5 h-5 mt-[2px] mx-auto flex justify-center items-center">
        {!!weeklyRecipePresence[index] && <span className="w-1 h-1 rounded-full bg-red-500" />}
      </div>
    ))}
  </div>
);

export default RecipePresence;
