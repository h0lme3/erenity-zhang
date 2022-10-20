import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sdt-question-box',
  templateUrl: './sdt-question-box.component.html',
  styleUrls: ['./sdt-question-box.component.scss']
})
export class SdtQuestionBoxComponent implements OnInit {
  @Input() answers: any[];
  @Input() content: any;
  @Input() formGroup: any;
  @Input() isSubmit:boolean = false;
  @Output() result = new EventEmitter<any>();
  @Output() changes= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
      this.formGroup.valueChanges.subscribe(rep=>{
        this.changes.emit(rep)
      })
  }

  

}
