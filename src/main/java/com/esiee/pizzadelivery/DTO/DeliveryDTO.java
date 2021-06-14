package com.esiee.pizzadelivery.DTO;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;


public class DeliveryDTO {

    private String staff;
    private String client;
    private String vehicule;
    private boolean isLate;
    private String pizza;
    private float prix;

    public DeliveryDTO() {
    }

    public String getLivreur() {
        return staff;
    }

    public void setLivreur(String staff) {
        this.staff = staff;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getVehicule() {
        return vehicule;
    }

    public void setVehicule(String vehicule) {
        this.vehicule = vehicule;
    }

    public boolean isRetard() {
        return isLate;
    }

    public void setRetard(boolean isLate) {
        this.isLate = isLate;
    }

    public String getPizza() {
        return pizza;
    }

    public void setPizza(String pizza) {
        this.pizza = pizza;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }


}
