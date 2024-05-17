export class BookPreview extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow ({
            mode: 'closed'
        })

        shadowRoot.innerHTML =`
            <img
                class="preview__image"
                src="${image}"
            />
                  
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>`
    }
}