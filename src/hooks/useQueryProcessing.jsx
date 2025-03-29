import { useDispatch } from "react-redux";
import { queryError, querySuccess, submitQuery } from "../store/querySlice";

const mockFetchResults = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve({
          data: [
            { name: "Jan", value: Math.random() * 100 },
            { name: "Feb", value: Math.random() * 100 },
            { name: "Mar", value: Math.random() * 100 },
          ],
        });
      } else {
        reject("Failed to fetch data. Try again!");
      }
    }, 1500);
  });
};

const useQueryProcessing = () => {
  const dispatch = useDispatch();

  const processQuery = async (query) => {
    dispatch(submitQuery());
    try {
      const response = await mockFetchResults(query);
      dispatch(querySuccess(response.data, query));
    } catch (error) {
      dispatch(queryError(error));
    }
  };

  return processQuery;
};

export default useQueryProcessing;
