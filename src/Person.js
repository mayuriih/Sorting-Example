import React, { useMemo } from "react";

const useSortableData = persons => {
  const [sortConfig, setSortConfig] = React.useState(null);

  const sortedPersons = useMemo(() => {
    let sortPersons = [...persons];

    if (sortConfig !== null) {
      console.log(sortConfig);
      sortPersons.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortPersons;
  }, [persons, sortConfig]);

  const requestSort = key => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { persons: sortedPersons, requestSort, sortConfig };
};

const Person = props => {
  const { persons, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
      <button
        type="button"
        onClick={() => requestSort("name")}
        className={getClassNamesFor("name")}
      >
        Sort
      </button>

      <div>
        {persons.map(person => (
          <h4>
            {person.name} {person.lname}
          </h4>
        ))}
      </div>
    </>
  );
};

export default Person;
