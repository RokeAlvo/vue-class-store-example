import { defineStore } from 'pinia'
import { ref } from 'vue'

export class Store {
  public categories: Category[] = []

  public get len() {
    return this.categories.reduce((total, cat) => total + cat.len, 0)
  }

  public addCat(name: string) {
      this.categories.push(new Category(name))
  }
}

export class Category {
  constructor(public name: string) {}

  public todos: ToDo[] = []

  public get len() {
    return this.todos.reduce((total, todo) => total + todo.len, 0)
  }

  addTodo(value: string) {
    this.todos.push(new ToDo(value))
  }
}

export class ToDo {
  constructor(public value: string) {}

  get len() {
      return this.value.length
    }
}

export const useToDoStore = defineStore('toDo', () => {
  const data = ref(new Store())

  return data
})

