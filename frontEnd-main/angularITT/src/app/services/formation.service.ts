import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Formation from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/all`);
  }

  getFormation(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.apiUrl}/formations/find/${id}`);
  }

  createFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.post<Formation>(`${this.apiUrl}/formations/save`, formation);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(`${this.apiUrl}/formations/${formation.id}`, formation);
  }

  getFormationsByVille(ville: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/byVille?ville=${ville}`);
  }

  getFormationsByTheme(theme: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/byTheme?theme=${theme}`);
  }

  getFormationsByThemeAndVille(theme: string, ville: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/byThemeAndVille?theme=${theme}&ville=${ville}`);
  }
  getThemesFormations(): Observable<String[]> {
    return  this.httpClient.get<String[]>(`${this.apiUrl}/formations/themes`);
  }
  getNomThemesFormations(): Observable<String[]> {
    return  this.httpClient.get<String[]>(`${this.apiUrl}/attributs/byNomThemes`);
  }
  getSousThemesFormations(): Observable<String[]> {
    return  this.httpClient.get<String[]>(`${this.apiUrl}/attributs/byNomSousTheme`);
  }
  getCategorieFormations(): Observable<String[]> {
    return  this.httpClient.get<String[]>(`${this.apiUrl}/attributs/byNomCategorie`);
  }
}
