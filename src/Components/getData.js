import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  const { data } = await axios.get('https://raw.githubusercontent.com/EBEN4REAL/cavista_coding_challenge/main/feed/sample.json')
   return data;
};

 export const useFetchData = () => {
    return useQuery({
        queryKey: ['fetchingData'],
        queryFn: getData,
    });
}