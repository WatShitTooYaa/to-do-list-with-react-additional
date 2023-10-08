// import Navbar from "./navbar"
import "../css/home.css"

export default function Home(){
  const evenNumber = []

  let a = 1
  let i = 0;
  while(a<=100){
      if(a % 2 == 0){
          evenNumber[i] = a
          i++;
      }
      a++;
  }
  // for (let i = 0; i < evenNumber.length ; i++){
  //   console.log(evenNumber[i])
  // }
  console.log(evenNumber)
  // evenNumber.forEach(arr => {
  //     console.log(arr)
  // })

    return(
        <div className="home">
            {/* <Navbar/> */}
            <h1 className="h1-test">
                Home
            </h1>
            <p className="p1-test">
                Hello Reacter 
            </p>
            <div className="kotak"></div>
        </div>
    )
}