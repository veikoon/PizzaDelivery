package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Livreur;
import com.esiee.pizzadelivery.service.LivreurService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class LivreurController {

        private Logger logger = LoggerFactory.getLogger(LivreurController.class);

        @Autowired
        private LivreurService livreurService;

        @RequestMapping(value="/livreur/new", method= RequestMethod.POST)
        public Livreur newLivreur(@RequestBody Livreur livreur) {
            logger.info("newLivreur()");
            logger.info("name :" + livreur.getName());
            return livreurService.newLivreur(livreur);
        }

        @RequestMapping(value="/livreur/delete", method= RequestMethod.DELETE)
        public boolean deleteLivreur(@RequestParam String name) {
            logger.info("deleteLivreur()");
            livreurService.deleteLivreur(name);
            return true;
        }

        @RequestMapping(value="/livreur", method= RequestMethod.GET)
        public Livreur findLivreur(@RequestParam String name) throws Exception {
            logger.info("findLivreur()");
            return livreurService.findByName(name);
        }

        @RequestMapping(value="/livreur/all", method= RequestMethod.GET)
        public List<Livreur> findAll() throws Exception {
            logger.info("findAll()");
            return livreurService.findAll();
        }
}
