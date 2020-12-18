import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CardapioModel } from './cardapio.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CardapioService {
    private baseUrl = `https://localhost:44338/Cardapio/`;
    
    constructor(private httpClient: HttpClient) { }

    listar(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl).pipe(retry(1), catchError(this.handleError));
    }

    excluir(cardapioId: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}?id=${cardapioId}`).pipe(retry(1), catchError(this.handleError));
    }

    editar(item: CardapioModel): Observable<any>{
        const url = this.baseUrl;
        return this.httpClient.put(url, item);
    }

    salvar(item: CardapioModel): Observable<any>{
        const url = this.baseUrl;
        return this.httpClient.post(url, item);
    }

    obter(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl}obterItem?id=${id}`).pipe(retry(1), catchError(this.handleError));
    }

    handleError(error) {
        return throwError(error);
    }
}