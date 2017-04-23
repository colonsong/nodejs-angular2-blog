import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FlickrService } from '../../service/flickr.service';

declare var tinymce: any;
@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  photoSetList:any;
  constructor(
    private flickrService: FlickrService,
  
  ) { }

  ngOnInit(): void {
       this.flickrService.photoSetGetList().then(response =>  {
         console.log(response);
         this.photoSetList = response;
       
        });
  }
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}