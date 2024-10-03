import React, { useEffect } from 'react';
import './style.css';
import data from './data.js';
import axios from 'axios';

export default function App() {
  // const animals = [
  //   {
  //     id: 1,
  //     name: 'sir catsAlot',
  //     species: 'cat',
  //     img: 'https://images.unsplash.com/photo-1726340051943-b9bd0bdba776?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczODk5Mjd8&ixlib=rb-4.0.3&q=85',
  //   },
  //   {
  //     id: 2,
  //     name: 'sir barksAlot',
  //     species: 'dog',
  //     img: 'https://images.unsplash.com/photo-1549545931-59bf067af9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjczOTAwNzZ8&ixlib=rb-4.0.3&q=85',
  //   },
  //   {
  //     id: 3,
  //     name: 'sir howlsAlot',
  //     species: 'dog',
  //     img: 'https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk',
  //   },
  // ];
  useEffect(() => {
    axios.get('http://localhost:5000/single').then(
      (response)=>{
console.log(response)
    }));
  }, []);
  return (
    <div>
      <h1>Jerry Dumas</h1>
      <h2>Web Developer Web Designer</h2>
      <p>React application</p>
      {/* {animals.map((animal) => (
        <ul key={animal.id}>
          <li>Name: {animal.name}</li>
          <li>Type: {animal.species}</li>
          <li>
            <img src={animal.img} alt="animals" className="animalImg" />
          </li>
        </ul>
      ))} */}
    </div>
  );
}
