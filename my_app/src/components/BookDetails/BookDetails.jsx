import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArroLeft} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

//  https://openlibrary.org/works/OL45804W.json

const BookDetails = () => {
  const {id} = useParams();
  const[Loading, setLoading] = useState(false);
  const[book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No Description Found",
            title : title,
            cover_img : covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places : subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects : subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  console.log(book);

  return (
    <div>BookDetails</div>
  )
}

export default BookDetails