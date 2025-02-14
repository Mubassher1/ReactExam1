import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../features/noteSlice";
import Update from "../components/Update";

const Note = () => {
    const initialShow = 6;
    const [next, setNext] = useState(initialShow); 
    const [visible, setVisible] = useState(false); 
    const [editedName, setEditedName] = useState("");
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedId, setEditedId] = useState();

    const { notes } = useSelector((state) => state.note);   
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };

    const handleLoadMore = () => {
        setNext((prev) => prev + 3);
    };

    const handleUpdate = (note) => {
        setVisible(true);  
        setEditedName(note.name);
        setEditedTitle(note.title);
        setEditedDescription(note.description);
        setEditedId(note.id);
    };
   
    if (visible) {
        return (
            <Update
                setVisible={setVisible}
                editedName={editedName}
                editedTitle={editedTitle}
                editedDescription={editedDescription}
                editedId={editedId}
                setEditedName={setEditedName}
                setEditedTitle={setEditedTitle}  
                setEditedDescription={setEditedDescription} 
            />    
        );
    }

    return (
        <>
            <Helmet>
                <title>Notes</title>
            </Helmet>

            <div className="container">
                <div className="grid grid-cols-3 gap-3 mt-5">
                  
                    {notes.slice(0, next).map((note) => (
                        <div className="shadow-sm bg-white rounded-md px-4 py-3 border border-slate-500"
                            key={note.id}>

                            <h3 className="font-mono text-xl font-bold">{note.name}</h3>
                            <h3 className="font-mono text-xl font-bold">{note.title}</h3>
                            <p className="font-sans font-normal text-lg">{note.description}</p>
                            <span className="text-base font-mono text-slate-500">
                                {formatDistance(note.createdAt, new Date(), { addSuffix: true, })}
                            </span>

                            <div className="flex items-center justify-end gap-x-3">
                                <button className="px-5 py-2 bg-red-500 text-white font-medium rounded-md" onClick={() => handleDelete(note.id)}>
                                    Delete
                                </button>
                                <button className="px-5 py-2 bg-slate-500 text-white font-medium rounded-md" onClick={() => handleUpdate(note)}>
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {notes.length > next && (
                    <div className="text-center">
                        <button className="px-4 py-2 bg-cyan-800 rounded-md text-white mt-5" onClick={handleLoadMore}>
                            Load Note
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Note;


