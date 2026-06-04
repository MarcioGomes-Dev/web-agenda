import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //Verificar se a requisição HTTP é para a API da agenda
  if (req.url.startsWith('http://localhost:8083/api/')) {
    //Capturar os dados que estão na sessionStorage
    const usuario = sessionStorage.getItem('usuario');

    //Capturar o TOKEN JWT que está na sessionStorage
    const token = JSON.parse(usuario!).token;

    //Adicionar o TOKEN JWT no cabeçalho da requisição
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(authReq);
  }
  else {
    return next(req);
  }

};
