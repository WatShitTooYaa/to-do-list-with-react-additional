import React from "react";

export default function Object() {
    const murid = [
      {
        nama: "arkan",
        nilai: 100
      },
      {
        nama: "hendri",
        nilai: 123
      },
      {
        nama: "abdol",
        nilai: 1024
      },
      {
        nama: "ghoni",
        nilai: 1013
      },
      {
        nama: "borhaan",
        nilai: 10123
      },
    ]
    const nama = ["arkan", "hendri", "abdul", "ghani", "burhan"]
    const newNama = murid.find((murid) => murid.nama === "arkan")
    
    const angka = [34,9,3,4,12,312,31,12,13]
    const arrAngka = angka

    arrAngka.sort()
    
    console.log(angka)
    console.log(arrAngka)

    // console.log(matSort) s


    return(
        <div className="main-object">

        </div>
    )
}
