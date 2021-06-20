package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.model.Vehicule;
import com.esiee.pizzadelivery.service.VehiculeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
public class VehiculeController {

        private Logger logger = LoggerFactory.getLogger(VehiculeController.class);

        @Autowired
        private VehiculeService vehiculeService;

        @RequestMapping(value="/vehicule/new", method= RequestMethod.POST)
        public Vehicule newVehicule(@RequestBody Vehicule vehicule) {
            logger.info("newVehicule()");
            logger.info("name :" + vehicule.getName());
            return vehiculeService.newVehicule(vehicule);
        }

        @RequestMapping(value="/vehicule/delete", method= RequestMethod.DELETE)
        public boolean deleteVehicule(@RequestParam String name) {
            logger.info("deleteVehicule()");
            vehiculeService.deleteVehicule(name);
            return true;
        }

        @RequestMapping(value="/vehicule", method= RequestMethod.GET)
        public Vehicule findVehicule(@RequestParam String name) throws Exception {
            logger.info("findVehicule()");
            return vehiculeService.findByName(name);
        }

        @RequestMapping(value="/vehicule/all", method= RequestMethod.GET)
        public List<Vehicule> findAll() throws Exception {
            logger.info("findAll()");
            return vehiculeService.findAll();
        }
}
