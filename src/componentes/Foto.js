import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-in fo">
              <div className="foto-info-likes">

                <a href="#">
                  alots_ssa
                </a>

                ,

                <a href="#">
                  rafael_rollo
                </a> 

                 curtiram
             
              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

              <ul className="foto-info-comentarios">
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                </li>
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/49522040_2312066342159473_8447932141286719488_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&amp;_nc_ohc=DK6ltnnwq2IAX--6WvI&amp;oh=1ae50fcf26010fc2242a5fe2ea06dba7&amp;oe=5EBA2B6B" alt='User'/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>            
        );
    }
}

export default class Foto extends Component {
    render(){
        return (
          <div className="foto">
            <FotoHeader/>
            <img alt="foto" className="foto-src" src="https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79791137_193837074991084_8059927251144177877_n.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=30NVovwRRw4AX8K-mtM&amp;oh=532867ab57eaab33f96aae61135029f4&amp;oe=5EB8F6E6"/>
            <FotoInfo/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}