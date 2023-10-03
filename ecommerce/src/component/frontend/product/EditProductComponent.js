import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProductComponent = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
  });
  const [categoryname, setCategory] = useState([]);
  const [image, setImage] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/get/${id}`)
      .then((response) => {
        console.log(response.data.product);
        setProductData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/get")
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data.products);
        setCategory(response.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Handle regular form fields
    if (type !== "file") {
      setProductData((prevData) => ({
        ...prevData, // to copy,rest operator
        [name]: value,
      }));
    } else {
      // Handle the image file if files array exists
      if (files && files.length > 0) {
        setImage(files[0]);
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    formData.append("quantity", productData.quantity);
    formData.append("category", productData.category);

    // Only append the image if it's not null or undefined
    if (image !== null && image !== undefined) {
      formData.append("image", image);
    }

    try {
      axios
        .put(`http://localhost:5000/product/update/${id}`, formData, config)
        .then((response) => {
          console.log(response.data);
          alert(`Success: ${response.data.msg}`);

          setTimeout(() => {
            // Redirect to product view after 1 second
            window.location.href = "/product/view/";
          }, 1000);
        });
    } catch (err) {
      alert(`Error: ${err.response.data.msg}`);
      console.log(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={productData.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={productData.price || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={productData.description || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={productData.quantity || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={productData.category || ""}
          onChange={handleChange}
        >
          {categoryname.map((category) => (
           
            <option value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductComponent;
