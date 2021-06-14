package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.service.TailleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TailleController {

        private Logger logger = LoggerFactory.getLogger(TailleController.class);

        @Autowired
        private TailleService tailleService;

        @RequestMapping(value="/taille/new", method= RequestMethod.POST)
        public Taille newTaille(@RequestBody Taille taille) {
            logger.info("newTaille()");
            logger.info("name :" + taille.getName());
            return tailleService.newTaille(taille);
        }

        @RequestMapping(value="/taille/delete", method= RequestMethod.DELETE)
        public boolean deleteTaille(@RequestParam String name) {
            logger.info("deleteTaille()");
            tailleService.deleteTaille(name);
            return true;
        }

        @RequestMapping(value="/taille", method= RequestMethod.GET)
        public Taille findTaille(@RequestParam String name) throws Exception {
            logger.info("findTaille()");
            return tailleService.findByName(name);
        }

        @RequestMapping(value="/taille/all", method= RequestMethod.GET)
        public List<Taille> findAll() throws Exception {
            logger.info("findAll()");
            return tailleService.findAll();
        }
}
