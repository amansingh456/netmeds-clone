import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postToCart } from "../Redux/actions";

const ProductPage = (id) => {
  const [data, setData] = useState(null);


  const params = useParams();
  console.log(id);

  useEffect(() => {
    const user_id = params.id;
    console.log(user_id);

    axios({
      url: `https://netmeds-server-data.herokuapp.com/api/data/${user_id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .post("https://netmeds-server-data.herokuapp.com/api/cart", data)
      .then((res) => {
        alert("post success");
      })
      .catch((e) => {
        alert("post failed");
        console.log(e);
      });
  }, [params.user_id]);

  

  return (
    <>
     
    </>
  );
};

export default ProductPage;
