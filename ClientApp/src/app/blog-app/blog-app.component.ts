import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-blog-app',
  templateUrl: './blog-app.component.html',
  styleUrls: ['./blog-app.component.scss']
})
export class BlogAppComponent implements OnInit {

  loginResponse:any;
  password:string;

  constructor(
    private loginService: LoginService) {
    }

  ngOnInit() {
  }

  onSubmit(form, event:Event) {
    event.preventDefault();
    console.log(form.value.password);
    this.loginService.login(form.value.password).then(response =>  {
        console.log(response);
        this.loginResponse = response;
    });
    return false;
  }

  styleswitch(event){
    event.stopPropagation();
    var styleId = event.target.id;
    console.log(styleId);
    $('link[rel*=style][title]').each(function(i) {
        //其他CSS 關閉
        this.disabled = true;
        if (this.getAttribute('title') === styleId) {
           console.log(this.getAttribute('title'));
            //指定CSS打開
            this.disabled = false;
        }
    });
    this.createCookie('style', styleId, 365);
  }

  createCookie(name, value, days)
  {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toUTCString();
      }
      else {
          var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
  }

}
