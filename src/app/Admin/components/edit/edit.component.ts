import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { AppState } from 'src/app/sharedAppStatus/store/app-state';
import { setApiStatus } from 'src/app/sharedAppStatus/store/app.action';
import { selectAppState } from 'src/app/sharedAppStatus/store/app.selector';
import { invokeParcelUpdateApi } from '../../adminStore/actions';
import { selectParcelById } from '../../adminStore/selectors';
import { IParcel } from '../../interfaces/createParceinterface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  createParcelForm: FormGroup;
  constructor(private store:Store,private appStore:Store<AppState>, private route: ActivatedRoute ,private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    let fetchFormData$ = this.route.paramMap.pipe(
      switchMap((param) =>{
        let id = Number(param.get('id'))
        return this.store.pipe(select(selectParcelById(id)));
      })
    )
   fetchFormData$.subscribe((data) =>{
    if(data){
       this.createParcelForm = this.fb.group({
         id: [data.id],
         sender: [data.sender, [Validators.required]],
         receiver: [data.receiver, [Validators.required]],
         weight: [data.weight, [Validators.required]],
         price: [data.price, [Validators.required]],
         from: [data.from, [Validators.required]],
         to: [data.to, [Validators.required]],
         pick_date: [data.pick_date, [Validators.required]],
         deliver_date: [data.deliver_date, [Validators.required]],
         tracking_no: [data.tracking_no, [Validators.required]],
       });
    }
    else{
      this.router.navigate(['/dashboard']);
    }
   })

    
  }
  Update() {
    let parcelForm:IParcel = this.createParcelForm.value;
    console.log(parcelForm);
    
    this.store.dispatch(invokeParcelUpdateApi({ payload: {... parcelForm} }));

    let appStatus$ = this.store.pipe(select(selectAppState));
    appStatus$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }
}
