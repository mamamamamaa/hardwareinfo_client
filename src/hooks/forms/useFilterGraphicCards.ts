import { useMemo, useState } from "react";
import { rows } from "../../constants.tsx";

export const useFilterGraphicCards = (initialData = rows) => {
  const [filters, setFilters] = useState({
    modelName: "",
    itemDescription: "",
    vendor: "",
    dieSize: "",
    architecture: "",
    gpuModel: "",
    tdp: "",
    vramType: "",
    id: undefined,
  });

  const updateFilter = (field: string, value: string | number | undefined) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const filteredData = useMemo(() => {
    return [...initialData].filter((card) => {
      return (
        (filters.modelName === "" ||
          card.modelName.toLowerCase().includes(filters.modelName.toLowerCase())) &&
        (filters.itemDescription === "" ||
          card.itemDescription.toLowerCase().includes(filters.itemDescription.toLowerCase())) &&
        (filters.vendor === "" || card.vendor === filters.vendor) &&
        (filters.dieSize === "" || card.dieSize === filters.dieSize) &&
        (filters.architecture === "" || card.architecture === filters.architecture) &&
        (filters.gpuModel === "" || card.gpuModel === filters.gpuModel) &&
        (filters.tdp === "" || card.tdp === filters.tdp) &&
        (filters.vramType === "" || card.vramType === filters.vramType) &&
        card.id !== filters.id
      );
    });
  }, [filters, initialData]);

  const handleEdit = (card: (typeof rows)[0]) => {
    rows.forEach((row, index) => {
      if (card.id === row.id) {
        rows[index] = card;
      }
    });
    updateFilter("id", undefined);
  };

  const handleDelete = (id: number) => {
    updateFilter("id", id);
    const indexOfItemToRemove = rows.findIndex((row) => row.id === id);

    if (indexOfItemToRemove !== -1) {
      rows.splice(indexOfItemToRemove, 1);
      console.log(rows); // This will contain the modified array without the element with id 3
    } else {
      console.log("Element with id", id, "not found");
    }
  };

  const handleAdd = (newCard: any) => {
    rows.push(newCard);
    updateFilter("id", undefined);
  };

  return { filters, updateFilter, filteredData, handleEdit, handleDelete, handleAdd };
};
