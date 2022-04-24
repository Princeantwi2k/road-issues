import React from "react";
import { db } from "../Firebase/config";
import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

const ProjectSummery = () => {
  const [projects, setprojects] = useState([
    { title: "Loading ...", id: "initial" },
  ]);

  const deletecontent = async (id) => {
    const ProjectDoc = doc(db, "projects", id);
    await deleteDoc(ProjectDoc);
  };
  useEffect(
    () =>
      onSnapshot(collection(db, "projects"), (snapshot) => {
        setprojects(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),

    []
  );
  return (
    <>
      {projects.map((projects) => (
        <div className="card z-depth-0 project-summary" key={projects.id}>
          <div className="card-content grey-text text-darker-3">
            <span className="card-title days">{projects.title}</span>
            <p className="day">{projects.content}</p>
            <p className="grey-text daytime"> 3rd september 2022</p>
            <button
              className="btn black lighten z-depth-0 daybutton"
              onClick={() => deletecontent(projects.id)}
            >
              {" "}
              delete comment
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectSummery;
