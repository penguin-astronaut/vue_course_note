export class LocalStorageNotes {
  #key = 'notes';
  get = () => JSON.parse(localStorage.getItem(this.#key)) ?? [];
  add = note => {
    localStorage.setItem(this.#key, JSON.stringify([...this.get(), note]))
  }
  remove = id => {
    let notes = this.get();
    notes.splice(id, 1);
    localStorage.setItem(this.#key, JSON.stringify(notes))
  }
}
