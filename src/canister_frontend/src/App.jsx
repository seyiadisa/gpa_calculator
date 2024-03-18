import { useState } from 'react';
import { canister_backend } from 'declarations/canister_backend';

import Table from "./Table";

function App() {
  const [courses, setCourses] = useState(3);
  const [gpa, setGpa] = useState(0.0);

  function listTables() {
    let content = [];

    for (let i=0; i<courses; i++) {
      content.push(<li><Table /></li>);
    };

    return content;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let grades = document.getElementsByName("grade");
    let units = document.getElementsByName("units");

    let totalGrades = 0;
    let totalUnits = 0;

    grades.forEach((grade, i) => {
      totalGrades += Number(grade.value) * Number(units[i].value);
    });
    units.forEach((unit) => {
      totalUnits += Number(unit.value);
    });

   fetchResult(totalGrades, totalUnits); 
  }

  function fetchResult(grades, units) {
    canister_backend.calculate(grades, units).then(res => {
      setGpa(res);
    });
  }

  function handleAddCourse() {
    setCourses(courses + 1);
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />

      <form onSubmit={handleSubmit}>
        <ul>
          {listTables()}
        </ul>

        <button onClick={handleAddCourse}>Add course</button>
        <button type='submit'>Calculate</button>
      </form>
      
      <p id='result'>
        Your GPA is {gpa.toFixed(2)}
      </p>
    </main>
  );
}

export default App;
