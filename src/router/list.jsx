// import React from "react"
import { React, useState, useEffect } from "react"
import 'react-datepicker/dist/react-datepicker.css';
import "../css/list.css"


export function ToDo(){
    const [list, setList] = useState([["senin", "menes"],["seloso", 2],["rebo"],["kemis"],["jemah"],["setu"],["ahad"]])
    const [editedTugas, setEditedTugas] = useState('')
    const [tugas, setTugas] = useState('')
    const [inputEditTugas, setInputEditTugas] = useState('')
    const [tanggal, setTanggal] = useState()
    const [hari, setHari] = useState('')
    const [editBoxState, setEditBoxState] = useState(false)
    const [editHari, setEditHari] = useState('')


    const tambahTugas = (tugas, hari) => {
        if(hari === ''){
            console.log("silahkan pilih hari terlebih dahulu")
        }
        else {
            const editArr = [...list]
            editArr[hari] = [...editArr[hari], tugas]
            console.log(editArr)
            setList(editArr)
            setTugas('')
            setHari('')
        }
    }

    const hapusTugas = (hari, index) => {
        const delArr = [...list]
        delArr[hari] = delArr[hari].filter((_, i) => index !== i)
        console.log(delArr)
        setList(delArr)
        // setList(newArr)
    }
    
    const editTugas = (tugas) => {
        if(tugas === ''){
            console.log("masukkan tugas yang diedit terlebih dahulu")
        }
        else{
            const editArr = [...list]
            const hari = editHari[0]
            const index =  editHari[1]
            editArr[hari][index] = tugas
            setInputEditTugas('')
            setList(editArr)
            setEditBoxState(!editBoxState)
        }
    }

    const test = () => {
        class Car { }
        const car = new Car();
        console.log(typeof Car);
    }

    const editBox = (tugas, hari, index) => {
        if(editBoxState === false){
            setEditBoxState(true)
            setEditedTugas(tugas)
            const arrHari = [hari, index]
            setEditHari(arrHari)
        }
        else {
            setEditedTugas('')
            setEditBoxState(false)
        }
    }


    const handleTanggal = (event) => {
        setTanggal(event.target.value)
    }

    const handleHari = (event) => {
        setHari(event.target.value)
    }


    const printValueList = (hari) => {
        return list[hari].map((listTugas, index) => (
            <li key={index}>
                - {listTugas}
                <button onClick={() => hapusTugas(hari, index)}>hapus</button>
                <button onClick={() => editBox(listTugas, hari, index)}>edit</button>
            </li>
        ))
    }

    const testArr = () => {
        const arr = [1,2,3,4,5,"asd", "aksdak", 9]
        const newArr = [...arr]
        console.log(`${arr} + ${newArr} `)
    }

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(list))
        console.log("data berhasil disimpan")
    }, [list]);

    useEffect(() => {
        // printValueList()
        const name = JSON.parse(localStorage.getItem('name'))
        // editTugas()
        if (name){
            console.log(name)
            setList(name)
            console.log("data berhasil diambil")
        }
        else{
            console.log("data gagal diambil")
        }
    }, []);

    return(
        <div className="main-todo">
            <div className="title-todo">
                To Do List
            </div>

            <div className="input-todo">
                <label htmlFor="input-tugas"> tugas </label>
                <input type="text" className="tugas" value={tugas} onChange={(event) => setTugas(event.target.value)}/>
                <select name="hari" id="hari" value={hari} onChange={handleHari} >
                    <option value="" disabled> hari </option>
                    <option value="0" onClick={() => setHari(0)}>senin</option>
                    <option value="1" onClick={() => setHari(1)}>selasa</option>
                    <option value="2" onClick={() => setHari(2)}>rabu</option>
                    <option value="3" onClick={() => setHari(3)}>kamis</option>
                    <option value="4" onClick={() => setHari(4)}>jumat</option>
                    <option value="5" onClick={() => setHari(5)}>sabtu</option>
                    <option value="6" onClick={() => setHari(6)}>ahad</option>
                </select>
                <input type="date" name="tanggal" id="tanggal" onChange={handleTanggal}/>
                <button onClick={() => tambahTugas(tugas, hari)}> tambah </button>
            </div>
            <div className="cek">
                cek input {tugas} <br />
                sekarang hari {hari}
                {/* cek tanggal {tanggal} */}
            </div>

            <div className="list-todo">
                <div className="list-box senin">
                    <div className="hari">
                        Senin
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(0)}
                        </ul>
                    </div>
                </div>
                <div className="list-box selasa">
                    <div className="hari">
                        Selasa
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(1)}
                        </ul>
                    </div>
                </div>
                <div className="list-box rabu">
                    <div className="hari">
                        Rabu
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(2)}
                        </ul>
                    </div>
                </div>
                <div className="list-box kamis">
                    <div className="hari">
                        Kamis
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(3)}
                        </ul>
                    </div>
                </div>
                <div className="list-box jumat">
                    <div className="hari">
                        Jumat
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(4)}
                        </ul>
                    </div>
                </div>
                <div className="list-box sabtu">
                    <div className="hari">
                        Sabtu
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(5)}
                        </ul>
                    </div>
                </div>
                <div className="list-box ahad center-box">
                    <div className="hari">
                        Ahad
                    </div>
                    <div className="list-value">
                        <ul>
                            {printValueList(6)}
                        </ul>
                    </div>
                </div>
            </div>

            <button onClick={() => testArr()}> open </button>

            <div className={`edit-box ${editBoxState ? 'show-box' : 'unshow-box'}`}>
                <button onClick={() => editBox()}> close </button>
                <br />
                <p>
                    teks yang akan di edit <span className="edit-tugas"> {"'"+editedTugas+"'"} </span>
                </p>

                <label htmlFor="input-edit" >masukkan teks</label>
                <input type="text" className="input-edit" value={inputEditTugas} onChange={(event) => setInputEditTugas(event.target.value)} />
                <button onClick={() => editTugas(inputEditTugas)}> edit </button>
                <button onClick={test}> cek </button>
            </div>
        </div>
    )
}
