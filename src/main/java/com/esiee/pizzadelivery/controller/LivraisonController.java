package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Livreur;
import com.esiee.pizzadelivery.service.LivraisonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class LivraisonController {

        private Logger logger = LoggerFactory.getLogger(LivraisonController.class);

        @Autowired
        private LivraisonService livraisonService;

        @RequestMapping(value="/livraison/new", method= RequestMethod.POST)
        public Livraison newLivraison(@RequestBody Livraison livraison) {
            logger.info("newLivraison()");
            return livraisonService.newLivraison(livraison);
        }

        @RequestMapping(value="/livraison/all", method= RequestMethod.GET)
        public List<Livraison> findAll() throws Exception {
            logger.info("findAll()");
            return livraisonService.findAll();
        }
}
