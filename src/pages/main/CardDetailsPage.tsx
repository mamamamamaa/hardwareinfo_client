import { useParams } from "react-router-dom";

export const CardDetailsPage = () => {
  const { id } = useParams();
  return <>{id}</>;
};
