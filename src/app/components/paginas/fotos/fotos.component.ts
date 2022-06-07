import { Component, OnInit } from '@angular/core';

import { foto } from 'src/app/fotos';

import { Fotos } from 'src/app/fotoss';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fotosModal: Fotos = {urlImg:'', nome: '', desc: ''}
  
  fotos : Fotos[] = [
    { urlImg: 'https://revistacarro.com.br/wp-content/uploads/2022/04/Mustang-Mach-1-2022_3.jpg', 
      nome: 'Mustang March 1', 
      desc: 'Nascido para pistas, o Mustang Mach 1 carrega consigo o legado histórico de performance e esportividade junto a exclusividade de uma edição limitada.'},
    {urlImg: 'https://s2.glbimg.com/TWJQIVYbTAb30Fqo48MU2P4Yagk=/0x0:6500x4230/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/C/CiSTJQTFGyDOKdwzOyrg/ferrari-812-gts-59.jpeg', 
      nome: 'Ferrari 812 GTS', 
      desc: 'O carro mais glorioso e harmônico do mundo. Com um motor V12, automóvel da montadora italiana é combinação perfeita entre velocidade e sensualidade.'},
    {urlImg: 'https://s2.glbimg.com/lHJCnWWPCUnKYO9w1jpcaVdjov4=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/i/d/dLzNHJRdADSKsnvPBFTw/2020-03-03-porsche-911-turbo-s-96.jpeg', 
      nome: 'Porshe 911 Turbo S', 
      desc: 'Extremamente esportivo e, ao mesmo tempo, confortável e irrestritamente apto para o uso diário.Os modelos 911 Turbo seguem de forma consistente este caminho.'}   
  ]
  abrirModal(fotos: Fotos){
    this.fotosModal = fotos;
  
  }
}
