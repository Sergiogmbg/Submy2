import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioService } from 'src/app/services/servicio-usuario.service';
import {Router} from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelo/Usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formregistro: FormGroup;
  public usuarios: Usuario;
  
  constructor(private formBuilder: FormBuilder, private mimodeloUsuario: ModeloUsuarioService, private router: Router) {

    // variables para los datos del formulario, se tiene que llamar igual que los formcontroller name
    this.formregistro = formBuilder.group({
      nick: ['', [Validators.required]], // falta validador de espacios
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,4})+$/)]],
      password: ['', [Validators.required]],
     // repitepassword: ['', [Validators.required]] // revisar

    });

  }

  ngOnInit() {

  }

  submit() {
    console.log('usuario creado');
    console.log(this.formregistro);
    this.mimodeloUsuario.saveUsuario(this.formregistro.value).subscribe(
      res => {
        console.log('res de registro.comopontents');
        console.log(res);
        location.href = ('inicio');
        
      },
      err => {
        console.log('err de registro.comopontents');
        console.log(err);
      }


    );

  }
  // validadcion
  get nick(){
    return this.formregistro.get('nick');
  }
  
  get nombre(){
    return this.formregistro.get('nombre');
  }

  get apellidos(){
    return this.formregistro.get('apellidos');
  }

  get email(){
    return this.formregistro.get('email');
  }

}
