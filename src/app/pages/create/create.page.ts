import { Rnc } from './../rncs/rncs.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Regimen } from  '../rncs/rncs.page';
import { RncService } from '../rncs/rnc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rncService: RncService,
    private router: Router
  ) { }

  ngOnInit() {

    this.createForm = this.fb.group({
      cedulaORnc: ['', Validators.required],
      nombreRazonSocial: ['', Validators.required],
      nombreComercial: ['', Validators.required]
    })
  }

  onCreateRnc(): void {
    const { cedulaORnc, nombreRazonSocial, nombreComercial } = this.createForm.value;

    const newRnc: Rnc = {
      cedulaORnc,
      nombreRazonSocial, 
      nombreComercial,
      regimenDePago: Regimen.NORMAL
    }

    this.rncService.create(newRnc);
    this.router.navigate(['/']);
  }

}
