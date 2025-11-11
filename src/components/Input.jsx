export default function ({ textArea, children, ...props }) {
  const classes =
    "w-full p-1 border-b-2 round-sm border-stone-300 bg-stone-200 text-stoe-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {children}
      </label>
      {textArea ? (
        <textarea {...props} className={classes}></textarea>
      ) : (
        <input type="text" className={classes} {...props} />
      )}
    </p>
  );
}
