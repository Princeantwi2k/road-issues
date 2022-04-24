import { collection, addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../Firebase/config";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./create.css";

const CreateProject = () => {
  const [newtitle, setnewtitle] = useState("");
  const [newcontent, setnewcontent] = useState("");
  const [file, setFile] = useState([]);
  const addcontent = collection(db, "projects");

  const metadata = { contentType: "image/jpeg" };

  const storage = getStorage();
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(addcontent, { title: newtitle, content: newcontent });
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: 100 }}>
        <form className="white">
          <h5 className="grey-text  text-darken-3">comment your issue</h5>
          <div className="input-field"></div>
          <div className="input-field">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={(event) => {
                setnewtitle(event.target.value);
              }}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="content"> comment your issues</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={(event) => {
                setnewcontent(event.target.value);
              }}
              required
            ></textarea>
          </div>
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
          <div className="input-field">
            <button
              className="btn pink lighten z-depth-0"
              onClick={handleSubmit}
            >
              <Link to="/boad" className="buttom brand-logos">
                Create
              </Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateProject;
