import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  get user() {
    if (this._user.login) {
      return this._user
    }

    const user = localStorage.getItem("currentUser")
    if (user) {
      this._user = JSON.parse(user)
    }
    return this._user
  }

  _user = {
    login: "",
    password: ""
  }

  constructor() { }

  signIn(login: string, password: string) {
    if (localStorage.getItem(`user.${login}`) !== null) {
      if (localStorage.getItem(`user.${login}`) === password) {
        this._user = {
          login,
          password
        }
        localStorage.setItem
        ("currentUser", 
        JSON.stringify(this.user)
        )
      } else {
        alert("Неверный пароль!")
      }
    } else {
      alert("Такого пользователя не существует!")
    }
  }

  signUp(login: string, password: string) {
    console.log(login, password)
    if (localStorage.getItem(`user.${login}`) === null) {
      localStorage.setItem(`user.${login}`,password)
      this.signIn(login,password)
    } else {
      alert("Такой пользователь уже существует!")
    }
  }

  signOut() {
    this.user.login = ""
    localStorage.removeItem("currentUser")
  }

  getUser() {
    return this.user
  }
}
