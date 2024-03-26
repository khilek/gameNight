export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  get PlayerTemplateCard() {
    return /*html*/`
    <div class="card">
        <div class="card-body">
            ${this.name} - ${this.score}
        </div>
    </div>`
  }
}


