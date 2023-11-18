function Birthday({ birthdays, deleteBirthday }) {
  return (
    <>
      <ul className="flex flex-col gap-6">
        {birthdays &&
          birthdays.map((birthday) => {
            const { id, name, image, age } = birthday;
            return (
              <li className="flex justify-between" key={id}>
                <div className="flex gap-3">
                  <img
                    className="img-border-circle w-20 h-20"
                    src={image}
                    alt={name}
                  />
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl text-slate-950 font-normal">
                      {name}
                    </h1>
                    <p className="card-age text-base">{age} years</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteBirthday(id)}
                  className="delete-birthday-btn flex w-32 bg-red-600 text-slate-50 h-7 px-1.5"
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Birthday;
