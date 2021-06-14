package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Livreur;
import com.esiee.pizzadelivery.repository.LivreurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivreurService {

    @Autowired
    private LivreurRepository livreurRepository;

    public Livreur newLivreur(Livreur livreur){
        livreurRepository.save(livreur);
        return livreur;
    }

    public void deleteLivreur(String name){
        livreurRepository.deleteByName(name);
    }

    public Livreur findByName(String name){
        return livreurRepository.findByName(name);
    }

    public List<Livreur> findAll(){
        return livreurRepository.findAll();
    }
}
