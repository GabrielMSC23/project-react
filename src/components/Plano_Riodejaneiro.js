import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Dash from './dash';

function PlanoRio (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <>
        
        
        <div class="shadow-lg p-3 mb-5 bg-white rounded"><h1>Confira os melhores planos para o Rio de janeiro</h1></div>     
        <cite title="Título da fonte">O turismo no estado do Rio de Janeiro oferece diversas atrações históricas, naturais e culturais.
          A capital fluminense é internacionalmente conhecida pela beleza de suas praias e morros, além de ser um grande polo de turismo cultural, contemplada por diversos museus, teatros e casas de espetáculos.</cite>
        <br/><br/><br/>

        <div class="container">
  
  <div class="row">
  <br/>
  <iframe width="1000" height="700" src="https://www.youtube.com/embed/fA7kQn-l6T4" title="Rio de Janeiro, Brazil 🇧🇷  - by drone [4K]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    
    
    
    <div class="w-100"></div>
    <div class="col">
    <br/><br/><br/><br/>
            <p>Planejar uma viagem ao Rio de Janeiro é uma aventura cheia de possibilidades. Das praias icônicas de Copacabana e Ipanema às vistas deslumbrantes do Cristo Redentor no Corcovado, cada dia promete ser inesquecível. Não se esqueça de explorar o bairro boêmio de Santa Teresa e saborear a deliciosa culinária carioca em botecos locais.</p>
            <p>Para uma experiência mais cultural, visite o Museu de Arte Moderna ou aproveite a energia contagiante do Carnaval. Não deixe de incluir um passeio de barco pela Baía de Guanabara e, é claro, relaxe em praias de areias douradas. O Rio está esperando para te receber de braços abertos. </p>

    </div>
    <div class="col">
        
    <br/><br/><br/><br/>
    <h3 class="shadow-lg p-3 mb-5 bg-white rounded">Informações adicionais</h3> 
    
        
    <table class="table">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Valor médio das diárias: </td>
      <td>R$ 612,00</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Média de avaliação dos Hotéis:</td>
      <td>4,7/5</td>
      
    </tr>

    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    

    
    
  </tbody>
</table>


    </div>
    
    <div className="d-grid gap-2">
    <Button variant="primary" onClick={handleShow}>
        Consultar valores
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Consultar as melhores condições para hospedagens</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src='https://content.skyscnr.com/m/6f348492431bc9a1/original/GettyImages-179371448_doc.jpg?resize=1800px:1800px&quality=100' style={{width: '350px'}}/>
          <br/>
          <div style={{textAlign: 'center'}}>
          <br/>
          <Button variant="primary" a href='.\dash'>
        Consultar valores
      </Button>

          </div>
          
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  </div>
</div>


       

       
    </>
       
    );
}
export default PlanoRio;