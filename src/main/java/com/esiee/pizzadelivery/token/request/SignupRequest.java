package com.esiee.pizzadelivery.token.request;

import javax.validation.constraints.*;
import java.util.Set;

public class SignupRequest {

    @NotBlank
    @Size(min = 3, max = 40)
    private String login;

    private Set<String> role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    @Size(max = 40)
    private String nom;

    @NotBlank
    @Size(max = 40)
    private String prenom;

    @NotBlank
    @Size(max = 200)
    private String adresse;

    @NotBlank
    @Size(max = 40)
    private String telephone;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Set<String> getRole() {
        return role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}