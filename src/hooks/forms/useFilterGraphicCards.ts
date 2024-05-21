import { useMemo, useState } from "react";
import { rows } from "../../constants.ts";

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
  });

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
        (filters.vramType === "" || card.vramType === filters.vramType)
      );
    });
  }, [filters, initialData]);

  const updateFilter = (field: string, value: string | number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return { filters, updateFilter, filteredData };
};
