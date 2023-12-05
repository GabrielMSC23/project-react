import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';



import Figure from 'react-bootstrap/Figure';


import Nav from 'react-bootstrap/Nav';
import Main from './main';


import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";



import Offcanvas from 'react-bootstrap/Offcanvas';

  

function Home() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);
  const [lgShow5, setLgShow5] = useState(false);
  const [lgShow6, setLgShow6] = useState(false);
    
  return ( 
        <>
        <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>

       { /*INICIO CAROUSEL */}
      <h1>Últimas Notícias</h1>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.587e88ba5a8a8971c161896c5393766d?rik=DzJga5m4BAvu4A&riu=http%3a%2f%2fagenciabrasil.ebc.com.br%2fsites%2fdefault%2ffiles%2fatoms%2fimage%2f1061559-rj_12.01.2016_tmaz-2563.jpg&ehk=r8Gal7N3jde%2bbeBXzQ7Ef3zsdYGPMn8bA0I7sfYk8p8%3d&risl=1&pid=ImgRaw&r=0"
          alt="First slide"
          style={{width: 1060, height: 342}}
        />
        <Carousel.Caption>
          <h3>últimas notícias</h3>
          <p>Rio de Janeiro segue em estágio de alerta por causa de chuvas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.r7.com/images/refugiados-europa-13062018115009661?dimensions=460x305"
          alt="Second slide"
          style={{width: 1060, height: 342}}
        />

        <Carousel.Caption>
          <h3>Europa busca saída para a crise dos refugiados</h3>   
          <p>Milhares de pessoas continuam a arriscar a vida em perigosas travessias rumo ao continente, fugindo de guerras, perseguição e pobreza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2-g1.glbimg.com/VvIZ9QEw_VHYESL4YoAidOsWgoI=/0x0:6720x4480/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/2/9/oz5AdNQnSrZfZy2SZnIA/pexels-karolina-grabowska-4386465.jpg"
          alt="Third slide"
          style={{width: 1060, height: 342}}
        />

        <Carousel.Caption>
          <h3>Dólar sobe e fecha a R$ 4,96, de olho em crise na China e juros nos EUA; Ibovespa cai aos 115 mil pontos</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

       
    </Col>
    <br/>
    <br/>
    <br/>
    <h1 style={{textAlign: 'center', }}>Principais Destinos</h1>    
    { /*INICIO CARDS */}

        
      </Row>
      <br/><br/>
      
      <Row>
        {/*Inicio segundo card */}
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OSK.HEROq7HMnPOmD0oZq67fSiPpCAZeldpMagr5w76l67Bsnac&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"/>
      <Card.Body>
        <Card.Title>Rio de Janeiro</Card.Title>
        <Card.Text>
        Pacotes de viagem com até 50% de economia e pagamento facilitado em até 12x iguais.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow2(true)}>Saiba mais</Button>

   
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rio de Janeiro</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        Sobre este lugar
Rio de Janeiro é um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da América Latina e de todo o Hemisfério Sul, a capital fluminense é a cidade brasileira mais conhecida no exterior, funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente. É a segunda maior metrópole do Brasil, a sexta maior da América e a trigésima quinta do mundo. Sua população estimada pelo IBGE para 1.º de julho de 2021 era de 6 775 561 habitantes. Tem o epíteto de Cidade Maravilhosa, e os que nela nascem são chamados de cariocas.
<br/>
<div style={{textAlign: 'center'}}>


</div>

        </Offcanvas.Body>
        
      </Offcanvas>
    
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow2}
        onHide={() => setLgShow2(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
        src="https://th.bing.com/th?id=OSK.HEROq7HMnPOmD0oZq67fSiPpCAZeldpMagr5w76l67Bsnac&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
        
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>Rio de Janeiro</h1>
            Devido à grande oferta turística do Rio de Janeiro, é comum encontrar opções de pacotes de viagens para o destino. Reserve já o seu pacote de viagem parar o Rio de Janeiro
            </Col>
            <a href='/Trailer_horadorush'><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
        </Col>




      {/*Inicio terceiro card */}

        <Col xs={6} md={4}>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OSGI.E583C2E2C8FF66F338EC99F3905D83DC&w=472&h=240&c=8&rs=2&o=6&dpr=1.3&pid=TravelL2" />
      <Card.Body>
        <Card.Title>Nova Iorque</Card.Title>
        <Card.Text>
        Confira nossa vasta seleção com as atividades mais bem avaliadas para sua viagem.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button>Saiba mais</Button>
      </Card.Body>
    </Card>        
    
    </Col>



      {/*Inicio quarto card */}


        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/OeMOu_9bPmH3Z8HSDon7k7tC6nE=/480x360/smart/filer_public/b5/43/b543a66b-9981-452a-b7b8-a0ebd329b9b4/maggie_1.jpg" />
      <Card.Body>
        <Card.Title>TWD: Dead City ganha nova data</Card.Title>
        <Card.Text>
        Derivada é estrelada por Maggie e Negan
        </Card.Text>

        { /*INICIO MODAL */}

        <Button>Saiba mais</Button>
     
      </Card.Body>
    </Card>        
    
    </Col>
      </Row>

      <br/><br/>

      <Row>

        {/*Inicio quinto card */}
        <Col xs={6}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/Ngjd2ch4-dxWC-mHhTFUYC4u0lk=/480x360/smart/filer_public/d2/83/d2834ec8-4e7c-44ce-8617-cb790478ea81/prs_220927_gs_0228.jpg" />
      <Card.Body>
        <Card.Title>Especial de Power Rangers ganha trailer</Card.Title>
        <Card.Text>
        Série chega à Netflix em abril
        </Card.Text>
        <Button>Saiba mais</Button>
      </Card.Body>
    </Card>
    
    </Col>

    <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/FryFkCciN2T5KL2kkFHT9AYUGkY=/480x360/smart/filer_public/27/67/2767765c-1088-43bb-958e-1b64ae0f095d/capa_de_destaque_-_480_x_360_35.png" />
      <Card.Body>
        <Card.Title>Invasão Secreta ganha data!</Card.Title>
        <Card.Text>
        Nova produção da Marvel chega em 21 de junho.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button>Saiba mais</Button>
      
      </Card.Body>
    </Card>
        </Col>

       
      </Row>
    </Container>
    

    
    </>
    
    
    );
}

export default Home;