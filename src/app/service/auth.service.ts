import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = ''
  options: any = {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UFT-8',
    }


  }


  constructor() { }
  getTocken(data: any) {
    this.url = `http://127.0.0.1:8000/api/v2/token `
    this.options.method = 'POST'
    this.options.body = JSON.stringify(data)
    return fetch(this.url, this.options)

  }
  getAllDishes() {
    // this.url=`http://127.0.0.1:8000/mdishes`
    // this.options.method='GET'
    let token = localStorage.getItem("token")
    this.options.headers["Authorization"] = `Token ` + token
    this.options.body = ''
    // fetch(this.url,this.options).then(res=>res.json()).then(data=>console.log(data));


    return fetch('http://127.0.0.1:8000/mdishes/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Token ' + token
      },
    })
      

  }


}
