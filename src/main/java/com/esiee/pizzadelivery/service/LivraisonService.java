package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.repository.LivraisonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivraisonService {

    @Autowired
    private LivraisonRepository livraisonRepository;

    public Livraison newLivraison(Livraison livraison){
        livraisonRepository.save(livraison);
        return livraison;
    }

    public List<Livraison> findAll(){
        return livraisonRepository.findAll();
    }
}
