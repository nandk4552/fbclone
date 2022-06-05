import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { CameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { useState } from "react";

const InputBox = () => {
  const { data: session } = useSession();
  // taking input text
  const inputRef = useRef(null);
  // taking img file and storing in statevariable
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState();

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    // adding post to the db
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          // upload stuff for img in the form of base64
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          // remove img
          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              // when the upload complete
              storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                db.collection('posts').doc(doc.id).set({
                  postImage: url
                }, {merge: true} )
              })
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  // addding img to db
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  // removing img setting it to 0
  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full flex-grow h-12 bg-gray-100 px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />

          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {/* showing preview */}
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Poto/Video</p>
          <input
            ref={filepickerRef}
            hidden
            onChange={addImageToPost}
            type="file"
            name=""
            id=""
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
