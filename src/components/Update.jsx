import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNote } from "../../features/noteSlice";

const Update = ({
  setVisible,
  editedName,
  editedTitle,
  editedDescription,
  editedId,
  setEditedName,
  setEditedTitle,
  setEditedDescription,
}) => {
  const dispatch = useDispatch()
  const handleEdit = () => {
    const updatedValues = {
      id: editedId,
      name: editedName,
      title: editedTitle,
      description: editedDescription,
      createdAt: new Date().toString()
    }
    dispatch(updateNote(updatedValues));
    setVisible(false);
  }

  return (
    <>
      <div className="w-full h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 flex justify-center items-center">
        <div className="w-1/3 bg-white shadow-md rounded-md p-5">

          <div>
            <div className="relative">
              <h1 className="font-mono text-3xl text-black text-center md-4">
                Update your notes</h1>
              <div
                className="absolute top-0 right-3 w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>

            <input
              placeholder="Name"
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />

            <input
              placeholder="title"
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />

            <textarea
              placeholder="Description"
              maxLength={400}
              rows={5}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />

            <button className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3" onClick={handleEdit}>
              Update Note
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Update;