import React, { Component } from 'react';
import $ from 'jquery';
class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            nama: '',
            umur: '',
            jenkel: '',
            alamat: '',
            hobby: []
        }
    }

    handleNamaChange = (event) => {
        this.setState({
            nama: event.target.value
        })
    }

    handleUmurChange = (event) => {
        this.setState({
            umur: event.target.value
        })
    }

    handleAlamatChange = (event) => {
        this.setState({
            alamat: event.target.value
        })
    }
    handleJenkelChange = (event) => {
        this.setState({
            jenkel: event.target.value
        })
    }

    handleHobbyChange = (event) => {
        let arr;
        if(event.target.checked){
            if(event.target.value == 1){
                arr = "Ambyar"
            }
            if(event.target.value == 2){
                arr = "Senja"
            }
            if(event.target.value == 3){
                arr = "Galau"
            }
            if(event.target.value == 4){
                arr = "Overthinking"
            }
            if(event.target.value == 5){
                arr = "Mental Breakdown"
            }
            this.state.hobby[event.target.value] = arr;
        }
        else{
            this.state.hobby[event.target.value] = "Tidak Ada Hobby";
        }
    }

    handleSubmit = event => {
        if((this.state.nama != "") && (this.state.umur !="") && (this.state.jenkel != "") && (this.state.alamat != "")){
            $('#result').html(
                "<p> Nama " + this.state.nama + ", Umur " + this.state.umur + " tahun, Jenis Kelamin " + 
                this.state.jenkel + ", Alamat " + this.state.alamat + ", Hobby " + this.state.hobby.join(" ") + "</p>"
            );
            $('.alert').remove();
        }

        if(this.state.nama == ""){
            // $('#hasil').hide()
            $('#nama').append(`<div class="alert alert-danger" role="alert">
            Mohon isi nama
          </div>
          `)
        }
        if(this.state.umur == ""){
            // $('#hasil').hide()
            $('#umur').append(`<div class="alert alert-danger" role="alert">
            Mohon isi umur
          </div>
          `)
        }
        if(this.state.jenkel == ""){
            // $('#hasil').hide()
            $('#jenkel').append(`<div class="alert alert-danger" role="alert">
            Mohon isi jenis kelamin
          </div>
          `)
        }
        if(this.state.alamat == ""){
            // $('#hasil').hide()
            $('#alamat').append(`<div class="alert alert-danger" role="alert">
            Mohon isi alamat
          </div>
          `)
        }
        event.preventDefault();
    }

    handleAlert = () => {
            $('.alert').remove()
    }

    
    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <center>
                <div className="form-group">
                    <label >Nama : </label>
                    <input type="text" className="form-control" value={this.state.nama} onChange={this.handleNamaChange}  />
                    </div>
                    <div id = "nama"></div>
                <br/>

                <div className="form-group">
                    <label >Umur : </label>
                    <input type="number" className="form-control" min = "0" value={this.state.umur} onChange={this.handleUmurChange}  />
                </div>
                <div id = "umur"></div>
                <br/>
            
                <div className="form-check">
                    <label >Jenis Kelamin : </label>
                    <input className="form-check-input" type="radio" checked={this.state.jenkel === "Pria"} onChange={this.handleJenkelChange} name="Pria" value="Pria"/>Pria
                    <input className="form-check-input" type="radio" checked={this.state.jenkel === "Wanita"} onChange={this.handleJenkelChange} name="Wanita" value="Wanita"/>Wanita
                </div>
                <div id = "jenkel"></div>
                <br/>

                <div className="form-group">
                <label >Alamat : </label>
                <textarea className="form-control" rows="4" value={this.state.alamat} onChange={this.handleAlamatChange} ></textarea>
            </div>
            <div id = "alamat"></div>
            <br/>
            
            <div className="form-check">
                <label >Hobby : </label>
                <input className="form-check-input" type="checkbox" onChange={this.handleHobbyChange} name="Ambyar" value="1"/>
                <label className="form-check-label">
                    Ambyar
                </label>
                <input className="form-check-input" type="checkbox" onChange={this.handleHobbyChange} name="Senja" value="2"/>
                <label className="form-check-label">
                    Senja
                </label>
                <input className="form-check-input" type="checkbox" onChange={this.handleHobbyChange} name="Galau" value="3"/>
                <label className="form-check-label">
                    Galau
                </label>
                <input className="form-check-input" type="checkbox" onChange={this.handleHobbyChange} name="Overthinking" value="4"/>
                <label className="form-check-label">
                    Overthinking
                </label>
                <input className="form-check-input" type="checkbox" onChange={this.handleHobbyChange} name="Mental Breakdown" value="5"/> 
                <label className="form-check-label">
                    Mental Breakdown
                </label>
            </div>
            <br/>

                <button type="submit" onClick={this.handleAlert}>Submit</button>
                </center>
            </form>
            
            <br/>
            <center>
            <h4>Hasil: </h4>
            <p id = "result"></p>
            </center>
            </div>
            

            
        );
    }
}
export default Form