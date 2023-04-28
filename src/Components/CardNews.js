class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/photo-default.png";
        newsImage.alt = "Imagem da noticia"
        cardLeft.appendChild(newsImage);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        
        const author =document.createElement("span");
        author.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.href = this.getAttribute("link")
        linkTitle.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        cardRight.appendChild(author);
        
        cardRight.appendChild(linkTitle);
        cardRight.appendChild(newsContent);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }
    
    styles(){
        const style = document.createElement("style");
            style.textContent = `
            .card {
                width: 720px;
                border: 1px solid gray;
                margin-bottom: 2rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 12px 15px 32px 12px rgba(0,0,0,0.75);
                -webkit-box-shadow: 12px 15px 32px 12px rgba(0,0,0,0.75);
                -moz-box-shadow: 12px 15px 32px 12px rgba(0,0,0,0.75);
            }
            
            .card__left {
                display: flex;
                justify-content: center;
                padding: .8rem;
            }
            
            .card__left > img{
                max-width: 10rem;
                max-height: 15rem;
                width: auto;
                height: auto;
            }
            
            .card__right {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .card__right > a{
                font-size: 20px;
                margin: .8rem 0 .8rem 0;
                color: red;
                text-decoration: none;
            }
            
            .card__right > p {
                font-weight: 300px;
            }
            `;
        return style;
    }
}
customElements.define("card-news", CardNews);