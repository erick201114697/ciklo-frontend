import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUser} from '../../../domain/entities/user/user';
import {UserAData} from '../../../@core/data/user';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userStored: IUser;

  camiones: any[];
  pilotos: any[];
  paquetes: any[];

  constructor(protected router: Router, private userService: UserAData) {
  }

  ngOnInit() {
    this.userStored = JSON.parse(localStorage.getItem('user'));

    this.userService.getCamion().subscribe((data: any) => {
      this.camiones = data;
    });
    this.userService.getPaquete().subscribe((data: any) => {
      this.paquetes = data;
    });
    this.userService.getPiloto().subscribe((data: any) => {
      this.pilotos = data;
    });
  }

  register(form: NgForm) {
    form.value.usuario = {
      id: this.userStored.id,
      mail: this.userStored.mail,
    };
    console.log(form.value);
    this.userService.postAsignacion(form.value).subscribe((data: any) => {
      this.router.navigate(['pages/user/asignacion']);
    });
  }
}
