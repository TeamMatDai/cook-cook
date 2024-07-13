const RecipePresence = ({ weeklyRecipePresence }) => (
  <div className="flex gap-6 text-center justify-between h-5">
    {weeklyRecipePresence.map((presence: any, index: number) => (
      <div key={index} className="w-5 h-5 mt-[2px] mx-auto flex justify-center items-center">
        {!!presence && <span className="w-1 h-1 rounded-full bg-red-500" />}
      </div>
    ))}
  </div>
);

export default RecipePresence;
