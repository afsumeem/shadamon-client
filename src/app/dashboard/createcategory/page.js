"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import Home from "@/dashboardComponents/Home";

const CreateCategory = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(1);
  const [editUserId, setEditUserId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [subCategoryNum, setSubCategoruNum] = useState([1]);
  const [tagNum, setTagNum] = useState([1]);
  const [formData, setFormData] = useState({
    // Initialize form data state
    subcategory: "",
    category: "",
    feature: "",
    tagname: "",
    buttonType: "text",
    freePost: "",
    ordering: "",
    date: "",
    file: null,
    status: "Yes",
  });
  const [editedUser, setEditedUser] = useState({
    subcategory: "",
    category: "",
    order: "",
    entrydate: "",
    status: "",
    createdby: "",
    editBy: "",
    input: "",
    feature: "",
  });
  

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await axios.get(
          "https://shadamon-m-server.vercel.app/api/v1/categorys"
        );
        setUsers(res.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    loader();
  }, [render]);
  console.log(users)

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://shadamon-m-server.vercel.app/api/v1/categorys/delete/${id}`
      );
      setRender(render + 1);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async (id) => {
    setEditUserId(id);
    try {
      const updateUser = await axios.get(
        `https://shadamon-m-server.vercel.app/api/v1/categorys?id=${id}`
      );
      const userData = updateUser.data?.data[0];
      setEditedUser({
        subcategory: userData.subcategory,
        category: userData.category,
        order: userData.order,
        entrydate: userData.entrydate,
        status: userData.status,
        createdby: userData.createdby,
        editBy: "Admin",
        input: userData.input,
        feature: userData.feature,
      });
    } catch (error) {
      console.error("Error fetching user data for editing:", error);
    }
  };


  const handleSaveUpdate = async (id) => {
    try {
      await axios.patch(
        `https://shadamon-m-server.vercel.app/api/v1/categorys/update/${id}`,
        editedUser
      );
      console.log(editedUser)
      setEditUserId(null);
      setRender(render + 1);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "subcategories") {
  //     // Update subcategories array
  //     const updatedSubcategories = [...editedUser.subcategories];
  //     updatedSubcategories[e.target.dataset.index] = value;
  //     setEditedUser((prevUser) => ({
  //       ...prevUser,
  //       subcategories: updatedSubcategories,
  //     }));
  //   } else if (name === "feature") {
  //     // Update features array
  //     const updatedFeatures = [...editedUser.features];
  //     updatedFeatures[e.target.dataset.index] = value;
  //     setEditedUser((prevUser) => ({
  //       ...prevUser,
  //       features: updatedFeatures,
  //     }));
  //   } else {
  //     // For other fields, update normally
  //     setEditedUser((prevUser) => ({
  //       ...prevUser,
  //       [name]: value,
  //     }));
  //   }
  // };
  
  const handleAddSubcategory = () => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      subcategories: [...prevUser.subcategories, ""],
    }));
  };

  const handleSubcategoryChange = (index, value) => {
    const updatedSubcategories = [...editedUser.subcategories];
    updatedSubcategories[index] = value;
    setEditedUser((prevUser) => ({
      ...prevUser,
      subcategories: updatedSubcategories,
    }));
  };

  const handleCategoryModal = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://shadamon-m-server.vercel.app/api/v1/categorys/add",
        editedUser
      );
      setEditedUser({
        subcategories: [], // Reset subcategories array
        category: "",
        order: "",
        entrydate: "",
        status: "",
        createdby: "",
        editBy: "",
        input: "",
        feature: "",
      });
      setRender(render + 1);
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  // const handleCategory = async (e) => {
  //   e.preventDefault();
  // };


  // Add subcategory form 


  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "file" ? files[0] : value, // Handle file input separately
    });
  };

  // Function to handle form submission
  const handleCategory = async (e) => {
    e.preventDefault();
    try {
      // Make PATCH request to your server with formData and resource identifier
      const response = await fetch(`your-api-endpoint/${resourceId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Updated data:", data);
    } catch (error) {
      console.error("Error updating resource:", error);
    }
  };

  const categories = users?.map((category, index) => category.category);
  const features = users?.map((feature, index) => feature.feature);
  // console.log(features)
  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg ">
          <h5 className=" flex items-center border-b-2 p-2 gap-3">
            <FaPlusCircle /> New category
          </h5>
          <div className=" flex flex-col justify-between w-full">
            <div className="  p-5">
              {/* new category section form */}
              <form
                onSubmit={handleCategory}
                className=" w-full rounded-lg shadow-xl p-5"
              >
                {/* 1st half */}
                <div className="flex justify-between">
                  {/* 1st col  */}
                  <div className=" flex flex-col gap-3">
                    {/* sub category name */}
                    {subCategoryNum?.map((sub) => (
                      <div
                        key={sub}
                        className=" flex items-center gap-1 rounded-sm"
                      >
                        <input
                          type="text"
                          name="subcategory"
                          placeholder="Sub Categorie Name"
                          onChange={handleSubcategoryChange}
                          className=" border p-2"
                        />
                        <button
                          onClick={() =>
                            setSubCategoruNum((prvsub) => [...prvsub, "2"])
                          }
                          className=" p-2 bg-gray-200 rounded-sm"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() =>
                            setSubCategoruNum((prevSub) =>
                              prevSub.length > 1
                                ? prevSub.slice(0, -1)
                                : prevSub
                            )
                          }
                          className=" p-2 bg-gray-200 rounded-sm"
                        >
                          <FaMinus />
                        </button>
                      </div>
                    ))}
                    {/* Categorie */}
                    <div className=" border p-2  rounded-sm w-[235px]">
                      <select
                        name="Category"
                        id=""
                        className=" outline-none border-none"
                      >
                        <option>Select Category</option>
                        {/* Map over the categories array to generate options dynamically */}
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* select feature  */}
                    <div className=" border p-2  rounded-sm w-[235px]">
                      <select
                        name="feature"
                        id=""
                        className=" outline-none border-none"
                      >
                        <option>Select Feature</option>
                        {/* Map over the features array to generate options dynamically */}
                        {features.map((feature, index) => (
                          <option key={index} value={feature}>
                            {feature}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Tage name */}
                    {tagNum?.map((tag) => (
                      <div
                        key={tag}
                        className=" flex items-center gap-1 rounded-sm"
                      >
                        <input
                          type="text"
                          name="tagname"
                          placeholder="Tag Name"
                          className=" border p-2"
                        />
                        <button
                          onClick={() =>
                            setTagNum((prvsub) => [...prvsub, "2"])
                          }
                          className=" p-2 bg-gray-200 rounded-sm"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() =>
                            setTagNum((prevSub) =>
                              prevSub.length > 1
                                ? prevSub.slice(0, -1)
                                : prevSub
                            )
                          }
                          className=" p-2 bg-gray-200 rounded-sm"
                        >
                          <FaMinus />
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* 2nd col in first half */}
                  <div className=" flex flex-col gap-3">
                    {/* button type */}
                    <div className=" border p-2  rounded-sm w-[235px]">
                      <select
                        name="Category"
                        id=""
                        className=" outline-none border-none "
                      >
                        <option value="text">Button Type</option>
                        <option value="text">Text</option>
                        <option value="radio">Radio</option>
                        <option value="checkbox">Check Box</option>
                        <option value="input">Input</option>
                      </select>
                    </div>
                    {/* Free post */}
                    <div className=" flex items-center gap-1 rounded-sm">
                      <input
                        type="text"
                        name="subcategory"
                        placeholder="Free post"
                        className=" border p-2"
                      />
                    </div>
                    {/* Ordering */}
                    <div className=" flex items-center gap-1 rounded-sm">
                      <input
                        type="text"
                        name="subcategory"
                        placeholder="Ordering"
                        className=" border p-2"
                      />
                    </div>
                    {/* Date */}
                    <div className=" flex items-center gap-1 rounded-sm">
                      <input
                        type="date"
                        name="subcategory"
                        placeholder="Sub Categorie Name"
                        className=" border p-2"
                      />
                    </div>
                    {/* file upload */}
                    <div className=" flex items-center gap-1 rounded-sm">
                      <input
                        type="file"
                        name="subcategory"
                        placeholder="Sub Categorie Name"
                        className=" border p-2"
                      />
                    </div>
                    {/* Status */}
                    <div className=" flex items-center gap-5 rounded-sm">
                      <h6>Status</h6>
                      <input
                        type="radio"
                        name="subcategory"
                        placeholder="Status"
                        className=" border p-2"
                      />{" "}
                      <span>Yes</span>
                      <input
                        type="radio"
                        name="subcategory"
                        placeholder="Status"
                        className=" border p-2"
                      />{" "}
                      <span>No</span>
                    </div>
                  </div>
                </div>
                {/* buttons */}
                <div className=" flex gap-3 my-10">
                  <button className="hover:opacity-70 active:opacity-40 bg-[#0666cd] text-white py-1 text-center rounded-sm w-4/5">
                    Save
                  </button>
                  <button className="hover:opacity-70 active:opacity-40 py-1 text-center rounded-sm w-1/5 border">
                    Cancel
                  </button>
                </div>
              </form>
              {/* display category */}
              <div className=" w-full rounded-lg shadow-xl p-5">
                {/* header */}
                <div className=" flex justify-end gap-3 border-b-2 py-3">
                  <h6>Create Categorie </h6>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="hover:opacity-70 active:opacity-40 p-2 bg-gray-200 rounded-sm"
                  >
                    <FaPlus />
                  </button>
                </div>
                {/* Category Table */}
                <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Input</th>
                        <th>Order</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table Datas */}
                      <>
                        {isLoading ? (
                          <div className="flex flex-col gap-4 ">
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                          </div>
                        ) : (
                          <>
                            {users.map((user) => (
                              <tr key={user._id}>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="category"
                                      type="text"
                                      value={editedUser.category}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.category}</p>
                                  )}
                                </td>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="input"
                                      type="text"
                                      value={editedUser.input}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.input}</p>
                                  )}
                                </td>

                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="order"
                                      type="text"
                                      value={editedUser.order}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.order}</p>
                                  )}
                                </td>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="status"
                                      type="text"
                                      value={editedUser.status}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.status}</p>
                                  )}
                                </td>
                                <th>
                                  {editUserId === user._id ? (
                                    <button
                                      onClick={() => handleSaveUpdate(user._id)}
                                      className="btn btn-ghost btn-xs"
                                    >
                                      Save
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleUpdate(user._id)}
                                      className="btn btn-ghost btn-xs"
                                    >
                                      Edit
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(user._id)}
                                    className="btn btn-ghost btn-xs text-red-600"
                                  >
                                    Delete
                                  </button>
                                </th>
                              </tr>
                            ))}
                          </>
                        )}
                      </>
                    </tbody>
                    {/* foot */}
                  </table>
                </div>
              </div>
            </div>
            {/* display feature */}
            <div className=" p-5">
              <div className=" w-full rounded-lg shadow-xl p-10">
                {/* header */}
                <div className=" flex justify-end gap-3 border-b-2 py-3">
                  <h6>Create Feature </h6>
                  <button className=" p-2 bg-gray-200 rounded-sm">
                    <FaPlus />
                  </button>
                </div>
                {/* Category Table */}
                <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Feature Name</th>
                        <th>Input</th>
                        <th>Order</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table Datas */}
                      <>
                        {isLoading ? (
                          <div className="flex flex-col gap-4 ">
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                            <div className="skeleton h-10 w-full"></div>
                          </div>
                        ) : (
                          <>
                            {users.map((user) => (
                              <tr key={user._id}>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="feature"
                                      type="text"
                                      value={editedUser.feature}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.feature}</p>
                                  )}
                                </td>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="input"
                                      type="text"
                                      value={editedUser.input}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.input}</p>
                                  )}
                                </td>

                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="order"
                                      type="text"
                                      value={editedUser.order}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.order}</p>
                                  )}
                                </td>
                                <td>
                                  {editUserId === user._id ? (
                                    <input
                                      name="status"
                                      type="text"
                                      value={editedUser.status}
                                      onChange={handleChange}
                                      className="border p-2"
                                    />
                                  ) : (
                                    <p>{user.status}</p>
                                  )}
                                </td>
                                <th>
                                  {editUserId === user._id ? (
                                    <button
                                      onClick={() => handleSaveUpdate(user._id)}
                                      className="btn btn-ghost btn-xs"
                                    >
                                      Save
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleUpdate(user._id)}
                                      className="btn btn-ghost btn-xs"
                                    >
                                      Edit
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(user._id)}
                                    className="btn btn-ghost btn-xs text-red-600"
                                  >
                                    Delete
                                  </button>
                                </th>
                              </tr>
                            ))}
                          </>
                        )}
                      </>
                    </tbody>
                    {/* foot */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Name Modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal">
        <div style={{ maxWidth: "50rem" }} className="modal-box">
          <div className=" flex justify-start gap-3 border-b-2 py-3">
            <button className=" p-2 bg-gray-200 rounded-sm">
              <FaPlus />
            </button>
            <h6>Create Category Name </h6>
          </div>

          {/* <p className="py-4">Press ESC key or click outside to close</p> */}
          <form
            onSubmit={handleCategoryModal}
            className=" my-5 "
            method="dialog"
          >
            <div className=" flex items-center justify-between">
              {/* row 1 */}
              <div className=" flex flex-col gap-3">
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  placeholder="Category name.."
                  className=" border p-2"
                />
                <input
                  type="text"
                  name="entrydate"
                  value={`${new Date().toDateString()}`}
                  onChange={handleChange}
                  className=" border p-2"
                />
                <input
                  type="number"
                  name="order"
                  onChange={handleChange}
                  placeholder="Ordering.."
                  className=" border p-2"
                />
              </div>
              {/* row 2 */}
              <div className=" flex flex-col gap-3">
                <input type="file" name="categorypic" className=" border p-2" />
                {/* Status */}
                <div className=" flex items-center gap-5 rounded-sm">
                  <h6>Status</h6>
                  <input
                    type="radio"
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                    className=" border p-2"
                  />{" "}
                  <span>Yes</span>
                  <input
                    type="radio"
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                    className=" border p-2"
                  />{" "}
                  <span>No</span>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className=" flex gap-3 my-10">
              <button
                type="submit"
                className=" hover:opacity-70 active:opacity-40 bg-[#0666cd] text-white py-1 text-center rounded-sm w-4/5"
              >
                Save
              </button>
              <button
                
                className=" py-1 text-center rounded-sm w-1/5 border"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CreateCategory;
