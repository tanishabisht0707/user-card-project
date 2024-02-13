import { useEffect, useState } from "react";

function App() {
  
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [img, setImg] = useState(null);
  const [gender, setGender] = useState(null);
  const [cell, setCell] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        let data = await response.json();
        console.log(data.results[0]);
        setCell(data.results[0].cell);
        setImg(data.results[0].picture.large);
        setFirst(data.results[0].name.first);
        setLast(data.results[0].name.last);
        setGender(data.results[0].gender);
        setEmail(data.results[0].email);
      } catch (err) {
        console.log("Error accured while fetching data :", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg w-ful h-screen  flex items-center justify-center  ">
      <div className="card w-2/4 h-2/4 border border-zinc-300 rounded flex p-1 ">
        <div className="img-area w-2/4 p-8 h-full flex items-center justify-center">
          <img className="w-full h-full rounded" src={img} alt="" />
        </div>
        <div className="info-area gap-3 text-xl text-white w-1/2 h-full flex flex-col  justify-center ">
          <p className="w-full  gap-3 flex text-white">
            <span>{first}</span>
            <span>{last}</span>
          </p>
          <p className="">Gender : {gender}</p>
          <p className="">Phone number : {cell} </p>
          <p className=" ">Email : {email} </p>
          <a className=" bg-black  w-4/5 mx-4 rounded my-4 py-1 hover:bg-slate-800 text-center " href="#">Visit Profile</a>
        </div>
      </div>
    </div>
  );
}

export default App;
