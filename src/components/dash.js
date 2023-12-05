import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';





function Dash() {
  const [lgShow, setLgShow] = useState(false);
    return ( 
      <>
      <div >
      
      <Container>
      <Row>
        <Col sm={8}>
          
        <Container fluid>
      <Row>
        <Col><h1>ÚLTIMAS NOTÍCIAS</h1></Col>
      </Row>
    </Container>
    
      
      <br/><br/><br/>


      
      <Container>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://cdn.ome.lt/cAxqdLBNnl8xrMGozTFimLwARAU=/987x0/smart/uploads/conteudo/fotos/aranhaverso_wPDDMSA.png'/></Col>
        <Col><h6>Homem-Aranha Através do Aranhaverso ganhará curta-metragem</h6></Col>
        <Col></Col>
        <Col></Col>
        
        
        
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://cdn.ome.lt/WCD8QpLp84s12rcsdjPo0og0qow=/987x0/smart/uploads/conteudo/fotos/the_town_x9HWsP5.png'/></Col>
        <Col><h6>Bebe Rexha e H.E.R são confirmadas no The Town</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://cdn.ome.lt/fz_40h0jy-mdCio2JqfZUj2088Q=/987x0/smart/uploads/conteudo/fotos/Clint_Eastwood.png'/></Col>
        <Col><h6>Clint Eastwood planeja dirigir último filme de sua carreira</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://cdn.ome.lt/i1LmFaTHx9Nor-hZQLyDeEculOQ=/987x0/smart/uploads/conteudo/fotos/quesada.png'/></Col>
        <Col><h6>Joe Quesada, ex editor-chefe da Marvel, é contratado pelo Prime Video</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='http://disneyplusbrasil.com.br/wp-content/uploads/2023/03/Invasao-Secreta-Marvel.jpg'/></Col>
        <Col><h6>Invasão Secreta: Nick Fury e cia surgem em novas imagens</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Killers-of-the-Flower-Moon-Everything-We-Know-So-Far-feature.jpg'/></Col>
        <Col><h6>Killers Of The Flower Moon: Filme de Scorsese será exibido em Cannes 2023</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://johto.legiaodosherois.com.br/wp-content/uploads/2023/01/legiao_zeoQGlW7siwK.png'/></Col>
        <Col><h6>Oscar: Academia estuda adicionar novo requisito de elegibilidade para o prêmio</h6></Col>
        <Col></Col>
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      </Container>


        </Col>

        <Col sm={4}>
          
        <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        
<div class="card" styleS="width: 18rem;">
<img class="card-img-top" src="https://a-static.mlcdn.com.br/800x560/geladeira-refrigerador-frost-free-cor-inox-310l-electrolux-tf39s/electrolux/2003558/f8630cefcf8dd1ea967171e25df3e923.jpeg" alt="Imagem de capa do card"/>
  <div class="card-body">
    <h5 class="card-title">Promoção Magazine Luiza</h5>
    <p class="card-text">Geladeira/Refrigerador Frost Free cor Inox 310L Electrolux (TF39S), 11</p>
    <p class="text-danger">De: R$ 2.849,50</p>
    <p class="text-success">Por: R$ 2.839,50</p>
    <a href="https://www.magazineluiza.com.br/geladeira-refrigerador-frost-free-cor-inox-310l-electrolux-tf39s/p/hhf6g7c8k3/ed/refr/?&force=1&seller_id=electrolux&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=71263&gclid=Cj0KCQjwiZqhBhCJARIsACHHEH_Gg9ee4RV3cQU_WyEd8ktgI7Nd_LV_PGmtK4aAOTXeGhTwDBwnZvAaAr7VEALw_wcB&gclsrc=aw.ds" class="btn btn-primary">Visitar</a>
  </div>
</div>
        
        
        
        
        
        <Col></Col>
        
      </Row>

        </Col>
      </Row>
      
      </Container>

      <Container>
        <div>

        <a href='/' > <Button variant="dark">Voltar</Button></a>
        </div>
      
      </Container>

      






      </div>
      

      </>
    
    );
}

export default Dash;