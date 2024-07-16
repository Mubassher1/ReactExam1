import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [count, setCount] = useState(100);
  const [disableButton, setDisableButton] = useState(true);
  const toggleDisableButton = () => {
    setDisableButton(!disableButton);
  };

  const handleAddNotes = (e) => {
    e.preventDefault();

    if (name !== "" && title !== "" && description !== "") {
      const newNote = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createdAt: new Date().toString(),
      };
      setName("");
      setTitle("");
      setDescription("");
      dispatch(addNote(newNote));
      toast.success("Successfully task added", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Please fill up the fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handleCancelNotes = (e) => {
    setName("");
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/4 bg-white shadow-md rounded-md px-4 py-5 box-border">

          <div>
            <h1 className="font-mono text-3xl text-black text-center md-4">Add your task</h1>

            <input
              placeholder="name"
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              placeholder="project title"
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <textarea
              id="Description"
              placeholder="project description"
              maxLength={100}
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
            />

            <h1 className="text-black font-mono font-bold text-[15px] text-right">{count - description.length} {"Character Remaining"}</h1>

            <div className="App">
              <input
                type="checkbox"
                id="demo"
                name="demo"
                value="demo"
                onChange={toggleDisableButton}
              />
              <span> I want to add this task</span><br />

              <button onClick={handleAddNotes} className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3" disabled={disableButton}>
                Save
              </button>
              <button onClick={handleCancelNotes} className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3 ml-3">
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

