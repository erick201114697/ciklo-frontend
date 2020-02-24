import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserAData} from '../../../@core/data/user';


@Component({
  selector: 'ngx-profile',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.scss'],
})

export class AsignacionComponent implements OnInit {

  asignaciones: any[];

  constructor(protected router: Router, private userService: UserAData) {
  }

  ngOnInit() {
    this.userService.getAsignacion().subscribe((data: any) => {
      this.asignaciones = data;
    });
  }

  deleteDocument(asignacion: any) {
    this.userService.deleteAsignacion(asignacion._id).subscribe((data) => {
      this.asignaciones = this.asignaciones.filter(function (val) {
        return val._id !== asignacion._id;
      });
    });
  }

  nuevo() {
    this.router.navigate(['pages/user/profile']);
  }

}
