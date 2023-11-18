import { useState } from "react";
import Birthdays from "./data";
import BirthdayList from "./components/Birthday";
import BirthdayTitle from "./components/BirthdayTitle";

function App() {
  const [birthdays, setBirthdays] = useState(Birthdays);
  const birthdayslength = birthdays.length;
  console.log(birthdays);
  console.log(birthdayslength);
  const deleteBirthday = (id) => {
    setBirthdays((prev) => {
      return prev.filter((birthday) => {
        return birthday.id !== id;
      });
    });
  };
  return (
    <div className="cite-container my-auto">
      <BirthdayTitle birthdayslength={birthdayslength} />
      <BirthdayList birthdays={birthdays} deleteBirthday={deleteBirthday} />
      {birthdayslength ? (
        <button
          className="clear-btn w-full bg-pink-500 mt-4 pt-1.5 pb-2 text-gray-100 font-mono"
          onClick={() => setBirthdays([])}
        >
          Clear All
        </button>
      ) : (
        <button
          className="clear-btn w-full bg-blue-600 mt-4 pt-1.5 pb-2 text-gray-100 font-mono"
          onClick={() => setBirthdays(Birthdays)}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
