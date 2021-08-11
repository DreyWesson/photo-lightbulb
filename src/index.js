import React from "react";
import ReactDOM from "react-dom";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { uuid } from "uuidv4";
const GROUP2 = [
  "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1590317147887-72753a407931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
  "https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} alt="lightbulb" style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

function App() {
  return (
    <LightgalleryProvider>
      <h1 style={{ textAlign: "center" }}>Photo Lightbulb</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {GROUP2.map((p) => (
          <PhotoItem key={uuid()} image={p} group="group2" />
        ))}
      </div>
    </LightgalleryProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
