import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  user = {
    login: "",
    password: ""
  }

  

  constructor() { }

  signIn(login: string, password: string) {
    if (localStorage.getItem(`user.${login}`) !== null) {
      if (localStorage.getItem(`user.${login}`) === password) {
        this.user = {
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
