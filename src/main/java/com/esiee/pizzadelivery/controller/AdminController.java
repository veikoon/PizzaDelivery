package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.model.User;
import com.esiee.pizzadelivery.repository.PizzaRepository;
import com.esiee.pizzadelivery.repository.UserRepository;
import com.esiee.pizzadelivery.service.AdminService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AdminController {

        private Logger logger = LoggerFactory.getLogger(com.esiee.pizzadelivery.controller.UserController.class);

        @Autowired
        private AdminService adminService;

        @RequestMapping(value="/pizza/new", method= RequestMethod.POST)
        public Pizza newPizza(@RequestBody Pizza pizza) {
            logger.info("newPizza()");
            return adminService.newPizza(pizza);
        }

        @RequestMapping(value="/pizza/delete", method= RequestMethod.DELETE)
        public boolean deletePizza(@RequestParam String name) {
            logger.info("deletePizza()");
            adminService.deletePizza(name);
            return true;
        }

        @RequestMapping(value="/pizza", method= RequestMethod.GET)
        public Pizza findPizza(@RequestParam String name) {
            logger.info("findPizza()");
            return adminService.findByName(name);
        }

        @RequestMapping(value="/taille/new", method= RequestMethod.POST)
        public Taille newTaille(@RequestBody Taille taille) {
            logger.info("newTaille()");
            return adminService.newTaille(taille);
        }

        @RequestMapping(value="/taille/delete", method= RequestMethod.DELETE)
        public boolean deleteTaille(@RequestParam String name) {
            logger.info("deleteTaille()");
            adminService.deleteTaille(name);
            return true;
        }
}
